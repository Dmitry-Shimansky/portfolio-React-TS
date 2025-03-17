import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {footerSocialIcons} from "../../components/data";
import {S} from "./Footer_Styles";

export const Footer = () => {
    return (
        <S.StyledFooter>
            <Container>
                <S.FooterTopWrapper>
                    <S.ContactsWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'phone'} width={'29px'} height={'26px'} fill={'#000'}/>
                            <S.Phone href={'tel:+37063033732'}>+370-630-33732</S.Phone>
                        </S.EmailWrapper>
                        <S.EmailWrapper>
                            <Icon iconId={'email'} width={'29px'} height={'26px'} fill={'#000'}/>
                            <S.Email href={'mailto:shimansky.dmitry@gmail.com'}>shimansky.dmitry@gmail.com</S.Email>
                        </S.EmailWrapper>
                    </S.ContactsWrapper>
                    <S.SocialIconsList>
                        {footerSocialIcons.map(item => {
                            return (
                                <S.SocialIconItem>
                                    <S.SocialIconLink>
                                        <Icon iconId={item} width={'30px'} height={'30px'}/>
                                    </S.SocialIconLink>
                                </S.SocialIconItem>
                            )
                        })}
                    </S.SocialIconsList>
                </S.FooterTopWrapper>
                <S.FooterBottomWrapper>
                    <S.Copyright>
                        © 2025 All rights reserved.
                    </S.Copyright>
                    <S.MadeBy>
                        Designed and made by Dmitry Shimansky with Love & Coffee
                    </S.MadeBy>
                </S.FooterBottomWrapper>
            </Container>
        </S.StyledFooter>
    );
};

