import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

const StyledEducation = styled.details`
    position: relative;
    max-width: 720px;
    margin-bottom: 38px;

    & summary::after {
        position: absolute;
        content: "";
        left: 0;
        top: 65px;
        height: 2px;
        width: 0;
        background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));

        transition: width 0.5s linear;
    }

    &[open] summary::after {
        width: 100%;
    }
`;

const EducationTitle =styled.summary<{isOpen: boolean}>`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    margin-bottom: 10px;

    h2 {
        margin-bottom: 10px;
    }

    &::before {
        position: absolute;
        left: 0;
        content: "";
        width: 250px;
        height: 0;
        background-color: rgb(0, 255, 255, 0.7);
        border-radius: 50%;
        box-shadow: 0 0 20px 10px rgb(0, 255, 255, 0);
        z-index: 0;

        transition-property: height, box-shadow;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;

        @media ${Theme.media.desktop1100} {
            width: 225px;
        }
        @media ${Theme.media.tablet860} {
            width: 200px;
        }
        @media ${Theme.media.tablet} {
            width: 190px;
        }
        @media ${Theme.media.mobile} {
            width: 170px;
        }
    }

    svg {
        z-index: 1;
        transform: rotate(${props => props.isOpen ? '0deg' : '180deg'});
        transition: transform 0.3s linear;
    }

    &:hover::before {
        height: 20px;
        box-shadow: 0 0 20px 10px rgb(0, 255, 255, 0.7);
    }

    &::-webkit-details-marker {
        display: none;
    }
`;

const EducationsList = styled.ul`
    position: relative;
    transition: ${Theme.animations.transition};
    background-color: rgba(237, 242, 244, 0.7);
    padding: 10px 0 10px 10px;
    //backdrop-filter: blur(10px);
    box-shadow: 0 0 20px 10px rgba(237, 242, 244, 0.7);
    border-radius: 10px;
    border-bottom: 2px solid rgb(206, 206, 207);
`;

const ListItem = styled.li`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
    row-gap: 5px;
    margin-bottom: 44px;
    
    &:not(:last-child)::after {
        position: absolute;
        bottom: -22px;
        content: "";
        height: 2px;
        width: 100%;
        background-color: rgb(235, 234, 237);
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const UniversityTitle = styled.h3`
    color: rgb(102, 102, 102);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
`;

const StdDescWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

const Specialization = styled.p`
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 1 / 3;
    grid-row: 2 / 3;
`;

const StudyPeriod = styled.div`
    padding: 0 5px;
    border-radius: 20px;
    background-color: rgb(215, 255, 224);
    color: rgb(1, 140, 15);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 3 / 4;
    grid-row: 2 / 3;
`;

export const S = {
    StyledEducation,
    EducationTitle,
    EducationsList,
    ListItem,
    UniversityTitle,
    StdDescWrapper,
    Specialization,
    StudyPeriod
}