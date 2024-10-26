import { Title } from "../../components/Title";

import { WrapperContainer2 } from "../../components/WrapperContainers";

import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledSection } from "../../components/StyledSection";
import { mainHome } from "../../../assets";

import "./styles.css"
import { SectionMainHome } from "../../components/ScreenHome/SectionMainHomeInfo";

const Home = () => {
    return (

        <AuthWrapper>
            <WrapperContainer2 flexDirection="column" padding={0} gap={0}>

                <StyledSection image={mainHome}>
                    <SectionMainHome/>
                </StyledSection>

                <Title>
                    Bienvenidos al Sistema de Cargue, exposicion y estadistica de vacantes (SCEEV)
                </Title>
            </WrapperContainer2>
        </AuthWrapper>
    );
}

export { Home };