import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type WorkCardPropsType = {
    title: string
    description: string
    techstack: string
    src: string
}

export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <StyledWorkCard>
            <Image src={props.src} alt="" />
            <Title>{props.title}</Title>
            <Description>{props.description}</Description>
            <TechStackDescription>
                <strong>Tech stack</strong> : {props.techstack}
            </TechStackDescription>
            <LinkWrapper>
                <Link href={"#"}>
                    <Icon iconId={'link-icon'} width={'20px'} height={'20px'}/>
                    Live Preview
                </Link>
                <Link href={"#"}>
                    <Icon iconId={'github-skill'} width={'20px'} height={'20px'}/>
                    View Code
                </Link>
            </LinkWrapper>
        </StyledWorkCard>
    );
};

const StyledWorkCard = styled.div`
    max-width: 375px;
    width: 100%;
    background-color: #5364ba;
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`;

const Title = styled.h3`

`;

const Description = styled.p`

`;

const TechStackDescription = styled.p`

`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Link = styled.a`

`;