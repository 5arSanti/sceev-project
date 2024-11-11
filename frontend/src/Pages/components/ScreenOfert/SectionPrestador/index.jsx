import { prestadorImage } from "../../../../assets";
import { MainSectionInfoCard } from "../../MainSectionInfoCard";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { StyledSection } from "../../StyledSection";

import { RiBuilding2Fill } from "react-icons/ri";

const SectionPrestador = ({selectedOfert={}}) => {
    return(
        <>
            <SectionTitle subTitle="La empresa que brindó esta oferta de empleo" title="Prestador"/>
            <StyledSection image={prestadorImage} height={"90vh"}>
                <MainSectionInfoCard
                    title={`${selectedOfert.Prestadores}`}
                    subTitle={`El codigo del prestador corresponde al numero ${selectedOfert.ID_Prestador}`}
                    icon={<RiBuilding2Fill/>}
                    white={true}
                />
            </StyledSection>
        </>
    )
}

export { SectionPrestador };