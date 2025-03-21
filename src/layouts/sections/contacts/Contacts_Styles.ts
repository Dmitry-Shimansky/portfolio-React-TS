import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const StyledContacts = styled.section`
    background: linear-gradient(180.00deg, rgba(216, 226, 220, 0.08),rgba(255, 255, 255, 0.11) 100%);
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
    
    svg {
        position: relative;
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
    position: relative;
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
        box-shadow: 2px 2px 100px 0 rgba(0, 255, 255, 0.4);;
    }
`;

export const S = {
    StyledContacts,
    ContactsWrapper,
    StyledForm,
    Field
}