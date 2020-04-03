import React from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
    width: 20rem;
    height: 3rem;
    border-radius: 4px;
    border: 1px solid #7FBA4C;
    padding: 0 0.5rem;
`;


export default function Input(props) {
    return (
        <InputForm onChange={props.onChange} placeholder={props.placeholder} type={props.type}/>
    );
}