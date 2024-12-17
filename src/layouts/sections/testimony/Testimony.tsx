import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony Portfolio 19</SectionTitle>
                <SectionDescription>What People Says</SectionDescription>
                <ContentWrapper>
                    <FlexWrapper align={'flex-start'} justify={'space-between'}>
                        <PurpleBlock />
                        <IconWrapper>
                            <Icon iconId={'yellow-square'} width={'170px'} height={'155px'} />
                        </IconWrapper>
                    </FlexWrapper>
                    <SliderWrapper>
                        <Slider />
                        <ButtonWrapper>
                            <ButtonLeft>
                                <Icon iconId={'arrow-icon-left'} width={'50px'} height={'32px'} />
                            </ButtonLeft>
                            <ButtonRight>
                                <Icon iconId={'arrow-icon-right'} width={'50px'} height={'32px'} />
                            </ButtonRight>
                        </ButtonWrapper>
                    </SliderWrapper>
                </ContentWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`;

const SliderWrapper = styled.div`

`;

const ButtonWrapper = styled.div`
    width: 206px;
    height: 87px;
    display: flex;
    border-radius: 10px;
    background-color: rgb(252, 192, 40);
`;

const ButtonLeft = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`;

const ButtonRight = styled.button`
    display: flex;
    width: 50%;
    justify-content: center;
    align-items: center;
`;

const ContentWrapper = styled.div`
    position: relative;
    padding-bottom: 70px;
    
    & ${SliderWrapper} {
        position: absolute;
        top: 55px;
        right: 167px;
    }
    
    & ${ButtonWrapper} {
        position: absolute;
        left: -120px;
        top: 100px
    }
`;

const PurpleBlock = styled.div`
    max-width: 436px;
    width: 100%;
    height: 198px;
    background-color: rgb(255, 241, 255);
`;

const IconWrapper = styled.div`
    margin-right: 97px;
`;