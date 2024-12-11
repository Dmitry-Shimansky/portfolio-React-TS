import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {Slider} from "../../../components/slider/Slider";
import {Icon} from "../../../components/icon/Icon";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <SectionTitle>Testimony Portfolio 19</SectionTitle>
            <SectionDescription>What People Says</SectionDescription>
            <Slider />
            <Icon iconId={'yellow-square'} width={'170px'} height={'155px'} />
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100px;
    background-color: lightseagreen;
`;