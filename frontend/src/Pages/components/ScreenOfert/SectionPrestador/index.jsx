import { prestadorImage } from "../../../../assets";
import { MainSectionInfoCard } from "../../MainSectionInfoCard";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { StyledSection } from "../../StyledSection";

import { RiBuilding2Fill } from "react-icons/ri";
import { WrapperContainer1 } from "../../WrapperContainers";

const SectionPrestador = ({selectedOfert={}}) => {
    return(
        <SectionWrapper id={"section-prestador"}>
            <SectionTitle subTitle="La empresa que brindó esta oferta de empleo" title="Prestador"/>
            <WrapperContainer1 flexDirection="column" padding={0}>
                <StyledSection image={prestadorImage} height={"90vh"} id={"section-styled-prestador"}>
                    <MainSectionInfoCard
                        title={`${selectedOfert.Prestadores}`}
                        subTitle={`El codigo del prestador corresponde al numero ${selectedOfert.ID_Prestador}`}
                        icon={<RiBuilding2Fill/>}
                        white={true}
                    />
                </StyledSection>
            </WrapperContainer1>
        </SectionWrapper>
    )
}

export { SectionPrestador };