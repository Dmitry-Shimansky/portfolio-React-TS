import styled from "styled-components";
import {Theme} from "../../styles/Theme";

const StyledFooter = styled.footer`
    margin-bottom: 60px;
`;

const FooterTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding-bottom: 35px;
    border-bottom: 2px solid rgba(102, 102, 102, 0.3);
`;

const ContactsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    
    @media ${Theme.media.tablet860} {
        gap: 20px
    }
`;

const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
`;

const Phone = styled.a`
    color: ${Theme.colors.font};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
`;

const Email = styled.a`
    color: ${Theme.colors.font};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
    
    @media ${Theme.media.mobile} {
        font-size: 16px;
    }
`;

const FooterBottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 45px;
    
    @media ${Theme.media.tablet} {
        flex-direction: column;
        text-align: center;
    }
`;

const SocialIconsList = styled.ul`
    display: flex;
    gap: 22px;
    list-style: none;
`;

const SocialIconItem = styled.li`

`;

const SocialIconLink = styled.a`
    
`;

const Copyright = styled.small`
    
`;

const MadeBy = styled.small`
    
`;

export const S = {
    StyledFooter,
    FooterTopWrapper,
    ContactsWrapper,
    EmailWrapper,
    Phone,
    Email,
    FooterBottomWrapper,
    SocialIconsList,
    SocialIconItem,
    SocialIconLink,
    Copyright,
    MadeBy
}