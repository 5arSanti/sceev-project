import React from "react";
import { AuthWrapper } from "../../components/AuthWrapper";
import { GraphContainer } from "../../components/GraphContainer";
import { SectionMainStatsData } from "../../components/ScreenStatsData/SectionMainStatsData";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { StyledSection } from "../../components/StyledSection";

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
                <SectionMainStatsData/>
            </StyledSection>
            <SectionWrapper>
                <SectionTitle title="Informacion grafica"/>

                <GraphContainer graph={graph} index={1} wrapper={true}/>
            </SectionWrapper>
        </AuthWrapper>
    );
}

export { StatsDataScreen };