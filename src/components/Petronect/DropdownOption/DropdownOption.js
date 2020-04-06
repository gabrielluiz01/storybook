import React from 'react';
import styled from 'styled-components';

// Style
const Item = styled.div`
  position: relative;
	display: flex;
	width: 15%;
	align-items: center;
  padding: .4rem 1rem;
  border-radius: 4px 0 0 4px;
  color: #026992;
	background: ${props => props.background};
`;

const Icon = styled.div`
  position: absolute;
  left:  ${props => !props.arrow && '1rem'};
  right:  ${props => props.arrow && '1rem'};
  bottom: .4rem;
  font-size: 1.1rem;
  transform: ${props => props.arrow && 'rotate(90deg)'};
`;

const Title = styled.p`
  margin: 0;
  font-size: 1rem;
  margin-left: 1.25rem;
  font-weight: ${props => props.isSelected};
`;

const DropdownOption = (props) => {
	return (
		<Item background={props.background}>
      <Icon>x</Icon>
      <Title isSeleted={props.isSelected}>Match Relevância</Title>
      <Icon arrow>></Icon>
    </Item>
	);
}

export default DropdownOption;