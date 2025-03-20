import React from 'react';
import {animateScroll as scroll} from "react-scroll";
import {S} from "./NameLogo_Styles"
import {NameLogoType} from "../../modules/interfaces";

export const NameLogo = (props: NameLogoType) => {
    return (
        <S.LogoWrapper onClick={() =>{scroll.scrollToTop()}}>
            <S.FirstName fontSize={props.fontSize}>Dmitry</S.FirstName>
            <S.LastName fontSize={props.fontSize}>
                Shimansky
            </S.LastName>
        </S.LogoWrapper>
    );
};