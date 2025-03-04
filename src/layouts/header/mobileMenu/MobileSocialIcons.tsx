import React from 'react';
import styled from "styled-components";
import {v4 as uuid} from 'uuid';
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";

export const MobileSocialIcons = (props: {iconItems: string[]}) => {
    return (
        <StyledIcons>
                {props.iconItems.map((item) => {
                    return (
                        <LstItem key={uuid()}>
                            <Link href="#">
                                <Icon iconId={item} width={'40px'} height={'40px'} fill={'#FFF'}/>
                            </Link>
                        </LstItem>
                    )
                })}
        </StyledIcons>
    );
};

const StyledIcons = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    //height: 100%;
`;

const LstItem = styled.li`
    
`;

const Link = styled.a`
    #instagram-icon {
        fill: #FFF;
        stroke: #666666;
    }
`;