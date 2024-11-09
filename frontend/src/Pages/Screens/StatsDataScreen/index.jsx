import { AuthWrapper } from "../../components/AuthWrapper";
import { GraphContainer } from "../../components/GraphContainer";
import { SectionMainStatsData } from "../../components/ScreenStatsData/SectionMainStatsData";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { StyledSection } from "../../components/StyledSection";


const StatsDataScreen = () => {
    return (
        <AuthWrapper>
            <StyledSection>
                <SectionMainStatsData/>
            </StyledSection>
            <SectionWrapper>
                <SectionTitle title="Informacion grafica"/>

                <GraphContainer/>
            </SectionWrapper>
        </AuthWrapper>
    );
}

export { StatsDataScreen };