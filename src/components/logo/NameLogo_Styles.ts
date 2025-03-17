import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {NameLogoType} from "../../modules/interfaces";

const LastName = styled.span<NameLogoType>`
    position: relative;
    font-family: 'Source Sans 3', sans-serif;
    font-size: ${props => props.fontSize || "24px"};
    font-weight: 400;
    line-height: 55px;
    color: #000000;
`;

const LogoWrapper = styled.div<NameLogoType>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;

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
    background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    color: transparent;
    -webkit-background-clip: text;
`;

export const S = {
    LogoWrapper,
    FirstName,
    LastName,
}