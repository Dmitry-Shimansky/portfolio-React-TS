import React from 'react';
import styled from "styled-components";
import {headerMenuItems} from "../../components/data"
import {Container} from "../../components/Container";
import {HeaderMenu} from "./menu/HeaderMenu";
import {NameLogo} from "../../components/logo/NameLogo";

export const Header = () => {

        return (
            <StyledHeader>
                <Container>
                    <HeaderWrapper>
                        <NameLogo />
                        <HeaderMenu headerItems={headerMenuItems}/>
                    </HeaderWrapper>
                </Container>
            </StyledHeader>
        );
};

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`;

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;
