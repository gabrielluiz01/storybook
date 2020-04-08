// Libs
import React from 'react';
import styled from 'styled-components';

// Components
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
		min-width: 75%;
	}
`;

const Modal = styled.div`
	width: 35vw;
	height: 60vh;
	border-radius: 4px;
	background: #FFF;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	padding: 1rem;

	@media(max-width: 768px){
		width: 65%;
	}

	@media(max-width: 640px){
		width: 95%;
	}
`;

const ModalTitle = styled.h1`
	color: #116EA0;
	font-size: 1.5rem;
`;

const TextModal = styled.p`
	color: #404040;
	font-size: 1.3rem;
	margin: 1rem 0;
	width: 73%;

	@media(max-width: 640px){
		font-size: 1rem;
		width: 80%;
	}
	u{
		cursor: pointer;
	}
`;



export default function ConfirmEmail() {
  return (
    <Overlay>
			<Logo type="white" width="200px" margin="0 0 5rem 0" widthMobile="220px"/>
			<Modal>
				<span>
					<ModalTitle>Create account</ModalTitle>
				</span>
				<TextModal>Enviamos um e-mail de confirmação para <b>name@email.com</b>. Verifique sua caixa de entrada para prosseguir.</TextModal>
				<TextModal> Caso não tenha recebido a confirmação, clique em <b><u>Reenviar email.</u></b></TextModal>
				<Button background="#116EA0" width="20rem" height="3rem" margin="1rem 0">E-mail confirmado, fazer login</Button>
				<Button color="#505050"><u>Voltar ao login</u></Button>
			</Modal>
    </Overlay>
  );
}
