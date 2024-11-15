import React from "react";
import { AppContext } from "../../../../Context";
import { WrapperContainer2 } from "../../WrapperContainers";
import { UsersCard } from "../UsersCard";

import { useNavigate } from "react-router-dom";
import { ButtonCard } from "../../ButtonCard";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { TableContainer } from "../../TableContainer";

const UsersGrid = () => {
    const context = React.useContext(AppContext);

    const navigate = useNavigate()

    const { users } = context.responseData || [];

    return(
        <WrapperContainer2 flexDirection="column" gap={20} padding={0}>
            <ButtonCard 
                title="Crear usuario"
                onClick={() => navigate("/register")}
            >
                Crear Usuario
            </ButtonCard>


            <VerifyLength array={users}>
                <TableContainer data={users}/>
            </VerifyLength>
        </WrapperContainer2>
    );
} 

export { UsersGrid}