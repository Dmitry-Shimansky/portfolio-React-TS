import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {Theme} from "../../../../styles/Theme";
import {StyledButton} from "../../../../components/Button";

type WorkCardPropsType = {
    title: string
    description: string
    techstack: string
    src: string
}

export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <StyledWorkCard>
            <ImageWrapper>
                <Image src={props.src} alt="" />
                <StyledButton>view project</StyledButton>
            </ImageWrapper>
            <ContentWrapper>
                <Title>{props.title}</Title>
                <Description>{props.description}</Description>
                <TechStackDescription>
                    <strong>Tech stack</strong> : {props.techstack}
                </TechStackDescription>
                <LinksContainer>
                    <LinkWrapper>
                        <Icon iconId={'link-icon'} width={'20px'} height={'20px'}/>
                        <Link href={"#"}>Live Preview</Link>
                    </LinkWrapper>
                    <LinkWrapper>
                        <Icon iconId={'github-skill'} width={'20px'} height={'20px'}/>
                        <Link href={"#"}>View Code</Link>
                    </LinkWrapper>
                </LinksContainer>
            </ContentWrapper>
        </StyledWorkCard>
    );
};

const StyledWorkCard = styled.div`
    max-width: 375px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
    position: relative;
    
    &:hover {
        
        &::before {
            content: '';

            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            top: 0;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            background-color: rgb(0, 0, 0, 0.3);
            backdrop-filter: blur(4px);
        }
        
        ${StyledButton} {
            opacity: 1;
        }
    }
    
    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-transform: uppercase;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    overflow: hidden;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 25px 29px;
`;

const Title = styled.h4`
    color: ${Theme.colors.projectCardTitle};
    font-size: 28px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0;
    text-align: center;
    margin-bottom: 17px;
`;

const Description = styled.p`
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0;
    margin-bottom: 12px;
`;

const TechStackDescription = styled.p`
    font-size: 14px;
    font-weight: 300;
    line-height: 26px;
    letter-spacing: 0;
    margin-bottom: 21px;
    
    strong {
        font-size: 16px;
        font-weight: 400;
    }
`;

const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const Link = styled.a`
    color: ${Theme.colors.projectCardTitle};
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0;
    
    position: relative;
    z-index: 0;
    
    &:hover {
        &::before {
            height: 10px;
        }
    }
    
    &::before {
        content: '';
        display: inline-block;
        background-color: ${Theme.colors.accent};
        
        position: absolute;
        bottom: 2px;
        left: 0;
        right: 0;
        z-index: -1;
    }
`;