import React from "react";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { validateFile } from "../../../../utils/validate/validateFiles";
import { OptionInputCard, UploadFileCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer1 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { ButtonCard } from "../../ButtonCard";
import { reloadLocation } from "../../../../utils/realoadLocation";
import { handleInputChange } from "../../../../utils/handleInputChange";

const ProcessCSVForm = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        table: null,
        files: null,
    });

    const handleFileUpload = async (event) => {
        try {
            context.setLoading(true);
            
            event.preventDefault();

            validateFile(values?.files);
    
            const formData = new FormData();

            formData.append("table", values.table);

            for (let i = 0; i < values.files.length; i++) {
                formData.append('process-file', values.files[i]);
            }
    
            await handlePostFile(event, formData, "/data", (data) => {
                if (data?.csvLog) {
                    localStorage.setItem("data-log", JSON.stringify(data?.csvLog));
                }
                reloadLocation();
            });

        } 
        catch (err) {
            return handleNotifications("error", err.message);
        } finally {
            context.setLoading(false);
        }
    };

    
    return(
        <WrapperContainer1 padding={30} gap={15}>
            <form encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <SubTitle>
                    Por favor seleccione un archivo
                </SubTitle>

                <UploadFileCard
                    id={"process-file"}
                    accept=".csv"
                    onChange={(event) => handleFileChange(event, ['.csv'], setValues)}
                    filesArray={values?.files}
                    multiple={false}
                    info="Archivo CSV (.csv)"
                />

                <OptionInputCard
                    id={"user-types"}
                    label={"Selecciones la tabla"}
                    none={true}
                    array={["Disciplinas", "Municipios"]}
                    onChange={(event) => handleInputChange("table", event, setValues)}
                    defaultValue={values?.table}
                    required={true}
                />

                <ButtonCard 
                    title="Guardar y Publicar Archivo"
                    type="submit"
                >
                    Guardar y Publicar Archivo
                </ButtonCard>
            </form>
        </WrapperContainer1>
    );
}

export { ProcessCSVForm };