import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { GraphContainer } from "../../components/GraphContainer";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

import { SlGraph } from "react-icons/sl";

const StatsDataScreen = () => {
    const [graph, setGraph] = React.useState({
        graphValues: ["Data1", "Data2"],
        data: [
            [123, 456, 123], 
            [456, 789, 456]
        ],
        datasetLabel: ["label1", "label2"],
        indexAxis: "y",
        graphType: "bar",
        title: "Grafico de barras",
    })

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
                <SectionTitle title="Informacion grafica"/>

                <GraphContainer graph={graph} index={1} wrapper={true}/>
            </SectionWrapper>
        </AuthWrapper>
    );
}

export { StatsDataScreen };