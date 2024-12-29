import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const StyledTestimony = styled.section`
    position: relative;
`;

const ContentWrapper = styled.div`
    position: relative;
    padding-bottom: 160px;

    & .slider {
        position: absolute;
        top: 55px;
        right: 167px;

        @media ${Theme.media.desktop1100} {
            right: 50%;
            transform: translateX(50%);
            width: 80%;
        }
    }
`;

const FigureWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 97px;

    @media ${Theme.media.desktop1100} {
        padding: 0;
    }
`;

const PurpleBlock = styled.div`
    max-width: 436px;
    width: 100%;
    height: 198px;
    background-color: rgb(255, 241, 255);
`;

export const S = {
    StyledTestimony,
    ContentWrapper,
    PurpleBlock,
    FigureWrapper
}