import React, {useContext} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const navigate = useNavigate()
    const logout = () => {
        setIsAuth(false)
        navigate('/login')
    }


    return (
        <div className='navbar'>
            <MyButton onClick={logout} >
                Выйти
            </MyButton>
            <div className="navbar__links">
                <NavLink to={"/about"}>О сайте</NavLink>
                <NavLink to={"/posts"}>Посты</NavLink>
            </div>
        </div>
    );
};

export default Navbar;