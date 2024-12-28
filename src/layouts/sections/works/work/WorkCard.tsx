import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {StyledButton} from "../../../../components/Button";
import {S} from "../Works_Styles"

type WorkCardPropsType = {
    title: string
    description: string
    techstack: string
    src: string
}

export const WorkCard = (props: WorkCardPropsType) => {
    return (
        <S.StyledWorkCard>
            <S.WorkCardWrapper>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <StyledButton>view project</StyledButton>
            </S.ImageWrapper>
            <S.ContentWrapper>
                <S.Title>{props.title}</S.Title>
                <S.Description>{props.description}</S.Description>
                <S.TechStackDescription>
                    <strong>Tech stack</strong> : {props.techstack}
                </S.TechStackDescription>
                <S.LinksContainer>
                    <S.LinkWrapper>
                        <Icon iconId={'link-icon'} width={'20px'} height={'20px'}/>
                        <S.Link href={"#"}>Live Preview</S.Link>
                    </S.LinkWrapper>
                    <S.LinkWrapper>
                        <Icon iconId={'github-skill'} width={'20px'} height={'20px'}/>
                        <S.Link href={"#"}>View Code</S.Link>
                    </S.LinkWrapper>
                </S.LinksContainer>
            </S.ContentWrapper>
            </S.WorkCardWrapper>
        </S.StyledWorkCard>
    );
};

