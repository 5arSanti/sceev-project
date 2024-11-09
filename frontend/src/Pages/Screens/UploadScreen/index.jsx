import { Title } from "../../components/Title";
import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { ProcessCSVInfoContainer } from "../../components/ScreenProcessCSV/ProcessCSVInfoContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { StyledSection } from "../../components/StyledSection";


const UploadScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection height="auto">

                    <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                        <Title>
                            Cargue de Ofertas de empleo
                        </Title>
                    </WrapperContainer2>
                </StyledSection>
                
                <ProcessCSVInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UploadScreen };