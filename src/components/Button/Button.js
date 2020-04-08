import React from 'react';
import styled from 'styled-components';

const ButtonSend = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    color: ${props => props.color};
    background: ${props => props.background};
    margin: ${props => props.margin};


    @media(max-width: 640px){
        width: ${props => props.widthMobile};
        height: ${props => props.heightMobile};
        margin: ${props => props.marginMobile};
        position: ${props => props.position};
        bottom: ${props => props.bottom};
    }
`;

const Button = (props) => {
    return (
        <ButtonSend
            icon={props.icon}
            background={props.background || 'transparent'}
            onClick={props.onClick}
            width={props.width}
            height={props.height}
            color={props.color || '#fff'}
            margin={props.margin}
            widthMobile={props.widthMobile}
            heightMobile={props.heightMobile}
            position={props.position}
            bottom={props.bottom}
            marginMobile={props.marginMobile}>
                {props.children}
            </ButtonSend>
    );
}
export default Button;