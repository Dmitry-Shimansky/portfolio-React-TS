import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from "styled-components";
import megan from "../../assets/images/Megan.png"
import {Icon} from "../icon/Icon";
import "../../styles/slider.css"

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
        <SlideWrapper>
            <Image src={megan} alt={"Megan.png"}/>
            <Text>{props.text}</Text>
            <Name>{props.userName}</Name>
            <JobTitle>{props.jobTitle}</JobTitle>
        </SlideWrapper>
    )
};

const items = [
    <Slide text={dataObject.text} userName={'Peter'} jobTitle={dataObject.jobTitle} />,
    <Slide text={dataObject.text} userName={'Nadia'} jobTitle={dataObject.jobTitle} />,
    <Slide text={dataObject.text} userName={'Marina'} jobTitle={dataObject.jobTitle} />,
];

export const Slider = () => {
    return (
        <StyledSlider>
            <IconWrapper>
                <Icon iconId={'left-quotes'} width={'40px'} height={'31px'}/>
            </IconWrapper>

            <AliceCarousel
                mouseTracking
                items={items}
                disableDotsControls
                // renderPrevButton={() => {
                //     return (
                //         <Icon iconId={'arrow-icon-left'} width={'42px'} height={'14px'} viewBox={'0 0 44 16'}/>
                //     )
                // }}
                renderNextButton={() => {
                    return (
                        <Icon iconId={'arrow-icon-right'} width={'42px'} height={'14px'} viewBox={'0 0 44 16'}/>
                    )
                }}
            />

            <IconWrapper>
                <Icon iconId={'right-quotes'} width={'40px'} height={'31px'}/>
            </IconWrapper>
        </StyledSlider>
    );
};



// import React from 'react';
// import styled from "styled-components";
// import megan from "../../assets/images/Megan.png"
// import {Icon} from "../icon/Icon";
//
// export const Slider = () => {
//     return (
//         <StyledSlider>
//             <IconWrapper>
//                 <Icon iconId={'left-quotes'} width={'40px'} height={'31px'} />
//             </IconWrapper>
//
//                 <SlideWrapper>
//                     <Image src={megan} alt={""}/>
//                     <Text>
//                         is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
//                     </Text>
//                     <Name>Megan</Name>
//                     <JobTitle>founder and ceo of warner brothers</JobTitle>
//                 </SlideWrapper>
//
//             <IconWrapper>
//                 <Icon iconId={'right-quotes'} width={'40px'} height={'31px'} />
//             </IconWrapper>
//         </StyledSlider>
//     );
// };

const IconWrapper = styled.div`
    width: 130px;
    height: 100%;
    padding: 17px 0;
    display: flex;
    justify-content: center;
`;

const StyledSlider = styled.div`
    display: flex;
    max-width: 770px;
    width: 100%;
    padding-bottom: 8px;
    border-radius: 19px;
    box-shadow: 0 4px 19px 0 rgba(19, 23, 61, 0.1);
    background-color: rgb(255, 255, 255);
    min-height: 209px;
    height: 100%;

    ${IconWrapper}:last-of-type {
        align-items: flex-end;
    };
`;

const SlideWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    max-width: 508px;
    width: 100%;
    //padding-top: 65px;

    //position: relative;
`;

const Image = styled.img`
    width: 97px;
    height: 97px;
    object-fit: cover;
    margin-bottom: 65px;

    //position: absolute;
    //top: -50px;
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