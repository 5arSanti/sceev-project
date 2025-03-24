import React from "react";

import { AppContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
import { NotFoundCard } from "../NotFoundCard";
import { handleAuthRequest } from "../../../utils/HandleAuth/handleAuthRequest";

const AuthWrapper = ({ children }) => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate();

    React.useEffect(() => {
        handleAuthRequest(context, navigate)
    }, []);

    return (
        children
    );
}

const IsAuthWrapper = ({ children, notFound = false }) => {
    const context = React.useContext(AppContext);

    const { auth } = context || false;


    if (auth) {
        return (children);
    }

    if (notFound) {
        return <NotFoundCard />
    }

    return;
}

export { AuthWrapper, IsAuthWrapper }