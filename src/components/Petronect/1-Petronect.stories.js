import React from 'react';
import Button from './Button';
import Input from './Input'
import FilterSearch from './FilterSearch'

export default {
    title: 'Petronect',
    components: Button, Input, FilterSearch,
};

export const ButtonLogin = () => <Button text="Entrar"/>
export const ButtonCreateAccount = () => <Button text="Concordar e criar conta" typeBackground="createAccount" />

export const InputName = () => <Input type="text" placeholder="Insert name"/>
export const InputEmail = () => <Input type="email" placeholder="name@email.com"/>
export const InputPassword = () => <Input type="password" placeholder="Insert password" />

export const FilterSearchDesempenho = () => <FilterSearch typeTextFilter="desempenho" />
export const FilterSearchMatch = () => <FilterSearch typeTextFilter="match"/>