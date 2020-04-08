// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Images
import Logo from '../../assets/logo.svg';

// Components
import DropdownOption from '../../components/DropdownOption/DropdownOption';
import Option from '../../components/DropdownOption/Option';
import List from '../../components/ListItem/ListItem';
import FilterSearch from '../../components/FilterSearch/FilterSearch';
import Item from '../../components/ListItem/Item';
import Scrollbar from '../../components/Scrollbar/Scrollbar';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgb(17, 86, 128) 0%, rgb(17, 110, 160) 100%) transparent;

  @media(max-width: 768px){
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

const Content = styled.div`
  display: flex;
  width: 92%;
  height: 100%;
  margin-top: 3rem;
  border-radius: 4px 4px 0 0;
  background: #fff;

  @media(max-width: 768px){
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 20%;
  height: 100%;
  padding-left: 1rem;
  box-shadow: 2px 0px 4px #0000001A;
  z-index: 2;

  @media(max-width: 768px){
    width: 100%;
    padding: 0;
    box-shadow: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const LogoImage = styled.img`
  align-self: center;
	margin: 3rem 0;
`;

const SidebarOption = styled.li`
  width: calc(100% - 1rem);
  padding: .5rem;
  padding-left: 2.25rem;
  list-style: none;
`;

const Title = styled.p`
  width: ${props => !props.name && '100%'};
  margin: 0;
  font-size: ${props => (props.name ? '.85rem' : '1rem')};
  padding: ${props => props.name && '.2rem 0'};
  color: ${props => (props.disable ? '#40404025' : '#404040')};
`;

const User = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - 2rem);
  margin: 1rem;
  padding: 1rem 0;
  border-top: solid .5px #EBEBEB;
`;

const Logout = styled.button`
  min-width: 60px;
  margin: 0;
  padding: .2rem .5rem;
  font-size: .85rem;
  border: none;
  border-radius: 10px;
  background-color: #DBE9F1;
  color: #116EA0;
  outline: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 96%;
  height: 100%;
  padding: 0 1.5rem;
  border-radius: 0 4px 0 0;
  background: #fff;

  @media(max-width: 768px){
    width: 93%;
  }

  @media(max-width: 490px){
    width: 87%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  margin: 2rem 0;

  @media(max-width: 768px){
    width: 100%;
  }

  @media(max-width: 490px){
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderTitle = styled(Title)`
  width: auto;
  font: 600 1rem Arial;
  color: #116EA0;
`;

const FavoriteButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: solid .5px #116EA0;
  background: #F7F7F7;
  cursor: pointer;

  @media(max-width: 768px){
    margin-top: 1rem;
    align-self: flex-end;
  }
`;

const ListHead = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0;
  padding: 0 .4rem;
  background: #F7F7F7;

	&:hover {
		background: #cecece15;
	}
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
      type: '',
    };
  }

  handleMatchDropdown = () => {
    this.setState({
      isOpenDropdown: !this.state.isOpenDropdown,
      type: 'match',
    });
  }

  handlePerformanceDropdown = () => {
    this.setState({
      isOpenDropdown: !this.state.isOpenDropdown,
      type: 'performance',
    });
  }

  renderDisabledOption = () => {
    const { disableOptions } = this.state;

    return disableOptions.map(option => (
      <SidebarOption key={option.name}>
        <Title disable>{option.name}</Title>
      </SidebarOption>
    ));
  }

  render() {
    const { isOpenDropdown, type } = this.state;

    return (
      <Container>
        <Content>
          <Sidebar>
            <Menu>
              <LogoImage src={Logo} />
              <DropdownOption 
                title={'Match Relevância'}
                isOpen={isOpenDropdown && type === 'match'}
                handleDropdown={this.handleMatchDropdown}/>
              {(isOpenDropdown && type === 'match') && (
                <Option
                  title={'Filtros e notificações'}/>
              )}
              <DropdownOption
                title={'Desempenho'}
                isOpen={isOpenDropdown && type === 'performance'}
                handleDropdown={this.handlePerformanceDropdown}
                />
              {(isOpenDropdown && type === 'performance') && (
                <Option
                  title={'Gerenciar filtros'}/>
              )}
              {this.renderDisabledOption()}
            </Menu>
            <User>
              <Title>S.A</Title>
              <Title name>Camila</Title>
              <Logout>Sair</Logout>
            </User>
          </Sidebar>
          <Wrapper>
            <Header>
              <HeaderTitle>Oportunidades selecionadas</HeaderTitle>
              <FilterSearch placeholder="Digite palavras chaves" hasTitle width={'52%'} />
              <FilterSearch placeholder="Filtrar Oportunidades" width={'180px'} />
              <FavoriteButton>x</FavoriteButton>
            </Header>
            <Scrollbar full maxHeight={'83vh'}>
              <ListHead>
                <Item bold>x</Item>
                <Item bold>Relevância</Item>
                <Item bold>Empresa</Item>
                <Item bold>Número</Item>
                <Item bold>Título e Descrição</Item>
                <Item bold>Data Inicio</Item>
                <Item bold>Data Final</Item>
              </ListHead>
              <List />
              <List />
              <List />
              <List />
            </Scrollbar>
          </Wrapper>
        </Content>
      </Container>
    );
  }
}
 
export default Home;