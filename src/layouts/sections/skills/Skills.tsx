import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Skill} from "./skill/Skill";
import {skillsArray} from "../../../components/data"
import {v4 as uuid} from 'uuid';
import {Container} from "../../../components/Container";
import { AttentionSeeker } from "react-awesome-reveal";
import {S} from "./Skills_Styles"

export const Skills = () => {
    return (
        <S.SectionSkills id={"techstack"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>
                    Technologies I’ve been working with recently
                </SectionDescription>
                <S.SkillsWrapper>
                    <AttentionSeeker
                        effect={'tada'}
                        cascade
                        damping={0.1}
                        triggerOnce
                    >
                    {skillsArray.map((item, index) => {
                        return <Skill key={uuid()}
                                      iconId={item.icon}
                                      title={item.title}
                                      text={item.text}
                                />
                    })}
                    </AttentionSeeker>
                </S.SkillsWrapper>
            </Container>
        </S.SectionSkills>
    );
};

