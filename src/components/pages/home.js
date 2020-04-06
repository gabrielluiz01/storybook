import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Logo from '../Petronect/ImageLogo/Logo';
import DropdownOption from '../Petronect/DropdownOption/DropdownOption';
import List from '../Petronect/ListItem/ListItem';
import FilterSearch from '../Petronect/FilterSearch/FilterSearch';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(17, 86, 128) 0%, rgb(17, 110, 160) 100%) transparent;
`;

const Content = styled.div`
  display: flex;
  width: 92%;
  height: 100%;
  margin-top: 3rem;
  border-radius: 4px 4px 0 0;
  background: #fff;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  height: 100%;
  padding-left: 1rem;
  box-shadow: 2px 0px 4px #0000001A;
  z-index: 2;
`;

const Menu = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Option = styled.li`
  width: calc(100% - 1rem);
  padding: .5rem;
  padding-left: 2.25rem;
  list-style: none;
  color: #40404025;
`;

const Title = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 79%;
  height: 100%;
  padding: 0 1.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0 4px 0 0;
  background: #fff;
`;


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: 2rem 0;
`;

const HeaderTitle = styled(Title)`
  font: 600 1rem Arial;
  color: #116EA0;
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disableOptions: [
        {
          // icon: ,
          name: 'Análise de Potencial',
        },
        {
          // icon: ,
          name: 'Histórico de oportunidades',
        },
        {
          // icon: ,
          name: 'Gestão interna',
        },
        {
          // icon: ,
          name: 'Geração de documentos',
        },
        {
          // icon: ,
          name: 'Justificativa de impostos',
        },
        {
          // icon: ,
          name: 'Histórico de esclarecimentos',
        },
        {
          // icon: ,
          name: 'Notificação de resultados',
        },
      ],
      isOpenDropdown: false,
    };
  }

  handleDropdown = () => {
    this.setState({ isOpenDropdown: !this.state.isOpenDropdown });
  }

  renderDisabledOption = () => {
    const { disableOptions } = this.state;

    return disableOptions.map(option => (
      <Option key={option.name}>
        <Title>{option.name}</Title>
      </Option>
    ));
  }

  render() {
    // const { isOpenDropdown } = this.state;
    return (
      <Container>
        <Content>
          <Sidebar>
            <Logo width={'250px'}/>
            <Menu>
              <DropdownOption 
                title={'Match Relevância'}
                handleDropdown={this.handleDropdown}/>
              <DropdownOption
                title={'Desempenho'}/>
              {this.renderDisabledOption()}
            </Menu>
          </Sidebar>
          <Wrapper>
            <Header>
              <HeaderTitle>Oportunidades selecionadas</HeaderTitle>
              <FilterSearch placeholder="Digite palavras chaves" hasTitle/>
              <FilterSearch placeholder="Filtrar Oportunidades" width={'170px'} />
            </Header>
            <List />
          </Wrapper>
        </Content>
      </Container>
    );
  }
}
 
export default Home;