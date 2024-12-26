import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

type NameLogoType = {
    fontSize?: string
}

export const NameLogo = (props: NameLogoType) => {
    return (
        <LogoWrapper onClick={() =>{scroll.scrollToTop()}}>
            <FirstName fontSize={props.fontSize}>Dmitry</FirstName>
            <LastName fontSize={props.fontSize}>Shimansky</LastName>
        </LogoWrapper>
    );
};

const LogoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    @media ${Theme.media.desktop1100} {
        display: none;
    }

    @media ${Theme.media.mobile} {
        display: flex;
    }
`;

const FirstName = styled.span<NameLogoType>`
    font-family: 'Source Sans 3', sans-serif;
    font-size: ${props => props.fontSize || "24px"};
    font-weight: 400;
    line-height: 55px;
    color: rgb(251, 168, 32);
`;

const LastName = styled.span<NameLogoType>`
    font-family: 'Source Sans 3', sans-serif;
    font-size: ${props => props.fontSize || "24px"};
    font-weight: 400;
    line-height: 55px;
    color: rgb(17, 17, 17);
`;