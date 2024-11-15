import { AuthWrapper } from "../../components/AuthWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

import { SlGraph } from "react-icons/sl";
import { DynamicGraphCard } from "../../components/ScreenStatsData/DynamicGraphCard";
import React from "react";
import { ButtonCard } from "../../components/ButtonCard";
import { IoIosAddCircleOutline } from "react-icons/io";

const StatsDataScreen = () => {
    const [graphCards, setGraphCards] = React.useState([]);

    const addGraphCard = () => {
        setGraphCards([...graphCards, { id: Date.now() }]);
    };
    
      const removeGraphCard = (id) => {
        setGraphCards(graphCards.filter((card) => card.id !== id));
    };

    React.useEffect(() => {
        addGraphCard();
    }, [])

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

                {graphCards?.map((item, index) => (
                    <DynamicGraphCard 
                        key={index}
                        index={index + 1}
                        item={item} 
                        removeGraphCard={removeGraphCard}
                    />
                ))}
                <ButtonCard
                    title="Añadir nueva informacion Grafica"
                    onClick={addGraphCard}
                >
                    Añadir informacíon gráfica <IoIosAddCircleOutline/>
                </ButtonCard>
            </SectionWrapper>


        </AuthWrapper>
    );
}

export { StatsDataScreen };