import React, { Component } from 'react';
import styled from 'styled-components';
import estrelaBranca from '../../estrela-branca.svg'
import estrelaAmarela from '../../estrela-amarela.png'


const BlockFilter = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    span{
        display: flex;
        align-items: center;

        p{
            color: #116EA0;
        }
    }
`;

const TitleFilter = styled.p`
    color: #116EA0;
    font-weight: bold;
`;

const InputSearch = styled.input`
    width: 433px;
    height: 32px; 
    border-radius: 15px;
    padding: 0 0.5rem;
    border: 1px solid #116EA0;
    outline: 0;
    margin: 0 0.5rem;
`;

const OptionsFilter = styled.select`
    width: 165px;
    height: 32px;
    border: 1px solid #116EA0;
    background: none;
    border-radius: 15px;
    color: #116EA0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonFav = styled.div`
    width: 35px;
    height: 35px;
    background: ${props => props.back === true ? "#F9BE38" : '#FFF'};
    border-radius: 50%;
    border: 1px solid #116EA0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    img{
        width: 20px;
    }
`;

export default class FilterSearch extends Component{
    constructor(props) {
        super(props);
        this.state = {
            textFilter: '',
            backgroundFav: false,
            star: false,
            match: false,
        }
    }


    componentDidMount() {
        this.handleTextFilter();
    }

    handleTextFilter = () => {
        if (this.props.typeTextFilter === 'desempenho') {
            this.setState({
                textFilter: 'Desempenho em oportunidades'
            })
        }
        if (this.props.typeTextFilter === 'match') {
            this.setState({
                textFilter: 'Oportunidades selecionadas',
                match: true,
            })
        }
    }

    handleStarBackground = () => {
        this.setState({
            backgroundFav: !this.state.backgroundFav,
            star: !this.state.star,
        })
    }

    render() {
        return (
            <BlockFilter>
                <TitleFilter>{this.state.textFilter}</TitleFilter>
                <span>
                    <p>Filtrar</p>
                    <InputSearch type="text" placeholder="Digite palavras chaves" />
                </span>
                <OptionsFilter>
                    <option>Filtrar oportunidades</option>
                </OptionsFilter>
                {this.state.match && (

                <ButtonFav onClick={this.handleStarBackground} back={this.state.backgroundFav}>
                    {this.state.star === true ? (
                        <img src={estrelaBranca}/>
                    ) : (
                        <img src={estrelaAmarela}/>
                    )}
                </ButtonFav>
                )}
            </BlockFilter>
        );
    }
}