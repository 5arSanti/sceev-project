import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { ProcessCSVInfoContainer } from "../../components/ScreenProcessCSV/ProcessCSVInfoContainer";
import { StyledSection } from "../../components/StyledSection";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

import { FaDatabase } from "react-icons/fa";

const UploadScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection height="auto" id={"section-styled-upload"}>
                    <MainSectionInfoCard
                        title="Carga de datos e información"
                        subTitle="Realice el cargue de ofertas y vacantes de empleo"
                        icon={<FaDatabase/>}
                    />
                </StyledSection>
                
                <ProcessCSVInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UploadScreen };