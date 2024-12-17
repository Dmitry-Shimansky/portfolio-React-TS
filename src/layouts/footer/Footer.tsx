import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {NameLogo} from "../../components/logo/NameLogo";
import {footerSocialIcons} from "../../components/data";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FooterTopWrapper>
                    <NameLogo fontSize={'15px'}/>
                    <FlexWrapper gap={'40px'}>
                        <EmailWrapper>
                            <Icon iconId={'phone'} width={'29px'} height={'26px'}/>
                            <Email href={'tel:+37063033732'}>+370-630-33732</Email>
                        </EmailWrapper>
                        <EmailWrapper>
                            <Icon iconId={'email'} width={'29px'} height={'26px'}/>
                            <Email href={'mailto:shimansky.dmitry@gmail.com'}>shimansky.dmitry@gmail.com</Email>
                        </EmailWrapper>
                    </FlexWrapper>
                    <SocialIconsList>
                        {footerSocialIcons.map(item => {
                            return <SocialIconItem>
                                <SocialIconLink>
                                    <Icon iconId={item} width={'30px'} height={'30px'}/>
                                </SocialIconLink>
                            </SocialIconItem>
                        })}
                    </SocialIconsList>
                </FooterTopWrapper>
                <FooterBottomWrapper>
                    <Copyright>
                        © 2024 All rights reserved.
                    </Copyright>
                    <MadeBy>
                        Designed and made by Dmitry Shimansky with Love & Coffee
                    </MadeBy>
                </FooterBottomWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    margin-bottom: 60px;
`;

const FooterTopWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 45px;
    border-bottom: 2px solid rgba(102, 102, 102, 0.3);
`;

const EmailWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
`;

const Email = styled.a`
    color: ${Theme.colors.font};
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0;
`;

const FooterBottomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 45px;
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