import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {educationItems } from "../../../../components/data"
import { MainTitle } from '../../../../components/MainTitle';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Education_Styles"

export const Education = () => {

    const [detailsIsOpen, setDetailsIsOpen] = useState('arrow_down')
    const onDetailsBtnClick = () => {setDetailsIsOpen(
        detailsIsOpen === 'arrow_down' ? 'arrow_up' : 'arrow_down'
    )};

    return (
        <S.StyledEducation>
            <S.EducationTitle onClick={onDetailsBtnClick}>
                <MainTitle>Education</MainTitle>
                <Icon iconId={`${detailsIsOpen}`} height={'20px'} width={'20px'} viewBox={'0 0 330 330'} fill={'#000'} />
            </S.EducationTitle>
                <S.EducationsList>
                    {educationItems.map((eduItem) => {
                        return (
                            <S.ListItem key={uuid()}>
                                <S.UniversityTitle>{eduItem.universityTitle}</S.UniversityTitle>
                                <S.Specialization><span>Specialization:</span> {eduItem.specialization}</S.Specialization>
                                <S.StdDescWrapper>
                                    <Icon iconId={'calendar'} width={'12px'} height={'12px'} viewBox={'0 0 16 12'} stroke={'none'}/>
                                    <S.StudyPeriod>{eduItem.period}</S.StudyPeriod>
                                </S.StdDescWrapper>
                            </S.ListItem>
                        )
                    })}
                </S.EducationsList>
        </S.StyledEducation>
    );
};
