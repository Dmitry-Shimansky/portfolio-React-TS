import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";

type SkillPropsType = {
    iconId: string
    title: string
    text?: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId} width={'100%'} height={'120px'} />
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${Theme.media.tablet} {
        width: 110px;
    }

    @media ${Theme.media.mobile} {
        width: 100px;
    }
`;

const IconWrapper = styled.div`
    position: relative;
    
    &::before {
        content: '';
        display: inline-block;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: inherit;
        transform: rotate(45deg) translate(-50%, -50%);
        
        position: absolute;
        left: 50%;
        top: 50%;
        transform-origin: top left;
    }
`;

const SkillTitle = styled.h3`
    text-transform: uppercase;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: center;
    margin-top: 5px;
    
    @media ${Theme.media.mobile} {
        font-size: 16px;
    }
`;

const SkillText = styled.p`
    text-align: center;
`;