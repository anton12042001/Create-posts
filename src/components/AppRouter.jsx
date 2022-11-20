import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Error from "../pages/Error";
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