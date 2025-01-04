import React, {ElementRef, useRef} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {StyledButton} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {S} from "./Contacts_Styles";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

export const Contacts = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
            .sendForm('service_1n4hv6s', 'template_am47jhn', form.current, {
                publicKey: '-aWeFRbWUAhKJr4lq',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success(`Message was sent successfully !`);
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(`Message was NOT sent. Please try again.`);
                },
            );
    };

    return (
        <S.StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <SectionDescription>Want to know more or just chat? <br/> You are welcome!</SectionDescription>
                <S.ContactsWrapper >

                    <Icon iconId={'man-standing'} width={'562px'} height={'411px'}/>

                    <S.StyledForm ref={form} onSubmit={sendEmail}>
                        <S.Field required placeholder={'name'} name={'user_name'}/>
                        <S.Field required placeholder={'email'} name={'user_email'}/>
                        <S.Field required placeholder={'message'} as={"textarea"} name={'message'}/>
                        <StyledButton type={'submit'}>Submit</StyledButton>
                    </S.StyledForm>
                </S.ContactsWrapper>
            </Container>
        </S.StyledContacts>
    );
};

