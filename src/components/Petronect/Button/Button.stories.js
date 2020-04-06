import React from 'react'
import Button from './Button'

export default {
    title: 'Buttons',
    component: Button
};

export const ButtonLogin = () => <Button background="#115680" width="380px" height="56px">Entrar</Button>

export const ButtonCreateAccount = () => <Button background="#116EA0" width="380px" height="56px">Concordar e criar conta</Button>

export const ButtonServiceTerms = () => <Button background="#116EA0" width="120px" height="36px"> OK </Button>
export const SecondCreateAccount = () => <Button color="#505050">Criar Conta</Button>
export const RecoverPassword = () => <Button color="#505050">Recuperar Senha</Button>
export const BacktoLogin = () => <Button color="#505050">Voltar ao Login</Button>