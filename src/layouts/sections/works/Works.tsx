import React from 'react';
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
import {S} from "./Works_Styles"

const imagesArray: any[] = [image1, image2, image3, image4, image5, image6];

export const Works = () => {
    return (
        <S.StyledWorks id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionDescription>Things I’ve built so far</SectionDescription>
                <S.WorksWrapper>
                    {worksItems.map((item, index) => {
                        return <WorkCard
                            key={uuid()}
                            title={item.title}
                            src={imagesArray[index]}
                            techstack={item.techstack}
                            description={item.description}
                        />
                    })}
                </S.WorksWrapper>
            </Container>
        </S.StyledWorks>
    );
};
