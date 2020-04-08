// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../components/Inputs/Input'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'

const Overlay = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, #115680, #116EA0);
`;


const Container = styled.div`
	width: 30vw;
	min-height: 33vh;
	background: #FFF;
	border-radius: 4px;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	@media(max-width: 768px){
		width: 55%;
	}

	@media(max-width: 640px){
		width: 95%;
	}
`;

const ContainerTitle = styled.h1`
	margin-bottom: 1rem;
	align-self: flex-start;
	margin-left: 2.5rem;
	color: #116EA0;
`;



export default class ResetPassword extends Component{
	render() {
		return (
			<Overlay>
				<Logo type="white" width="180px" margin="0 0 5rem 0" marginMobile="0 0 2rem 0" />
				<Container>
					<ContainerTitle>Password reset</ContainerTitle>
					<Input type="email" labelText="Email" placeholder="name@email.com" />
					<Button
						background="#115680"
						width="20rem"
						height="3rem"
						margin="1rem 0">
						Request password reset
					</Button>
					<Button color="#505050"><u>Back to login</u></Button>
				</Container>
			</Overlay>	
		);
	}
}