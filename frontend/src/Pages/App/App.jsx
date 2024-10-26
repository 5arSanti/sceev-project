//Dependencies
import React from "react";
import { HashRouter, Navigate, useLocation, useRoutes } from "react-router-dom";

// CSS
import './App.css'
import './App.css'
import "./styles.css"

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppContext, AppProvider } from "../../Context";

//Screens
import { Home } from "../Screens/Home";
import { LoginScreen } from "../Screens/LoginScreen";
import { RegisterScreen } from "../Screens/RegisterScreen";
import { UploadScreen } from "../Screens/UploadScreen";


//Components
import { MainContainer } from "../components/MainContainer";
import { Footer } from "../components/Footer";
import { GovNavbar } from "../components/GovNavbars";
import { ToastContainer } from "react-toastify";
import { LoadingCard } from "../components/LoadingCard";

//Utils
import { scrollToValue } from "../../utils/scrollToValue";
import { UsersScreen } from "../Screens/UsersScreen";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const AppRoutes = () => {

    const context = React.useContext(AppContext);
    const { auth } = context;

    let routes = useRoutes([
        {path: "/home", element: <Home/>},

        {path: "/*", element: <Navigate replace to={"/home"}/>},
        {path: "/upload", element: <UploadScreen/>},
        {path: "/users", element: <UsersScreen/>},
        

        {path: "/register", element: <RegisterScreen/>},

        {path: "/login", element: !auth ? <LoginScreen/> : <Navigate replace to={"/home"}/>},
    ]);
    
    return routes;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <GovNavbar/>
                    <LoadingCard/>

                    <MainContainer>
                        <AppRoutes/>
                    </MainContainer>

                    <ToastContainer/>
                    <Footer/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

