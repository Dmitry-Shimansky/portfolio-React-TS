import React from 'react';
import styled from "styled-components";
import megan from "../../assets/images/Megan.png"
import {Icon} from "../icon/Icon";

export const Slider = () => {
    return (
        <StyledSlider>
            <IconWrapper>
                <Icon iconId={'left-quotes'} width={'40px'} height={'31px'} />
            </IconWrapper>
            <Slide>
                <SlideWrapper>
                    <Image src={megan} alt={""}/>
                    <Text>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                    <Name>Megan</Name>
                    <JobTitle>founder and ceo of warner brothers</JobTitle>
                </SlideWrapper>
            </Slide>
            <IconWrapper>
                <Icon iconId={'right-quotes'} width={'40px'} height={'31px'} />
            </IconWrapper>
        </StyledSlider>
    );
};

const IconWrapper = styled.div`
    width: 130px;
    height: 100%;
    padding: 17px 0;
    display: flex;
    justify-content: center;
`;

const StyledSlider = styled.div`
    display: flex;
    max-width: 769px;
    width: 100%;
    padding-bottom: 8px;
    border-radius: 19px;
    box-shadow: 0 4px 19px 0 rgba(19, 23, 61, 0.1);
    background-color: rgb(255, 255, 255);
    height: 209px;
    
    ${IconWrapper}:last-of-type {
        align-items: flex-end;
    };
`;

const Slide = styled.div`
    max-width: 508px;
    width: 100%;
    height: 100%;
`;

const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;
    
    position: relative;
`;

const Image = styled.img`
    width: 97px;
    height: 97px;
    object-fit: cover;
    
    position: absolute;
    top: -50px;
`;

const Text = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 32px;
`;

const Name = styled.span`
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 500;
    line-height: 23px;
    letter-spacing: 0;
    text-align: left;
`;

const JobTitle = styled.p`
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
`;