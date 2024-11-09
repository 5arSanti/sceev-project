import { AuthWrapper } from "../../components/AuthWrapper";
import { FadeWrapper } from "../../components/FadeWrapper";
import { StyledSection } from "../../components/StyledSection";
import { TextCard } from "../../components/TextComponents";
import { Title } from "../../components/Title";
import { WrapperContainer2 } from "../../components/WrapperContainers";

import { SlGraph } from "react-icons/sl";

const StatsDataScreen = () => {
    return (
        <AuthWrapper>
            <StyledSection>
                <FadeWrapper>
                    <WrapperContainer2 justifyContent="space-evenly" alignItems="center" gap={50} flexDirection="column" padding={80}>

                        <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                            <SlGraph size={60}/>
                            <Title>
                                Visualizacion estadistica de Ofertas
                            </Title>
                            <TextCard white={true} textAlign="center" className="italic">
                                Explora gráficos interactivos y estadísticas detalladas para un análisis preciso
                            </TextCard>

                        </WrapperContainer2>

                    </WrapperContainer2>
                </FadeWrapper>
            </StyledSection>
        </AuthWrapper>
    );
}

export { StatsDataScreen };