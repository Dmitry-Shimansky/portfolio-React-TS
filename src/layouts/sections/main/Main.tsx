import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myphoto.png';
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

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
    flex-wrap: wrap;
    height: 100%;

    @media ${Theme.media.tablet} {
       flex-direction: column;
    }
`;

const TitleContainer = styled.div`
    font-size: 48px;
    font-weight: 700;
    line-height: 70px;
    letter-spacing: -1px;
`;

const Greeting = styled.span`
    ${font({family: "'Poppins', sans-serif", weight: 400, Fmax: 48, Fmin: 20})}
    
    color: ${Theme.colors.mainTitle};
`;

const Name = styled.h2`
    ${font({family: "'Poppins', sans-serif", weight: 700, Fmax: 58, Fmin: 36})}
    color: ${Theme.colors.mainTitle};
    margin-bottom: 15px;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;

        background-image: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
        color: transparent;
        -webkit-background-clip: text;
        
        &::before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${Theme.colors.accent};
            
            position: absolute;
            bottom: 10px;
            z-index: -1
        }
    }
    
    @media ${Theme.media.mobile} {
        margin: 10px 0;
    }
`;

const JobTitle = styled.h3`
    ${font({family: "'Poppins', sans-serif", weight: 400, Fmax: 27, Fmin: 20})}

    color: ${Theme.colors.mainTitle};

    @media ${Theme.media.tablet} {
    margin-bottom: 20px;
}
`;

const PhotoWrapper = styled.div`
    
    position: relative;
    
    &::before {
        content: "";
        width: 350px;
        height: 350px;
        border: 9px solid linear-gradient(to top, rgb(231, 15, 70), rgb(0, 192, 253));
        
        position: absolute;

        @media ${Theme.media.tablet860} {
            width: 300px;
            height: 300px;
        }
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;

    @media ${Theme.media.tablet860} {
        width: 300px;
        height: 300px;
    }
`;