import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Skill} from "./skill/Skill";
import {skillsArray} from "../../../components/data"
import {v4 as uuid} from 'uuid';
import {Container} from "../../../components/Container";
import { AttentionSeeker } from "react-awesome-reveal";

export const Skills = () => {
    return (
        <SectionSkills id={"techstack"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>
                    Technologies I’ve been working with recently
                </SectionDescription>
                <SkillsWrapper>
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
                </SkillsWrapper>
            </Container>
        </SectionSkills>
    );
};

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