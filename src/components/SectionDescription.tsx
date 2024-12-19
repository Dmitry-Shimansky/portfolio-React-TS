import styled from "styled-components";
import {font} from "../styles/Common";
import {Theme} from "../styles/Theme";

export const SectionDescription = styled.p`
    ${font({weight: 400, Fmax: 32, Fmin: 22})}
    
    color: rgb(102, 102, 102);
    //font-size: 32px;
    //font-weight: 400;
    line-height: 30px;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 124px;
    
    @media ${Theme.media.mobile} {
        margin-bottom: 100px;
    }
`;