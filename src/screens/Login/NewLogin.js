// Libs
import React, { Component } from 'react';
import styled from 'styled-components';

// Components
import Input from '../../components/Inputs/Input';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';

const Overlay = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(to bottom, #115680, #116EA0);	

	span{
		width: 68%;
	}

	@media(max-width: 768px){
		span{
			width: 80%;
		}
	}

	@media(max-width: 640px){
		span{
			width: 95%;
		}
	}
`;

const Container = styled.div`
	width: 35vw;
	height: 45vh;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: #FFF;
	border-radius: 4px;
	padding: 1rem;

	@media(max-width: 768px){
		width: 55%;
	}

	@media(max-width: 640px){
		width: 95%;
		height: 55vh;
	}
`;

const ContainerText = styled.p`
	color: #115680;
	font-size: 1rem;
	font-weight: bold;
`;


export default class NewLogin extends Component {
  render() {
		return (
			<Overlay>
				<Logo type="white" margin="0 0 5rem 0" widthMobile="200px"/>
				<Container>
					<span>
							<ContainerText>The (name@email.com) password has been reseted, login to access you dashboard</ContainerText>
					</span>
					<Input type="email" labelText="Email" placeholder="name@email.com"/>
					<Input type="password" labelText="Password" placeholder="Insert here your password"/>
					<Button width="20rem" height="3rem" background="#115680">Login</Button>
				</Container>
			</Overlay>
		);
  }
}
