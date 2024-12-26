import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <SectionDescription>What People Says</SectionDescription>
                <ContentWrapper>
                    <FlexWrapper align={'flex-start'} justify={'space-between'}>
                        <PurpleBlock />
                        <IconWrapper>
                            <Icon iconId={'yellow-square'} width={'170px'} height={'155px'} viewBox={'0 0 40 32'}/>
                        </IconWrapper>
                    </FlexWrapper>
                    <SliderWrapper>
                        <Slider />
                    </SliderWrapper>
                </ContentWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`;

const SliderWrapper = styled.div`
    max-width: 770px;
    width: 100%;
`;

const ContentWrapper = styled.div`
    position: relative;
    padding-bottom: 70px;
    
    & ${SliderWrapper} {
        position: absolute;
        top: 55px;
        right: 167px;
    }
    
    @media ${Theme.media.desktop1100} {
        ${SliderWrapper} {
            position: absolute;
            right: 50%;
            transform: translateX(50%);
            width: 80%;
        }
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

    @media ${Theme.media.desktop1100} {
        margin-right: 0;
    }
`;