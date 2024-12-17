import styled from "styled-components";
import {Theme} from "../styles/Theme";

export const StyledButton = styled.button`
    width: 152px;
    height: 53px;
    color: rgb(255, 255, 255);
    background-color: ${Theme.colors.accent};
    border-radius: 5px;
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0;
`;