import React from 'react';
import styled from 'styled-components';

// Style
const Item = styled.div`
  position: relative;
	display: flex;
	width: calc(100% - 2rem);
  align-items: center;
  margin: .2rem 0;
  padding: .5rem 1rem;
  border-radius: 4px 0 0 4px;
  color: #026992;
  background: ${props => props.background};
  cursor: pointer;
  
  &:hover {
    background: #116EA030;
  }
`;

const Icon = styled.div`
  position: absolute;
  left:  ${props => !props.arrow && '1rem'};
  right:  ${props => props.arrow && '2rem'};
  bottom: .5rem;
  font-size: 1.1rem;
  transform: ${props => props.arrow && 'rotate(90deg)'};
`;

const Title = styled.p`
  width: 100%;
  margin: 0;
  font-size: 1rem;
  font-family: arial;
  margin-left: 1.25rem;
  font-weight: 200;

  &:hover {
    font-weight: 600;
  }
`;

const DropdownOption = (props) => {
	return (
		<Item background={props.background} onClick={props.handleDropdown}>
      <Icon>x</Icon>
      <Title>{props.title}</Title>
      <Icon arrow>></Icon>
    </Item>
	);
}

export default DropdownOption;