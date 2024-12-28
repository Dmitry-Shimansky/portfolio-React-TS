import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import megan from "../../assets/images/Megan.png"
import {Icon} from "../icon/Icon";
import "../../styles/slider.css"
import {S} from "./Slider_Styles"

type SlidePropsType = {
    text: string,
    userName: string,
    jobTitle: string
};

const dataObject: SlidePropsType = {
    text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    userName: "Megan",
    jobTitle: "founder and ceo of warner brothers",
};

const Slide = (props: SlidePropsType) => {
    return (
        <S.SlideWrapper>
            <S.Image src={megan} alt={"Megan.png"}/>
            <S.Text>{props.text}</S.Text>
            <S.Name>{props.userName}</S.Name>
            <S.JobTitle>{props.jobTitle}</S.JobTitle>
        </S.SlideWrapper>
    )
};

const items = [
    <Slide text={dataObject.text} userName={'Peter'} jobTitle={dataObject.jobTitle} />,
    <Slide text={dataObject.text} userName={'Nadia'} jobTitle={dataObject.jobTitle} />,
    <Slide text={dataObject.text} userName={'Marina'} jobTitle={dataObject.jobTitle} />,
];

export const Slider = () => {
    return (
        <S.StyledSlider className={'slider'}>
            <S.IconWrapper>
                <Icon iconId={'left-quotes'} width={'40px'} height={'31px'}/>
            </S.IconWrapper>

            <AliceCarousel
                mouseTracking
                items={items}
                disableDotsControls
                renderPrevButton={() => {
                    return (
                        <Icon iconId={'arrow-icon-left'} width={'42px'} height={'14px'} viewBox={'0 0 44 16'}/>
                    )
                }}
                renderNextButton={() => {
                    return (
                        <Icon iconId={'arrow-icon-right'} width={'42px'} height={'14px'} viewBox={'0 0 44 16'}/>
                    )
                }}
            />

            <S.IconWrapper>
                <Icon iconId={'right-quotes'} width={'40px'} height={'31px'}/>
            </S.IconWrapper>
        </S.StyledSlider>
    );
};

