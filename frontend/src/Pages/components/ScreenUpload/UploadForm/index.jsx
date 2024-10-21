import React from "react";
import "./styles.css";
import { AppContext } from "../../../../Context";
import { WrapperContainer1 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { OptionInputCard, UploadFileCard } from "../../InputsCards";
import { ButtonCard } from "../../ButtonCard";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { reloadLocation } from "../../../../utils/realoadLocation";

const UploadForm = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        file: null,
    });

    const handleFileUpload = async (event) => {
        event.preventDefault();

        if (!values.file) {
            handleNotifications("error", "Por favor, seleccione un archivo antes de cargar.")
            return;
        }

        const formData = new FormData();
        formData.append('file', values.file);

        const log = await handlePostFile(event, formData, "/file/upload");
        context.setLogs(log || null)
    };

    return(
        <WrapperContainer1 padding={30}>
            <form encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>
                <UploadFileCard
                    id={"file"}
                    onChange={(event) => handleFileChange(event, ['.txt'], setValues)}
                    description={values.file ? values.file?.name : "Archivos planos o de texto (.txt)"}
                />

                <ButtonCard 
                    title="Guardar y Publicar Archivo"
                    type="submit"
                >
                    Guardar y Publicar Archivo
                </ButtonCard>
            </form>
        </WrapperContainer1>
    )
}

export { UploadForm };