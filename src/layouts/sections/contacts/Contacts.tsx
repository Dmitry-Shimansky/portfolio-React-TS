import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {SectionDescription} from "../../../components/SectionDescription";
import {StyledButton} from "../../../components/Button";
import {Icon} from "../../../components/icon/Icon";

export const Contacts = () => {
    return (
        <StyledContacts>
            <SectionTitle>Contacts</SectionTitle>
            <SectionDescription>Want to know more or just chat? <br/> You are welcome!</SectionDescription>
            <ContactsWrapper>
                <Icon iconId={'man-standing'} width={'562px'} height={'411px'}/>
                <StyledForm>
                    <Field placeholder={'Name'}/>
                    <Field placeholder={'Email'}/>
                    <Field placeholder={'Message'} as={"textarea"}/>
                    <StyledButton type={'submit'}>Submit</StyledButton>
                </StyledForm>
            </ContactsWrapper>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 100px;
    background-color: lightyellow;
`;

const ContactsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`;

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Field = styled.input`

`;