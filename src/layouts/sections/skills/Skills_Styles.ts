import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

//Skills

const SectionSkills = styled.section`
    position: relative;
`;

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 81px;
    column-gap: 80px;
`;

//Skill

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

export const S = {
    SectionSkills,
    SkillsWrapper,
    StyledSkill,
    IconWrapper,
    SkillTitle,
    SkillText
}