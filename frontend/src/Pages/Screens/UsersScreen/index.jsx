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
import { handleDeleteData } from "../../../utils/handleData/handleDeleteData";
import { handlePatchData } from "../../../utils/handleData/handlePatchData";

const UsersScreen = () => {
    const { action } = useParams();

    const { fetchData, setLoading } = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        id: null,
        email: null,
        names: null,
        surnames: null,
        userType: null,
        userTypeId: null,
    })

    console.log(values)

    React.useEffect(() => {
        const endpoints = [
            "/users",
            "/users/types",
        ]

        fetchData(endpoints)
    }, []);

    const { users, userTypes } = React.useContext(AppContext).responseData;

    const handleDelete = async ({ "Numero de identificacion": id }) => {
        setLoading(true);

        await handleDeleteData({ id }, "/users");

        setLoading(false);
    };

    const handleUpdate = async (updatedValues) => {
        setLoading(true);
        await handlePatchData(updatedValues, "/users");
        setLoading(false);
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
                        data={users}
                        onDelete={action === "delete" ? handleDelete : null}
                        onUpdate={action === "edit" ? handleUpdate : null}
                        userTypes={userTypes}
                        values={values}
                        setValues={setValues}
                    />
                </WrapperContainer2>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UsersScreen };