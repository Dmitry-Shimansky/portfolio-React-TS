import React, {useState} from 'react';
import styled, {css} from "styled-components";
import {v4 as uuid} from 'uuid';
import {workExperienceItems} from "../../../../components/data"
// import {Theme} from "../../../../styles/Theme";
import { MainTitle } from '../../../../components/MainTitle';
import {Icon} from "../../../../components/icon/Icon";

export const WorkExperience = () => {

    // const [menuIsOpen, setMenuIsOpen] = useState(true)
    // const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <StyledWorkExperience>
            <MainTitle>Work Experience</MainTitle>
                <WorkExperiencesList>
                   {workExperienceItems.map((workItem) => {
                        return (
                            <ListItem key={uuid()}>
                                <JobTitle>{workItem.jobTitle}</JobTitle>
                                <JobDescWrapper>
                                    <Icon iconId={'building'} width={'12px'} height={'12px'} viewBox={'0 1 8 11'} stroke={'none'}/>
                                    <Company>{workItem.company}</Company>
                                </JobDescWrapper>
                                <JobDescWrapper>
                                    <Icon iconId={'location'} width={'12px'} height={'12px'} viewBox={'0 1 12 12'} stroke={'none'}/>
                                    <Country>{workItem.location}</Country>
                                </JobDescWrapper>
                                <JobDescWrapper>
                                    <Icon iconId={'calendar'} width={'12px'} height={'12px'} viewBox={'0 0 16 12'} stroke={'none'}/>
                                    <WorkingPeriod>{workItem.duration}</WorkingPeriod>
                                </JobDescWrapper>
                                <Stack>
                                    <StackTitle>Stack:</StackTitle>
                                    {workItem.stack.map((stackItem) => {
                                        return (
                                            <span>{stackItem}</span>
                                        )
                                    })}
                                </Stack>
                            </ListItem>
                        )
                    })}
                </WorkExperiencesList>
        </StyledWorkExperience>
    );
};

const StyledWorkExperience = styled.div`
    max-width: 60%;
    margin-bottom: 38px;
`;

const WorkExperiencesList = styled.ul`
    position: relative;
`;

const ListItem = styled.li`
    display: grid;
    position: relative;
    grid-template-columns: repeat(3, 1fr);
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