import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {HeaderMenu} from "./menu/HeaderMenu";
import {NameLogo} from "../../components/logo/NameLogo";
import {MobileMenu} from "./mobileMenu/MobileMenu";
import {Theme} from "../../styles/Theme";

export const Header = () => {

        return (
            <StyledHeader>
                <Container>
                    <HeaderWrapper>
                        <NameLogo />
                        <HeaderMenu />
                        <MobileMenu />
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
    background-color: ${Theme.colors.primaryBg};
`;

const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 55px;
    
    &::after {
        position: absolute;
        content: "";
        left: 0;
        bottom: -2px;
        height: 2px;
        width: 100%;
        background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    }
`;
