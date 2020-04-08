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
	width: 28vw;
	min-height: 65vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 4px;
	padding: 1rem;
	background: #FFF;

	@media(max-width: 768px){
		width: 60vw;
	}

	@media(max-width: 640px){
		width: 95%;
	}
`;

const ContainerTitle = styled.h2`
	color: #116EA0;
	font-size: 24px;
	align-self: flex-start;
	margin: 0.5rem 0 0.5rem 1.5rem;

	@media(max-width: 768px){
		margin-left: 3.2rem;
	}

	@media(max-width: 640px){
		margin-left: 0.5rem;
	}
`;

const ContainerParagraph = styled.p`
	margin: 0.5rem 0 1rem 0;
	color: #505050;
	width: 85%;

	@media(max-width: 768px){
		width: 75%;
	}

	@media(max-width: 640px){
		width: 100%;
		margin-left: 1rem;
	}
`;



export default class ResetPassword extends Component {
  render() {
		return (
			<Overlay>
				<Logo type="white" width="180px" margin="0 0 3rem 0"/>
				<Container>
					<ContainerTitle>Password reset</ContainerTitle>
					<ContainerParagraph>A confirmation code sent to name@email.com, please, paste it bellow:</ContainerParagraph>
					<Input type="text" labelText="Confirmation code" placeholder="Insert here the code" margin="0.5rem 0"/>
					<Input type="password" labelText="New password" placeholder="Insert here new password" margin="0.5rem 0"/>
					<Input type="password" labelText="Repeat new password" placeholder="Repeat new password" margin="0.5rem 0"/>
					<Button background="#115680" width="20rem" height="3rem" margin="1rem 0">
						Proceed with password reset
					</Button>
					<Button color="#505050">
						<u>Resend email</u>
					</Button>
				</Container>			
			</Overlay>
    );
  }
}
