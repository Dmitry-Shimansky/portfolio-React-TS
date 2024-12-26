import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {WorkCard} from "./work/WorkCard";
import {v4 as uuid} from 'uuid';
import image1 from "../../../assets/images/image-1.png";
import image2 from "../../../assets/images/image-2.png";
import image3 from "../../../assets/images/image-3.png";
import image4 from "../../../assets/images/image-4.png";
import image5 from "../../../assets/images/image-1.png";
import image6 from "../../../assets/images/image-6.png";
import {worksItems} from "../../../components/data"
import {Container} from "../../../components/Container";

const imagesArray: any[] = [image1, image2, image3, image4, image5, image6];

export const Works = () => {
    return (
        <StyledWorks id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionDescription>Things I’ve built so far</SectionDescription>
                <WorksWrapper>
                    {worksItems.map((item, index) => {
                        return <WorkCard
                            key={uuid()}
                            title={item.title}
                            src={imagesArray[index]}
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
    position: relative;
`;

const WorksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 62px;
`;