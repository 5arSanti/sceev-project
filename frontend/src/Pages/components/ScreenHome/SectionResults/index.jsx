import React from "react";

import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ResultsCard } from "../ResultsCard";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { AppContext } from "../../../../Context";

import { OfertsCountCard } from "../../OfertsCountCards";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { PaginationButtons } from "../../PaginationButtons";

const SectionFiltersResults = () => {
    const context = React.useContext(AppContext);

    const { ofertsData } = context.responseData || [];
    const { oferts } = ofertsData || [];

    return (
        <SectionWrapper id={"section-filter-results"}>
            <SectionTitle subTitle="Encuentre todas las" title="Ofertas de Empleo"/>

            <OfertsCountCard/>

            <GridContainer className="grid-075-125" padding={0} gap={30}>
                <FiltersContainer/>

                <WrapperContainer2 padding={0} flexDirection="column" className="oferts-results-grid">
                    <SubTitle>Resultados.</SubTitle>
                    <TextCard fontSize={16}>
                        Usted se encuentra en la pagina ({ofertsData?.currentPage}) de ({ofertsData?.totalPages}). <br />
                        Mostrando ({oferts?.length}) de ({ofertsData?.totalOfertasByFilters}) resultados.
                    </TextCard>

                    <ScrollableWrapper maxHeight={600} gap={10}>
                        {oferts && oferts?.map((item, index) => (
                            <ResultsCard
                                key={index}
                                index={index}
                                item={item}
                            />
                        ))}
                    </ScrollableWrapper>
                    <PaginationButtons data={ofertsData} setState={context.setOfertsFilter}/>
                </WrapperContainer2>
            </GridContainer>
            
        </SectionWrapper>
    );
};

export { SectionFiltersResults };