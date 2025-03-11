import React from 'react';
import photo from '../../../assets/images/myphoto.png';
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {S} from "./Main_Styles"
import styled from "styled-components";
import {MainTitle} from "../../../components/MainTitle";
import { WorkExperience } from './workexperience/WorkExperince';

export const Main = () => {
    return (
        <S.StyledMain id={"home"}>
            <Container>
                <S.MainWrapper>
                    <S.TitleContainer>
                        <S.Greeting>Hi 👋,</S.Greeting>
                        <S.Name>
                            My name is <br/> <span>Dmitry Shimansky</span>
                        </S.Name>
                        <S.JobTitle>
                            <p>I am a Web Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['I am a Web Developer', 'No no no', 'A Front-End Developer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 5,
                                }}
                            />
                        </S.JobTitle>
                    </S.TitleContainer>
                    <Tilt
                        glareEnable={true}
                        glareMaxOpacity={0.8}
                        glareColor="#ffffff"
                        glarePosition="bottom"
                        glareBorderRadius="20px"
                    >
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="photo"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </S.MainWrapper>
                <MainTitle>About Me</MainTitle>
                <AboutMeText>
                    The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                </AboutMeText>
                <WorkExperience />
                <MainTitle>Education</MainTitle>
            </Container>
        </S.StyledMain>
    );
};

const AboutMeText = styled.p`
    color: rgb(102, 102, 102);
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;
    text-align: left;
    max-width: 60%;
    margin-bottom: 38px;

    position: relative;
`;