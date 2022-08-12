import React, {useEffect, useState} from "react"
import './App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter, useNavigate} from "react-router-dom";
import {AuthContext} from "./context";


function App() {
    const [isAuth, setIsAuth] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/login')
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
                <Navbar/>
                <AppRouter/>
        </AuthContext.Provider>
    );
}

export default App;
