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
`;

const Button = (props) => {
    return (
        <ButtonSend
            icon={props.icon}
            background={props.background || 'transparent'}
            onClick={props.onClick}
            width={props.width}
            height={props.height}
            color={props.color || '#fff'}>
                {props.children}
            </ButtonSend>
    );
}
export default Button;