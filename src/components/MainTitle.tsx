import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const MainTitle = styled.h2`
    ${font({weight: 600, Fmax: 42, Fmin: 30})}
    
    color: ${Theme.colors.mainTitle};
    letter-spacing: 0;
    text-align: left;
    margin-bottom: 38px;
    
    position: relative;

    @media ${Theme.media.mobile} {
        margin-bottom: 10px;
    }
`;