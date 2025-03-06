import React, {useState} from 'react';
import styled, {css} from "styled-components";
// import {v4 as uuid} from 'uuid';
// import {headerMenuItems} from "../../../../components/data"
import {Theme} from "../../../../styles/Theme";
import { MainTitle } from '../../../../components/MainTitle';

export const WorkExperience = () => {

    // const [menuIsOpen, setMenuIsOpen] = useState(true)
    // const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <StyledWorkExperience>
            <MainTitle>Work Experience</MainTitle>
            <WorkExperiences >
                <List>
                    <ListItem>
                        <JobTitle>Junior Web Developer</JobTitle>
                        <JobWrapper>
                            <Company>Accenture</Company>
                            <Country>Lithuania</Country>
                            <WorkingPeriod>Sep 2025 - Dec 2021</WorkingPeriod>
                        </JobWrapper>
                    </ListItem>
                    {/* {headerMenuItems.map((item) => {
                        return (
                            <ListItem key={uuid()}>
                                
                            </ListItem>
                        )
                    })} */}
                </List>
            </WorkExperiences>
        </StyledWorkExperience>
    );
};

const StyledWorkExperience = styled.div`
    display: block;
    max-width: 60%;
    margin-bottom: 38px;
`;

const WorkExperiences = styled.div`
    position: relative;
    outline: 1px solid red;
    
`;

const List = styled.ul`
    display: block;
`;

const ListItem = styled.li`
    position: relative;
`;

const JobTitle = styled.h3`
    color: rgb(102, 102, 102);
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 10px;
`;

const JobWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Company = styled.h4`
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
`;

const Country = styled.div`
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
`;

const WorkingPeriod = styled.div`
    padding: 5px 22px;
    border-radius: 50%;
    background-color: rgb(215, 255, 224);
    color: rgb(167, 167, 167);
    font-size: 14px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: left;
`;