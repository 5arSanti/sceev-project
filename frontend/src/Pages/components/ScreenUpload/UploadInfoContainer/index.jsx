import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { UploadForm } from "../UploadForm";
import { UploadLogsContainer } from "../UploadLogsContainer";

const UploadInfoContainer = () => {
    return(
        <AllInfoGridContainer className="grid-1-1">
            <UploadForm/>

            <UploadLogsContainer/>
        </AllInfoGridContainer>
    );
}

export { UploadInfoContainer };