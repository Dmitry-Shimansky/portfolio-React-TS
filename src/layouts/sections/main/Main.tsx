import React from 'react';
import photo from '../../../assets/images/myphoto.png';
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import {S} from "./Main_Styles"

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
            </Container>
        </S.StyledMain>
    );
};

