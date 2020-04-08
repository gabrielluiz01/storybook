import React from 'react';
import styled from 'styled-components';

const InputForm = styled.input`
    width: 20rem;
    height: 3rem;
    border-radius: 4px;
    border: 1px solid #7FBA4C;
    padding: 0 0.5rem;
    outline: none;
    margin: ${props => props.margin};
`;

const Label = styled.label`
    display: flex;
    flex-direction: column;

    p{
        color: #7FBA4C;
        margin-left: 0.5rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 13px;
    }
`;


export default function Input(props) {
    return (
        <>
            <Label>
                <p>{props.labelText}</p>
                <InputForm onChange={props.onChange} placeholder={props.placeholder} type={props.type} margin={props.margin}/>
            </Label>
        </>
    );
}