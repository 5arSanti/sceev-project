//Dependencies
import React from "react";
import { HashRouter, useLocation } from "react-router-dom";

// CSS
import './App.css'
import './App.css'
import "./styles.css"

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Context
import { AppProvider } from "../../Context";

//Components
import { MainContainer } from "../components/MainContainer";
import { Footer, SecondFooter } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { LoadingCard } from "../components/LoadingCard";
import { Header } from "../components/Header";

//Utils
import { scrollToValue } from "../../utils/scrollToValue";
import { AppRoutes } from "../Routes";

const Wrapper = ({children}) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        scrollToValue();
    }, [location.pathname]);

    return children;
}

const App = () => {
    return (
        <AppProvider>
            <HashRouter>
                <Wrapper>
                    <Header/>
                    <LoadingCard/>

                    <MainContainer>
                        <AppRoutes/>
                    </MainContainer>

                    <ToastContainer/>
                    <Footer/>
                    <SecondFooter/>
                </Wrapper>
            </HashRouter>
        </AppProvider>
    );
}

export default App;

