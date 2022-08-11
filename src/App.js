import React, {useState} from "react"
import './App.css';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./context";

//settings git test commit 2

function App() {
    const [isAuth, setIsAuth] = useState(false)
    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
