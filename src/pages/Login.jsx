import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
    }
    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput placeholder="Введите логин" type="text"/>
                <MyInput placeholder="Введите пароль" type="password"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;