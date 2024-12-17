import styled from "styled-components";
import {Theme} from "../styles/Theme";


export const SectionTitle = styled.h2`
    color: ${Theme.colors.font};
    font-size: 48px;
    font-weight: 700;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 49px;
    
    position: relative;
    
    &::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${Theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);
    }
`;