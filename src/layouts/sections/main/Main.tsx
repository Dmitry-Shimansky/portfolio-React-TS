import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/myphoto.png';

export const Main = () => {
    return (
        <StyledMain>
            <TitleContainer>
                <span>Hi ,</span>
                <h2>
                    My name is
                    Dmitry Shimansky
                </h2>
                <h1>I am a Web Developer</h1>
            </TitleContainer>
            <Photo src={photo} alt="photo"/>
        </StyledMain>
    );
};

const StyledMain = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: lightblue;
`;

const TitleContainer = styled.div`

`;

const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
`;