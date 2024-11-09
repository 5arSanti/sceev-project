import { SlGraph } from "react-icons/sl";
import { FadeWrapper } from "../../FadeWrapper";
import { WrapperContainer2 } from "../../WrapperContainers";
import { Title } from "../../Title";
import { TextCard } from "../../TextComponents";

const SectionMainStatsData = () => {
    return(
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
    );
}

export { SectionMainStatsData };