import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Skill} from "./skill/Skill";
import {skillsArray} from "../../../components/data"
import {v4 as uuid} from 'uuid';
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <SectionSkills>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionDescription>
                    Technologies I’ve been working with recently
                </SectionDescription>
                <SkillsWrapper>
                    {skillsArray.map((item, index) => {
                        return <Skill key={uuid()}
                                      iconId={item.icon}
                                      title={item.title}
                                      text={item.text}
                                />
                    })}
                </SkillsWrapper>
            </Container>
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    
`;

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    row-gap: 81px;
    column-gap: 80px;
`;