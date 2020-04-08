import React from 'react';
import Button from '../../components/Petronect/Button/Button';
import styled from 'styled-components';
import Sucess from '../../assets/create-sucess.svg'
import Logo from '../../components/Logo/Logo';


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
	min-height: 45vh;
	background: #FFF;
	border-radius: 4px;
	padding: 0.5rem;
	display: flex;
  flex-direction: column;
	justify-content: space-evenly;
  align-items: center;

  @media(max-width: 768px){
    width: 55%;
  }

  @media(max-width: 620px){
    width: 95%;
    height: 60vh;
  }
`;

const Title = styled.h1`
    font-size: 24px;
    color: #116EA0;
`;

const ImageSucess = styled.img`
`;



export default function CreateSucess() {
  return (
      <Overlay>
          <Logo type="white" margin="0 0 4rem 0" width="200px"/>
          <Container>
            <Title>Conta criada com sucesso!</Title>
            <ImageSucess src={Sucess}/>
            <Button background="#116EA0" width="20rem" height="3rem">Fazer login</Button>
          </Container>
    </Overlay>
  );
}
