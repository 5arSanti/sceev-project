import React from "react";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";
import { SectionActualUser } from "../../components/ScreenUsers/SectionActualUser";
import { SectionUsersList } from "../../components/ScreenUsers/SectionUsersList";
import { StyledSection } from "../../components/StyledSection";

import { FaUsers } from "react-icons/fa";
import { AppContext } from "../../../Context";

const UsersScreen = () => {
    const { fetchData } = React.useContext(AppContext);

    React.useEffect(() => {
        const endpoints = [
            "/users",
            "/users/types",
        ]

        fetchData(endpoints)
    }, []);

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

                <SectionActualUser />

                <SectionUsersList />
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UsersScreen };