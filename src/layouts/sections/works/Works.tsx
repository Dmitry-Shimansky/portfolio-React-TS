import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {WorkCard} from "./work/WorkCard";
import {v4 as uuid} from 'uuid';
import image1 from "../../../assets/images/image-1.png";
import {worksItems} from "../../../components/data"
import {Container} from "../../../components/Container";

export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionDescription>Things I’ve built so far</SectionDescription>
                <WorksWrapper>
                    {worksItems.map(item => {
                        return <WorkCard
                            key={uuid()}
                            title={item.title}
                            src={image1}
                            techstack={item.techstack}
                            description={item.description}
                        />
                    })}
                </WorksWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    
`;

const WorksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    row-gap: 62px;
`;