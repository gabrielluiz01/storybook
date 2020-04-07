import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
	padding: 0 .4rem;
	border-radius: 4px;
	background: ${props => props.background};
	cursor: pointer;

	&:hover {
		background: #cecece15;
	}

	&:nth-child(even) { background: #F7F7F7}
	&:nth-child(odd) { background: #FFF }
`;

const ListItem = (props) => {
	return (
		<List background={props.background}>
			<Item>x</Item>
			<Item>81%</Item>
			<Item>Petróleo Brasileio S.A</Item>
			<Item>7003056165</Item>
			<Item>Aquisição de Compressor</Item>
			<Item>2020-04-15</Item>
			<Item>2020-04-15</Item>
		</List>
	);
}

export default ListItem;