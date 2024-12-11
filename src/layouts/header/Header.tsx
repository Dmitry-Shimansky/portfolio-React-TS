import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {headerMenuItems} from "../../components/data"

export const Header = () => {

        return (
            <StyledHeader>
                <Logo />
                <Menu headerItems={headerMenuItems}/>
            </StyledHeader>
        );
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgreen;
`;