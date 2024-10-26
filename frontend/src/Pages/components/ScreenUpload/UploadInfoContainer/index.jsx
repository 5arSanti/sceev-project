import { GridContainer } from "../../GridContainer";
import { UploadForm } from "../UploadForm";
import { UploadLogsContainer } from "../UploadLogsContainer";

const UploadInfoContainer = () => {
    return(
        <GridContainer className="grid-1-1">
            <UploadForm/>

            <UploadLogsContainer/>
        </GridContainer>
    );
}

export { UploadInfoContainer };