import { AuthWrapper } from "../../components/AuthWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

import { SlGraph } from "react-icons/sl";
import { DynamicGraphCard } from "../../components/ScreenStatsData/DynamicGraphCard";

const StatsDataScreen = () => {

    return (
        <AuthWrapper>
            <StyledSection>
                <MainSectionInfoCard
                    title="Visualizacion estadistica de Ofertas"
                    subTitle="Explora gráficos interactivos y estadísticas detalladas para un análisis preciso"
                    icon={<SlGraph/>}
                />
            </StyledSection>
            <SectionWrapper>
                <SectionTitle title="Informacion grafica" subTitle="Visualiza tus oportunidades..."/>

                <DynamicGraphCard/>

            </SectionWrapper>
        </AuthWrapper>
    );
}

export { StatsDataScreen };