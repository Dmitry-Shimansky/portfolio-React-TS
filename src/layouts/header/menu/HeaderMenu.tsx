import React from 'react';
import styled from "styled-components";
import {v4 as uuid} from 'uuid';
import {headerSocialIcons, headerMenuItems} from "../../../components/data"
import {HeaderSocialIcons} from "./HeaderSocialIcons";
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll"

export const HeaderMenu = () => {
    return (
        <StyledNav>
            <List>
                {headerMenuItems.map((item) => {
                    return (
                        <ListItem key={uuid()}>
                            <NavLink
                                to={item.href}
                                smooth={true}
                                activeClass="active"
                                spy={true}
                            >
                                {item.title}
                                <Mask>
                                    <span>
                                        {item.title}
                                    </span>
                                </Mask>
                                <Mask>
                                    <span>
                                        {item.title}
                                    </span>
                                </Mask>
                            </NavLink>
                        </ListItem>
                    )
                })}
            </List>
            <HeaderSocialIcons iconItems={headerSocialIcons} />
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    //gap: 51px;
    height: 100%;
    width: 100%;

    @media ${Theme.media.desktop1100} {
        justify-content: space-between;
    }

    @media ${Theme.media.mobile} {
        display: none;
    }
`;

const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 67px;
    height: 100%;
    flex-grow: 1;

    @media ${Theme.media.desktop1100} {
        justify-content: space-between;
        flex-grow: 1;
        gap: 0;
    }
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: ${Theme.colors.font};
    transition: ${Theme.animations.transition};
    
    & + & {
        top: 50%;
        span {
            display: inline-block;
            transform: translateY(-50%);
        }
    }
`;

const ListItem = styled.li`
    position: relative;
`;

const NavLink = styled(Link)`
    color: transparent;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;

    &::before {
        content: '';
        display: inline-block;
        height: 1px;
        //background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
        background: rgb(231, 15, 170);
        
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        
        transform: scale(0);
        transition: ${Theme.animations.transition};
    }

    &:hover {
        ${Mask} {
            color: ${Theme.colors.buttons};
        }
    }

    &.active {
        &::before {
            transform: scale(1);
        }

        ${Mask} {
            transform: skewX(5deg) translateX(1px);
            color: ${Theme.colors.buttons};

            & + ${Mask} {
                transform: skewX(5deg) translateX(-1px);
            }
        }
    }
`;
