import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

const StyledWorkExperience = styled.details`
    position: relative;
    max-width: 60%;
    margin-bottom: 38px;

    @media ${Theme.media.tablet860} {
        max-width: 100%;
    }
`;

const WorkExperienceTitle = styled.summary`
    display: flex;
    align-items: center;
    gap: 10px;
    list-style: none;
    cursor: pointer;
    margin-bottom: 10px;
    
    h2 {
        margin-bottom: 0;
    }

    transition: opacity 1s ease;

    &::before {
        position: absolute;
        left: 0;
        content: "";
        width: 400px;
        height: 50px;
        background-color: aqua;
    }

    &:hover {

    }
`;

const WorkExperiencesList = styled.ul`
    position: relative;
    transition: ${Theme.animations.transition};
    background-color: rgba(237, 242, 244, 0.7);
    padding: 10px 0 10px 10px;
    //backdrop-filter: blur(10px);
    box-shadow: 0 0 20px 10px rgba(237, 242, 244, 0.7);
    border-radius: 10px;
`;

const ListItem = styled.li`
    display: grid;
    position: relative;
    grid-template-columns: repeat(2, 1fr) minmax(186px, 1fr);
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    row-gap: 5px;
    margin-bottom: 44px;
    
    &:not(:last-child)::after {
        position: relative;
        top: 22px;
        content: "";
        height: 2px;
        width: 100%;
        background-color: rgb(235, 234, 237);
    }
    
    &:last-child {
        margin-bottom: 0;
    }
`;

const JobTitle = styled.h3`
    color: rgb(102, 102, 102);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 1 / -1;
    grid-row: 1 / 2;
`;

const JobDescWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
`;

const Company = styled.p`
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 1 / 2;
    grid-row: 2 / 3;
`;

const Country = styled.div`
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
`;

const WorkingPeriod = styled.div`
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

const Stack = styled.p`
    color: #023047;
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    grid-column: 1 / -1;
    grid-row: 3 / 4;
    
    & span {
        background-color: #8ecae6;
        padding: 0 4px;
        border-radius: 3px;
        margin-left: 5px;
    }
`;

const StackTitle = styled.div`
    display: inline-block;
    font-weight: 700;
    color: rgb(102, 102, 102);
`;

export const S = {
    StyledWorkExperience,
    WorkExperienceTitle,
    WorkExperiencesList,
    ListItem,
    JobTitle,
    JobDescWrapper,
    Company,
    Country,
    WorkingPeriod,
    Stack,
    StackTitle
}