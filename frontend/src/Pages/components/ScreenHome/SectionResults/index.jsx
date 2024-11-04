import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ResultsCard } from "../ResultsCard";
import { ScrollableWrapper } from "../../ScrollableWrapper";

const SectionFiltersResults = () => {
    return (
        <SectionWrapper>
            <SectionTitle title="Ofertas de Empleo"/>

            <GridContainer className="grid-075-125" padding={0}>
                <FiltersContainer/>

                <WrapperContainer2 padding={0}>
                    <ScrollableWrapper maxHeight={600} gap={10}>
                        <ResultsCard/>
                        <ResultsCard/>
                        <ResultsCard/>
                        <ResultsCard/>
                        <ResultsCard/>
                    </ScrollableWrapper>
                </WrapperContainer2>
            </GridContainer>
            
        </SectionWrapper>
    );
};

export { SectionFiltersResults };