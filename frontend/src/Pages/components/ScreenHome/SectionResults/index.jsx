import React from "react";

import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ResultsCard } from "../ResultsCard";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { AppContext } from "../../../../Context";

const SectionFiltersResults = () => {

    const context = React.useContext(AppContext);

    const { oferts } = context.responseData?.ofertsData || [];

    return (
        <SectionWrapper>
            <SectionTitle title="Ofertas de Empleo" subTitle="Encuentre todas las "/>

            <GridContainer className="grid-075-125" padding={0}>
                <FiltersContainer/>

                <WrapperContainer2 padding={0}>
                    <ScrollableWrapper maxHeight={600} gap={10}>
                        {oferts && oferts?.map((item, index) => (
                            <ResultsCard
                                key={index}
                                item={item}
                            />
                        ))}
                    </ScrollableWrapper>
                </WrapperContainer2>
            </GridContainer>
            
        </SectionWrapper>
    );
};

export { SectionFiltersResults };