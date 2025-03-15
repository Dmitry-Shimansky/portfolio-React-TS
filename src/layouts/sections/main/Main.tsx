import React from 'react';
import photo from '../../../assets/images/myphoto.png';
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {S} from "./Main_Styles"
import {MainTitle} from "../../../components/MainTitle";
import { WorkExperience } from './workexperience/WorkExperince';
import { Education } from './education/Education';
import { Courses } from './courses/Courses';

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
                <S.AboutMeText>
                    The Generator App is an online tool that helps you to export ready-made templates ready to work as your future website. It helps you to combine slides, panels and other components and export it as a set of static files: HTML/CSS/JS.
                </S.AboutMeText>
                <WorkExperience />
                <Education />
                <Courses />
            </Container>
        </S.StyledMain>
    );
};

