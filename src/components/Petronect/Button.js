import React, { Component } from 'react';
import styled from 'styled-components';


const ButtonSend = styled.button`
    width: 20rem;
    height: 3rem;
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    color: #FFF;
    background: ${props => props.background};
`;


export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            background: '#115680',
        }
    }

    componentDidMount() {
        this.handleBackgroundButton();
    }
    
    handleBackgroundButton = () => {
        if (this.props.typeBackground === 'createAccount') {
            this.setState({
                background: '#116EA0'
            })
        }
    }
    
    render() {
        return (
            <ButtonSend onClick={this.props.onClick} type="submit" background={this.state.background}>{this.props.text}</ButtonSend>
        );
    }
}