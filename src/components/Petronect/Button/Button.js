import React from 'react';
import styled from 'styled-components';

const ButtonSend = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    color: #FFF;
    background: ${props => props.background};
`;

const Button = (props) => {
    return (
        <ButtonSend icon={props.icon} background={props.background} onClick={props.onClick} width={props.width} height={props.height}>{props.children}</ButtonSend>
    );
}
export default Button;