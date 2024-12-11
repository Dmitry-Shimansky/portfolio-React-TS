import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Skill} from "./skill/Skill";
import {skillsArray} from "../../../components/data"
import {v4 as uuid} from 'uuid';

export const Skills = () => {
    return (
        <SectionSkills>
            <SectionTitle>
                My Tech Stack
            </SectionTitle>
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
        </SectionSkills>
    );
};

const SectionSkills = styled.section`
    background-color: lightcoral;
    min-height: 100px;
`;

const SkillsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
`;