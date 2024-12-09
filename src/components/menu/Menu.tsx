import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledNav>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Tech Stack</a>
                </li>
                <li>
                    <a href="">Projects</a>
                </li>
                <li>
                    <a href="">Contacts</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="">
                        <Icon iconId={'github'}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'twitter'}/>
                    </a>
                </li>
                <li>
                    <a href="">
                        <Icon iconId={'linkedIn'}/>
                    </a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
{
    display: flex;
    gap: 30px;

    & ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        list-style: none;

        & li a {
            text-decoration: none;
        }
    }
}
`;