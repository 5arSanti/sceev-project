import { empleadorImage } from "../../../../assets";
import { MainSectionInfoCard } from "../../MainSectionInfoCard";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { StyledSection } from "../../StyledSection";

import { FaFileContract } from "react-icons/fa6";
import { WrapperContainer1, WrapperContainer3 } from "../../WrapperContainers";

const SectionEmpleador = ({selectedOfert={}}) => {
    return (
        <SectionWrapper>
            <SectionTitle subTitle="La empresa que brindó esta oferta de empleo" title="Empleador"/>

            <WrapperContainer1 flexDirection="column" padding={0}>
                <StyledSection image={empleadorImage} height={"90vh"}>
                    <MainSectionInfoCard
                        title={`${selectedOfert.Empleador}`}
                        subTitle={`El codigo del empleador corresponde al número ${selectedOfert.ID_Empleador}`}
                        icon={<FaFileContract/>}
                        white={true}
                    />
                </StyledSection>
            </WrapperContainer1>
        </SectionWrapper>
    );
}

export { SectionEmpleador };