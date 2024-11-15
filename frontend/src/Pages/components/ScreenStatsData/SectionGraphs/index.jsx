import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { ButtonCard } from "../../ButtonCard";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { DynamicGraphCard } from "../DynamicGraphCard";

const SectionGraphs = () => {
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

    return(
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
                Añadir nueva visualización gráfica <IoIosAddCircleOutline/>
            </ButtonCard>
        </SectionWrapper>
    );
}

export { SectionGraphs };