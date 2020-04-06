import React from 'react';
import styled from 'styled-components';

const Cell = styled.li`
	padding: 0 0.5rem;
	list-style: none;

	&:nth-child(1) {
		width: 5%;
	}
	&:nth-child(2) {
		width: 10%;
	}
	&:nth-child(3) {
		width: 20%;
	}
	&:nth-child(4) {
		width: 10%;
	}
	&:nth-child(5) {
		width: 30%;
	}
	&:nth-child(6) {
		width: 15%;
	}
	&:nth-child(7) {
		width: 10%;
	}
`;

const Item = (props) => {
	return (
		<Cell>{props.children}</Cell>
	);
}

export default Item;