import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles"
import {Theme} from "../../../styles/Theme";

export const Testimony = () => {
    return (
        <S.StyledTestimony>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <SectionDescription>What People Says</SectionDescription>
                <S.ContentWrapper>
                    <S.FigureWrapper>
                        <S.PurpleBlock />
                        <Icon iconId={'yellow-square'} width={'170px'} height={'155px'} viewBox={'0 0 40 32'} fill={`rgb(231, 15, 70)`}/>
                    </S.FigureWrapper>
                    <Slider />
                </S.ContentWrapper>
            </Container>
        </S.StyledTestimony>
    );
};

