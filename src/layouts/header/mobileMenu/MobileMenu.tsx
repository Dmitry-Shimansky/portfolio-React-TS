import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {v4 as uuid} from 'uuid';
import {headerSocialIcons, headerMenuItems} from "../../../components/data"
import {MobileSocialIcons} from "./MobileSocialIcons";
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll"

export const MobileMenu = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <StyledMobileNav>
            <BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopup isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <List>
                    {headerMenuItems.map((item) => {
                        return (
                            <ListItem key={uuid()}>
                                <NavLink
                                    to={item.href}
                                    smooth={true}
                                    activeClass="active"
                                    spy={true}
                                    onClick={()=>{setMenuIsOpen(false)}}
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
                <MobileSocialIcons iconItems={headerSocialIcons}/>
            </MobileMenuPopup>
        </StyledMobileNav>
    );
};

const StyledMobileNav = styled.nav`
    display: none;

    @media ${Theme.media.mobile} {
        display: block;
    }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.mainTitle};
        position: absolute;
        left: 49px;
        bottom: 70px;
        //z-index: 999999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: transparent;
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.mainTitle};
            position: absolute;
            transform: translateY(-10px);
            //z-index: 999999;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
                background-color: rgba(255, 255, 255);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.mainTitle};
            position: absolute;
            right: 0;
            transform: translateY(10px);
            //z-index: 999999;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                background-color: rgba(255, 255, 255);
                width: 36px;
            `}
        }
    }
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 150px;
    height: 100%;
    transition: 1s ease-in-out;
`;

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    background-color: rgba(31, 31, 32, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: ${Theme.animations.transition};

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateX(0);
        
        & ${List} {
            gap: 70px;
        }
    `}
`;

const Mask = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    height: 50%;
    overflow: hidden;
    //outline: 1px solid red;
    color: rgba(255, 255, 255);

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
`;
