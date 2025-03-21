import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

const StyledWorkExperience = styled.details`
    position: relative;
    max-width: 720px;
    margin-bottom: 38px;
    
    & summary::after {
        position: absolute;
        content: "";
        left: 0;
        top: 69px;
        height: 2px;
        width: 0;
        background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));

        transition: width 0.5s linear;
    }
    
    &[open] summary::after {
        width: 100%;
    }
`;

const WorkExperienceTitle = styled.summary<{isOpen: boolean}>`
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
        left: 5px;
        content: "";
        width: 350px;
        height: 0;
        background-color: rgb(0, 255, 255, 0.7);
        border-radius: 50%;
        box-shadow: 0 0 20px 10px rgb(0, 255, 255, 0);
        z-index: 0;
        
        transition-property: height, box-shadow;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
        
        @media ${Theme.media.desktop1100} {
            width: 325px;
        }
        @media ${Theme.media.tablet860} {
            width: 300px;
        }
        @media ${Theme.media.tablet} {
            width: 290px;
        }
        @media ${Theme.media.mobile} {
            width: 270px;
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

const WorkExperiencesList = styled.ul`
    position: relative;
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
    grid-template-columns: repeat(2, 1fr) minmax(186px, 1fr);
    grid-template-rows: repeat(3, 1fr);
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