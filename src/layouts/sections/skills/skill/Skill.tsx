import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconId: string
    title: string
    text?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <Icon iconId={props.iconId} width={'100%'} height={'120px'} />
            <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SkillText>{props.text}</S.SkillText>
        </S.StyledSkill>
    );
};

