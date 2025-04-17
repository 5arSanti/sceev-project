import React from "react";
import { AppContext } from "../../Context";
import { Navigate, useRoutes } from "react-router-dom";

import { Home } from "../Screens/Home";
import { StatsDataScreen } from "../Screens/StatsDataScreen";
import { UploadScreen } from "../Screens/UploadScreen";
import { UsersScreen } from "../Screens/UsersScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { LoginScreen } from "../Screens/LoginScreen";
import { OfertScreen } from "../Screens/OfertScreen";

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        { path: "/*", element: <Navigate replace to={"/home"} /> },
        
        { path: "/home", element: <Home /> },

        { path: "/stats", element: <StatsDataScreen /> },

        { path: "/ofert/:id", element: <OfertScreen /> },
        
        { path: "/upload", element: <UploadScreen /> },
        
        { path: "/users/", element: <UsersScreen /> },
        { path: "/users/:action", element: <UsersScreen /> },

        { path: "/register", element: <RegisterScreen /> },

        { path: "/login", element: !auth ? <LoginScreen /> : <Navigate replace to={"/home"} /> },
    ]);

    return routes;
}

export { AppRoutes }