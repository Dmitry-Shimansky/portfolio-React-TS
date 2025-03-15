import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {workExperienceItems} from "../../../../components/data"
import { MainTitle } from '../../../../components/MainTitle';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./WorkExperience_Styles"

export const WorkExperience = () => {

    const [detailsIsOpen, setDetailsIsOpen] = useState(true)
    const onDetailsBtnClick = () => {setDetailsIsOpen(!detailsIsOpen)};

    return (
        <S.StyledWorkExperience>
            <S.WorkExperienceTitle onClick={onDetailsBtnClick} isOpen={detailsIsOpen}>
                <MainTitle>Work Experience</MainTitle>
                <Icon iconId={'arrow_down'} height={'20px'} width={'20px'} viewBox={'0 0 330 330'} fill={'#000'} />
            </S.WorkExperienceTitle>
                <S.WorkExperiencesList>
                   {workExperienceItems.map((workItem) => {
                        return (
                            <S.ListItem key={uuid()}>
                                <S.JobTitle>{workItem.jobTitle}</S.JobTitle>
                                <S.JobDescWrapper>
                                    <Icon iconId={'building'} width={'12px'} height={'12px'} viewBox={'0 1 8 11'} stroke={'none'}/>
                                    <S.Company>{workItem.company}</S.Company>
                                </S.JobDescWrapper>
                                <S.JobDescWrapper>
                                    <Icon iconId={'location'} width={'12px'} height={'12px'} viewBox={'0 1 12 12'} stroke={'none'}/>
                                    <S.Country>{workItem.location}</S.Country>
                                </S.JobDescWrapper>
                                <S.JobDescWrapper>
                                    <Icon iconId={'calendar'} width={'12px'} height={'12px'} viewBox={'0 0 16 12'} stroke={'none'}/>
                                    <S.WorkingPeriod>{workItem.duration}</S.WorkingPeriod>
                                </S.JobDescWrapper>
                                <S.Stack>
                                    <S.StackTitle>Stack:</S.StackTitle>
                                    {workItem.stack.map((stackItem) => {
                                        return (
                                            <span>{stackItem}</span>
                                        )
                                    })}
                                </S.Stack>
                            </S.ListItem>
                        )
                    })}
                </S.WorkExperiencesList>
        </S.StyledWorkExperience>
    );
};