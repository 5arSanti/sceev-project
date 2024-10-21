import { Title } from "../../components/Title";
import { AuthWrapper } from "../../components/AuthWrapper";
import { UploadInfoContainer } from "../../components/ScreenUpload/UploadInfoContainer";


const UploadScreen = () => {
    return (
        <AuthWrapper>
            <Title>
                Cargue de Ofertas de empleo
            </Title>
            <UploadInfoContainer/>
        </AuthWrapper>
    );
}

export { UploadScreen };