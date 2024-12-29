import styled from "styled-components";
import {StyledButton} from "../../../components/Button";
import {Theme} from "../../../styles/Theme";

//Works

const StyledWorks = styled.section`
    position: relative;
`;

const WorksWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 62px;
`;

//WorksCard

const StyledWorkCard = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
`;

const WorkCardWrapper = styled.div`
    max-width: 375px;
    width: 100%;
    border-radius: 20px;
    box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
`;

const ImageWrapper = styled.div`
    position: relative;

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -30%);
        text-transform: uppercase;
        transition: ${Theme.animations.transition};
    }

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
        backdrop-filter: blur(2px);
        opacity: 0;
        
        transition: ${Theme.animations.transition};
    }
    
    &:hover {
        
        &::before {
            opacity: 1;
        }
        
        ${StyledButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }
    
    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }
`;

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
    overflow: hidden;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
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
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
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
        height: 0;
        
        transition: ${Theme.animations.transition};
    }
`;

export const S = {
    StyledWorks,
    WorksWrapper,
    StyledWorkCard,
    WorkCardWrapper,
    ImageWrapper,
    Image,
    ContentWrapper,
    Title,
    Description,
    TechStackDescription,
    LinksContainer,
    LinkWrapper,
    Link
}