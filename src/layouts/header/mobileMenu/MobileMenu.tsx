import React from 'react';
import styled, {css} from "styled-components";
import {v4 as uuid} from 'uuid';
import {headerSocialIcons} from "../../../components/data"
import {HeaderSocialIcons} from "./HeaderSocialIcons";
import {Theme} from "../../../styles/Theme";

export const MobileMenu = (props: {headerItems: string[]}) => {
    return (
        <StyledMobileNav>
           <BurgerButton isOpen={false}>
               <span></span>
           </BurgerButton>
            <MobileMenuPopup isOpen={false}>
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

const BurgerButton = styled.button<{isOpen: boolean}>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;
        z-index: 999999;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.accent};
            position: absolute;
            transform: translateY(-10px);
            z-index: 999999;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);
            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.accent};
            position: absolute;
            transform: translateY(10px);
            z-index: 999999;

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;
            `}
        }
    }
`;

const MobileMenuPopup = styled.div<{isOpen: boolean}>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(31, 31, 32, 0.9);
    display: none;
    
    ${props => props.isOpen && css<{isOpen: boolean}>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 67px;
    height: 100%;
    
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
