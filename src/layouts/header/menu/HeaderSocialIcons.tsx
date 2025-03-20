import React from 'react';
import styled from "styled-components";
import {v4 as uuid} from 'uuid';
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";

export const HeaderSocialIcons = (props: {iconItems: string[]}) => {
    return (
        <StyledIcons>
                {props.iconItems.map((item) => {
                    return (
                        <LstItem key={uuid()}>
                            <Link href="#">
                                <Icon iconId={item} width={'30px'} height={'30px'} fill={'#666666'}/>
                            </Link>
                        </LstItem>
                    )
                })}
        </StyledIcons>
    );
};

const StyledIcons = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100%;

    @media ${Theme.media.tablet} {
        display: none;
    }
`;

const LstItem = styled.li`
`;

const Link = styled.a`
    #github,  
    #linkedIn, 
    #instagram-icon  {
        transition: ${Theme.animations.transition};
    }
    &:hover {
        #github {
            fill: rgb(0, 0, 0);
        }
        #linkedIn {
            fill: rgb(0, 119, 181);
        }
        #instagram-icon {
            fill: #C837AB;
        }
    }
`;