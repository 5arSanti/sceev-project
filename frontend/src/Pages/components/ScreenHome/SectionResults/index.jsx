import { GridContainer } from "../../GridContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { FiltersContainer } from "../../FiltersContainer";

const SectionFiltersResults = () => {
    return (
        <SectionWrapper>

            <GridContainer className="grid-075-125">
                <FiltersContainer/>


            </GridContainer>
            
        </SectionWrapper>
    );
};

export { SectionFiltersResults };