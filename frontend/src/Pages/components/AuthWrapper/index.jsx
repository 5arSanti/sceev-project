import React from "react";
import axios from "axios"

import { scrollToValue } from "../../../utils/scrollToValue";
import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { handleNotifications } from "../../../utils/handleNotifications";
import { NotFoundCard } from "../NotFoundCard";
import { api } from "../../../utils/api";

const AuthWrapper = ({children}) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    React.useEffect(() => {
        scrollToValue();
        
        axios.get(`${api}/auth/`)
            .then(response => {
                const { data } = response;

                if(data.Status === "Success") {
                    context.setAuth(true);
                    context.setUser(data.user);
                } else {
                    context.setAuth(false);
                }
            })
            .catch(err => {
                context.setAuth(false);
                handleNotifications("error", err.message)
                navigate("/home");
            })
    }, []);

    return (
        children
    );
}

const IsAuthWrapper = ({children, notFound=false}) => {
    const context = React.useContext(AppContext);

    const { auth } = context || false;


    if (auth) {
        return (children);
    }

    if (notFound) {
        return <NotFoundCard/>
    }

    return;
}

export { AuthWrapper, IsAuthWrapper }