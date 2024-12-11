import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {v4 as uuid} from 'uuid';

export const Menu = (props: {headerItems: string[]}) => {
    return (
        <StyledNav>
            <ul>
                {props.headerItems.map((item, index) => {
                    return (
                        <li key={uuid()}>
                            <a href="">{item}</a>
                        </li>
                    )
                })}
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