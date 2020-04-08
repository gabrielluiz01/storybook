import React from 'react';
import styled from 'styled-components';

import SearchCell from '../SearchCell/SearchCell';

// Style
const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 48%;
  padding-bottom: .75rem;
  border-radius: 4px;
  border: solid .5px #FAB61D;
  color: #026992;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: calc(100% - 1rem);
  padding-left: 1rem;
  margin-bottom: .75rem;
  border-radius: 4px 4px 0 0;
	background: #FAB61D;
`;

const Title = styled.p`
  font-size: 1rem;
  color: #fff;
`;

const IconBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 1rem;
  margin: 0 .4rem;
  color: #fff;
  cursor: pointer;
`;

const CellBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 1rem;
`;

const NotificationFilter = (props) => {
	return (
		<Box>
      <Header>
        <Title>Filtro</Title>
        <IconBox>
          <Icon>x Buscar</Icon>
          <Icon>x Excluir</Icon>
        </IconBox>
      </Header>
      <CellBox>
        <SearchCell></SearchCell>
      </CellBox>
    </Box>
	);
}

export default NotificationFilter;