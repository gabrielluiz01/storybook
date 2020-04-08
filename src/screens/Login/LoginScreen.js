// Libs
import React, { Component } from 'react';
import styled from 'styled-components'
import { keyframes } from 'styled-components';

// Components
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

// Images
import Match from '../../assets/match.svg';
import Desempenho from '../../assets/desempenho.svg';


const Overlay = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-image: linear-gradient(to bottom, #115680, #116EA0);

	@media(max-width: 768px){
		flex-direction: column-reverse;
		align-items: center;
		justify-content: center;
	}
	@media(max-width: 640px){
		justify-content: flex-end;
	}
`;

const BlockForm = styled.div`
	width: 40vw;
	height: 85vh;
	background: #FFF;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
	box-shadow: 0 1px 2px #0000001A;
	align-self: flex-start;

	@media(max-width: 768px){
		align-self: center;
		width: 65%;
		height: 50vh;
		margin-top: 1rem;
	}

	@media(max-width: 640px){
		width: 95%;
		height: 70vh;
	}
`;

const Form = styled.form`
	width: 70%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media(max-width: 768px){
		width: 90%;
	}

	@media(max-width: 640px){
		width: 100%;
	}
`;

const BlockOptions = styled.span`
	width: 70%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	

	@media(max-width: 425px){
		width: 90%;
	}
`;



const BlockImages = styled.div`
	width: 40%;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;

	img{
		width: 400px;
	}


	@media(max-width: 768px){
		width: 90%;
		height: 35vh;
		display: flex;

		img{
			width: 250px;
		}
	}

	@media(max-width: 640px){
		display: none;
	}
`;

const animation = keyframes`
	0% {opacity: 0;}
	20% {opacity: 1;}
	27% {opacity: 1;}
	43% {opacity: 0;}
	100% {opacity: 0;}
`;

const SlideImage = styled.img`
	position:absolute;
	bottom: -10vh;
	animation: ${animation} 8s infinite;

	&:nth-of-type(1) {
		animation-delay: 0s;
	}
	&:nth-of-type(2) {
		animation-delay: -3s;
	}


	@media(max-width: 768px){
		bottom: 5vh;
		right: 10vw;
	}

`;

const SlideMessage = styled.span`
	position: absolute;
	width: 95%;
	margin: 0.25rem 0;
	margin-top: 3rem;
	color: #FFFFFF;
	font: 1.25rem 'Korolev', sans-serif;
	font-weight: bold;
	bottom: -18vh;

	animation: ${animation} 8s infinite;

	&:nth-of-type(1) {
		animation-delay: 0s;
	}
	&:nth-of-type(2) {
		animation-delay: -3s;
	}

	@media(max-width: 768px){
		width: 35%;
		bottom: 15vh;
		left: 12vw;
		font-size: 1rem;
	}

`;

const MessageCreateSlide = styled.p`
	position: absolute;
	bottom: -22vh;
	font-size: 16px;
	text-decoration: underline;
	color: #AADF00;
	animation: ${animation} 8s infinite;
	cursor: pointer;

	&:nth-of-type(1) {
		animation-delay: 0s;
	}
	&:nth-of-type(2) {
		animation-delay: -3s;
	}

	@media(max-width: 768px){
		bottom: 10vh;
		left: 12vw;
	}
`;

export default class LoginScreen extends Component {

	state = {
		images:[
			Desempenho,
			Match
		],
		phrases:[
			'Visualize seu desempenho ao longo do tempo para aumentar sua inteligência financeira de precificação.',
			'Defina seus filtros, receba contratos selecionados e esqueça as listas de mil itens.',
		]
	}

	renderImagesSlide = () => {
		const { images, phrases } = this.state;

		return (
			<BlockImages>
				<>
					<SlideImage src={images[0]} />
					<SlideMessage>{phrases[0]}</SlideMessage>
					<MessageCreateSlide>Criar conta</MessageCreateSlide>
				</>
				<>
					<SlideImage src={images[1]} />
					<SlideMessage>{phrases[1]}</SlideMessage>
					<MessageCreateSlide>Criar conta</MessageCreateSlide>
				</>
			</BlockImages>
		);
	}


  render() {
		return (
			<Overlay>
				<BlockForm>
					<Form>
						<Logo width="200px" margin="0 0 3rem 0"/>
						<Input type="email" labelText="Email" placeholder="name@email.com" margin="0.5rem"/>
						<Input type="password" labelText="Senha" placeholder="Insert password" margin="0.5rem"/>
						<Button background="#115680" width="20rem" height="3rem" margin="1rem 0">
							Entrar
						</Button>
						<BlockOptions>
							<Button color="#505050">Criar conta</Button>
							<Button color="#505050">Resetar senha</Button>
						</BlockOptions>
					</Form>	
				</BlockForm>
				{this.renderImagesSlide()}
			</Overlay>
		);
  }
}
