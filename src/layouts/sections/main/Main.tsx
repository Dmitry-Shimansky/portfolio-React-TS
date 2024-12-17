import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myphoto.png';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainWrapper>
                    <TitleContainer>
                        <Greeting>Hi 👋,</Greeting>
                        <Name>
                            My name is <br/> <span>Dmitry Shimansky</span>
                        </Name>
                        <JobTitle>I am a Web Developer</JobTitle>
                    </TitleContainer>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo"/>
                    </PhotoWrapper>
                </MainWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    display: flex;
    min-height: 600px;
`;

const MainWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const TitleContainer = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 80px;
    letter-spacing: -1px;
`;

const Greeting = styled.span`

`;

const Name = styled.h2`
    
    span {
        position: relative;
        z-index: 0;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: rgb(251, 168, 32);
            
            position: absolute;
            bottom: 15px;
            z-index: -1
        }
    }
`;

const JobTitle = styled.h3`

`;

const PhotoWrapper = styled.div`
    position: relative;
    
    &::before {
        content: "";
        width: 349px;
        height: 349px;
        border: 9px solid linear-gradient(to top, rgb(231, 15, 70), rgb(0, 192, 253));
        
        position: absolute;
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`;