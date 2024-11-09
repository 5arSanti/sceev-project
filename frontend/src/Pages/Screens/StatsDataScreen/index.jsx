import { AuthWrapper } from "../../components/AuthWrapper";
import { SectionMainStatsData } from "../../components/ScreenStatsData/SectionMainStatsData";
import { StyledSection } from "../../components/StyledSection";


const StatsDataScreen = () => {
    return (
        <AuthWrapper>
            <StyledSection>
                <SectionMainStatsData/>
            </StyledSection>
        </AuthWrapper>
    );
}

export { StatsDataScreen };