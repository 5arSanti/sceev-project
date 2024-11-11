import { GridContainer } from "../../GridContainer";
import { LogInfoCard } from "../../LogInfoCard";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { StyledSection } from "../../StyledSection";
import { SubTitle } from "../../SubTitle";

const SectionPrestador = ({selectedOfert={}}) => {
    return(
        <SectionWrapper>
            <SectionTitle subTitle="El prestador que brindó la oferta" title="Prestador"/>

            <GridContainer className="grid-05-15" padding={"50px 0px"} gap={50}>
                <LogInfoCard title={"Codigo del prestador"} text={selectedOfert?.ID_Prestador}/>

                <StyledSection height="auto">
                    <SubTitle textAlign="end">{selectedOfert?.Prestadores}</SubTitle>
                </StyledSection>
            </GridContainer>
        </SectionWrapper>
    )
}

export { SectionPrestador };