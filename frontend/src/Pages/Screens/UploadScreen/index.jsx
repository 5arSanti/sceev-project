import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { ProcessCSVInfoContainer } from "../../components/ScreenProcessCSV/ProcessCSVInfoContainer";
import { StyledSection } from "../../components/StyledSection";
import { SectionMainUpload } from "../../components/ScreenUpload/SectionMainUpload";


const UploadScreen = () => {
    return (
        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection height="auto">
                    <SectionMainUpload/>
                </StyledSection>
                
                <ProcessCSVInfoContainer/>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { UploadScreen };