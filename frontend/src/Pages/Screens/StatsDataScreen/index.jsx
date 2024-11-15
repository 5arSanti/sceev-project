import { AuthWrapper } from "../../components/AuthWrapper";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

import { SlGraph } from "react-icons/sl";
import { SectionGraphs } from "../../components/ScreenStatsData/SectionGraphs";

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
            
            <SectionGraphs/>

        </AuthWrapper>
    );
}

export { StatsDataScreen };