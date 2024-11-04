import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";

const SectionFiltersResults = () => {
    return (
        <SectionWrapper>
            <SectionTitle title="Ofertas de Empleo"/>

            <GridContainer className="grid-075-125">
                <FiltersContainer/>


            </GridContainer>
            
        </SectionWrapper>
    );
};

export { SectionFiltersResults };