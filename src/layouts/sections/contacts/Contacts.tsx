import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {StyledButton} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import emailjs from '@emailjs/browser';

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
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <StyledContacts id={"contacts"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <SectionDescription>Want to know more or just chat? <br/> You are welcome!</SectionDescription>
                <ContactsWrapper >

                    <Icon iconId={'man-standing'} width={'562px'} height={'411px'}/>

                    <StyledForm ref={form} onSubmit={sendEmail}>
                        <Field required placeholder={'name'} name={'user_name'}/>
                        <Field required placeholder={'email'} name={'user_email'}/>
                        <Field required placeholder={'message'} as={"textarea"} name={'message'}/>
                        <StyledButton type={'submit'}>Submit</StyledButton>
                    </StyledForm>
                </ContactsWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    background: linear-gradient(180.00deg, rgba(236, 178, 46, 0.08),rgba(255, 255, 255, 0.11) 100%);
`;

const ContactsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 10px;
    
    @media ${Theme.media.tablet860} {
        justify-content: center;
        svg {
            display: none;
        }
    }
`;

const StyledForm = styled.form`
    max-width: 523px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 19px;
    
    textarea {
        resize: none;
        height: 318px;
    }

    @media ${Theme.media.tablet860} {
        align-items: center;
    }
`;

const Field = styled.input`
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    padding: 28px 35px;

    color: ${Theme.colors.font};
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0;
    
    &::placeholder {
        color: ${Theme.colors.placeholder};
        text-transform: capitalize;
    }
    
    &:focus-visible {
        outline: 1px solid ${Theme.colors.accent};
        box-shadow: 2px 2px 100px 0 rgba(251, 168, 32, 0.2);;
    }
`;