import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {NameLogoType} from "../../modules/interfaces";

const LastName = styled.span<NameLogoType>`
    position: relative;
    font-family: 'Source Sans 3', sans-serif;
    font-size: ${props => props.fontSize || "24px"};
    font-weight: 400;
    line-height: 55px;
    background-image: linear-gradient(90deg, rgb(17, 17, 17), rgb(17, 17, 17));
    color: transparent;
    -webkit-background-clip: text;
    z-index: 9;
    opacity: 1;
    transition: opacity 0.5s linear;
    
    //&::after {
    //    position: absolute;
    //    content: "Shimansky";
    //    top: 0;
    //    left: 0;
    //    //right: 0;
    //    //bottom: 0;
    //    width: 100%;
    //    height: 100%;
    //    background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    //    color: transparent;
    //    -webkit-background-clip: text;
    //    opacity: 0;
    //    z-index: -1;
    //
    //    transition: opacity 0.5s linear;
    //}
`;

const LastNameHelper = styled.span<NameLogoType>`
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    //right: 0;
    //bottom: 0;
    //width: 100%;
    //height: 100%;
    background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
    color: transparent;
    -webkit-background-clip: text;
    opacity: 0;
    z-index: -1;

    transition: opacity 0.5s linear;
`;

const LogoWrapper = styled.div<NameLogoType>`
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
    
    // &:hover ${LastName}::after {
    //     opacity: 1;
    // }

    &:hover ${LastNameHelper} {
        opacity: 1;
    }

    &:hover ${LastName} {
        opacity: 0.5;
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
    LastNameHelper
}