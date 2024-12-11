import React from 'react';
import styled from "styled-components";
import megan from "../../assets/images/Megan.png"
import {Icon} from "../icon/Icon";

export const Slider = () => {
    return (
        <StyledSlider>
            <Slide>
                <Icon iconId={'left-quotes'} width={'40px'} height={'41px'} />
                <SlideWrapper>
                    <Image src={megan} alt={""}/>
                    <Text>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </Text>
                    <Name>Megan</Name>
                    <JobTitle>founder and ceo of warner brothers</JobTitle>
                </SlideWrapper>
                <Icon iconId={'right-quotes'} width={'40px'} height={'41px'} />
            </Slide>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    max-width: 500px;
`;

const Slide = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 97px;
    height: 97px;
    object-fit: cover;
`;

const Text = styled.p`
    
`;

const Name = styled.span`

`;

const JobTitle = styled.p`

`;