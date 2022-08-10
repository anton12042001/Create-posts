import React, {useContext} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)

    return (
        isAuth ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}

                    />
                )}
                <Route path="/*"
                       element={<Error/>}/>
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route path="/*"
                       element={<Error/>}/>
            </Routes>

    );
};

export default AppRouter;