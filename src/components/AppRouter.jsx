import React, {useContext} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Error from "../pages/Error";
import {privateRoutes, publicRoutes} from "../router/router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const navigateLogin = useNavigate()
    const {isAuth,setIsAuth} = useContext(AuthContext)

    return (
        isAuth ? <div>
                <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}

                    />,
                )}
                <Route path="/*"
                       element={<Error/>}/>
            </Routes>

        </div>
            : <div>
                <Routes>
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
            </div>

    );
};

export default AppRouter;