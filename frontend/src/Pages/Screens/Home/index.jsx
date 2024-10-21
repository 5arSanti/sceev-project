import { Title } from "../../components/Title";
import { HomeInfoContainer } from "../../components/ScreenHome/HomeInfoContainer";

import { WrapperContainer2 } from "../../components/WrapperContainers";

import "./styles.css"
import { AuthWrapper } from "../../components/AuthWrapper";

const Home = () => {
    return (

        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                <Title>
                    Bienvenidos al Sistema de Cargue, exposicion y estadistica de vacantes (SCEEV)
                </Title>
                <HomeInfoContainer/>
            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { Home };