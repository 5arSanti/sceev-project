import React from "react";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { StyledSection } from "../../components/StyledSection";

import { FaUsers } from "react-icons/fa";
import { AppContext } from "../../../Context";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { UsersSideBar } from "../../components/ScreenUsers/UsersSidebar";
import { ReactTable } from "../../components/TableContainer/Table";
import { useParams } from "react-router-dom";

const UsersScreen = () => {
    const { action } = useParams();

    const { fetchData } = React.useContext(AppContext);

    React.useEffect(() => {
        const endpoints = [
            "/users",
            "/users/types",
        ]

        fetchData(endpoints)
    }, []);

    const { users, userTypes } = React.useContext(AppContext).responseData;

    const formatedUsers = users?.map((user) => ({
        "Numero de identificacion": user.id,
        "Nombre": user.names,
        "Apellido": user.surnames,
        "Correo": user.email,
        "Rol del usuario": user.userType
    }))

    const handleDelete = (row) => {
        console.log("Eliminar usuario:", row);
        // Lógica para eliminar usuario
    };

    const handleUpdate = (updatedRow) => {
        console.log("Actualizar usuario:", updatedRow);
        // Lógica para actualizar usuario
    };

    return (
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection>
                    <MainSectionInfoCard
                        title="Usuarios"
                        subTitle="Gestion de informacion de usuarios precisa"
                        icon={<FaUsers />}
                    />
                </StyledSection>

                <WrapperContainer2 gap={5} padding={"50px 0px"} justifyContent="start" alignItems="start">
                    <UsersSideBar />

                    <ReactTable
                        data={formatedUsers}
                        onDelete={action === "delete" ? handleDelete : null}
                        onUpdate={action === "edit" ? handleUpdate : null}
                        userTypes={userTypes}
                    />
                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UsersScreen };