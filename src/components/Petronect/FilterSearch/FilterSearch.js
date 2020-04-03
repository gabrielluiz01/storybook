import React from 'react';
import styled from 'styled-components';

const InputSearch = styled.input`
    width: 400px;
    height: 32px;
    border: 1px solid #116EA0;
    border-radius: 15px;
    padding: 0 0.5rem;
`;


const FilterSearch = (props) => {
    return (
        <InputSearch type="text" placeholder={props.placeholder} icon={props.icon} onChange={props.onChange}/>      
    );
}

export default FilterSearch;