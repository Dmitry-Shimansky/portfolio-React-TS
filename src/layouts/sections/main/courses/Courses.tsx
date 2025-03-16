import React, {useState} from 'react';
import {v4 as uuid} from 'uuid';
import {educationItems } from "../../../../components/data"
import { MainTitle } from '../../../../components/MainTitle';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "./Courses_Styles"

export const Courses = () => {

    const [detailsIsOpen, setDetailsIsOpen] = useState(true)
    const onDetailsBtnClick = () => {setDetailsIsOpen(!detailsIsOpen)};

    return (
        <S.StyledCourses >
            <S.CoursesTitle onClick={onDetailsBtnClick} isOpen={detailsIsOpen}>
                <MainTitle>Courses</MainTitle>
                <Icon iconId={'arrow_down'} height={'20px'} width={'20px'} viewBox={'0 0 330 330'} fill={'#000'} />
            </S.CoursesTitle>
            <S.CoursesList>
                {educationItems.map((eduItem) => {
                    return (
                        <S.ListItem key={uuid()}>
                            <S.CourseTitle>{eduItem.universityTitle}</S.CourseTitle>
                            <S.Specialization><span>Specialization:</span> {eduItem.specialization}</S.Specialization>
                            <S.CourseDescWrapper>
                                <Icon iconId={'calendar'} width={'12px'} height={'12px'} viewBox={'0 0 16 12'} stroke={'none'}/>
                                <S.StudyPeriod>{eduItem.period}</S.StudyPeriod>
                            </S.CourseDescWrapper>
                        </S.ListItem>
                    )
                })}
            </S.CoursesList>
        </S.StyledCourses>
    );
};
