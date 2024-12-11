import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {WorkCard} from "./work/WorkCard";
import {v4 as uuid} from 'uuid';
import image1 from "../../../assets/images/image-1.png";

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>Projects</SectionTitle>
            <SectionDescription>Things I’ve built so far</SectionDescription>
            <WorksWrapper>
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
                <WorkCard
                    key={uuid()}
                    title={"Project Tile goes here"}
                    src={image1}
                    techstack={"HTML , JavaScript, SASS, React"}
                    description={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}
                />
            </WorksWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100px;
    background-color: lightyellow;
`;

const WorksWrapper = styled.div`
        display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5px;
`;