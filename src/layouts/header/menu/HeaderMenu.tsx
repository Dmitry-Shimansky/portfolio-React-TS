import React from 'react';
import styled from "styled-components";
import {v4 as uuid} from 'uuid';
import {headerSocialIcons} from "../../../components/data"
import {HeaderSocialIcons} from "./HeaderSocialIcons";
import {Theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {headerItems: string[]}) => {
    return (
        <StyledNav>
            <List>
                {props.headerItems.map((item) => {
                    return (
                        <ListItem key={uuid()}>
                            <Link href="#">
                                {item}
                                <Mask>
                                    <span>
                                        {item}
                                    </span>
                                </Mask>
                                <Mask>
                                    <span>
                                        {item}
                                    </span>
                                </Mask>
                            </Link>
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
    gap: 51px;
`;

const List = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 67px;
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
    
    &::before {
        content: '';
        display: inline-block;
        height: 2px;
        background-color: rgb(251, 168, 32);
        position: absolute;
        top: 50%;
        left: -10px;
        right: -10px;
        z-index: 1;
        transform: scale(0);
    }
    
    &:hover {
        &::before {
            transform: scale(1);
        }
        
        ${Mask} {
            transform: skewX(12deg) translateX(5px);
            color: #000;
            
            & + ${Mask} {
                transform: skewX(12deg) translateX(-5px);
            }
        }
    }
`;

const Link = styled.a`
    color: transparent;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;
`;
