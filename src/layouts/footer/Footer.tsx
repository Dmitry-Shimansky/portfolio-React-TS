import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

export const Footer = () => {
    return (
        <StyledFooter>
            <FooterWrapper>
                <Copyright>
                    © 2021 All rights reserved. Made by Dmitry Shimansky
                </Copyright>
                <SocialIconsList>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon iconId={'facebook-dark'} width={'24px'} height={'24px'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon iconId={'instagram-dark'} width={'24px'} height={'24px'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon iconId={'twitter-dark'} width={'24px'} height={'24px'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                    <SocialIconItem>
                        <SocialIconLink>
                            <Icon iconId={'linkedin-dark'} width={'24px'} height={'24px'}/>
                        </SocialIconLink>
                    </SocialIconItem>
                </SocialIconsList>
            </FooterWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: lightsalmon;
    min-height: 100px;
`;

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SocialIconsList = styled.ul`
    display: flex;
    list-style: none;
`;

const SocialIconItem = styled.li`

`;

const SocialIconLink = styled.a`

`;

const Copyright = styled.small`

`;