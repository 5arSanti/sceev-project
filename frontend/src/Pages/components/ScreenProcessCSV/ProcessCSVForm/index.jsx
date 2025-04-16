import React from "react";
import { handlePostFile } from "../../../../utils/handleData/handlePostData";
import { handleFileChange } from "../../../../utils/handleFileChange";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { validateFile } from "../../../../utils/validate/validateFiles";
import { OptionInputCard, UploadFileCard } from "../../InputsCards";
import { SubTitle } from "../../SubTitle";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { ButtonCard } from "../../ButtonCard";
import { reloadLocation } from "../../../../utils/realoadLocation";
import { handleInputChange } from "../../../../utils/handleInputChange";
import { GridContainer } from "../../GridContainer";
import { FormTextRecommendations } from "../FormTextRecommendations";

const ProcessCSVForm = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        table: null,
        files: null,
    });

    const handleFileUpload = async (event) => {
        context.setLoading(true);
        
        try {
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
        <WrapperContainer1 padding={50} gap={15}>
            <form style={{width: "100%"}} encType="multipart/form-data" className="upload-form-container" onSubmit={handleFileUpload}>
                <GridContainer className="grid-075-125">
                    <UploadFileCard
                        id={"process-file"}
                        accept=".xlsx"
                        onChange={(event) => handleFileChange(event, ['.xlsx'], setValues)}
                        filesArray={values?.files}
                        multiple={false}
                        info="Archivo Excel (.xlsx)"
                    />
                    <WrapperContainer2 flexDirection="column" gap={25}>
                        <SubTitle>
                            Por favor seleccione un archivo
                        </SubTitle>

                        <FormTextRecommendations/>

                        <OptionInputCard
                            id={"user-types"}
                            label={"Seleccione la tabla correspondiente"}
                            none={true}
                            array={["Disciplinas", "Municipios", "Ofertas_Empleo_Desglosado"]}
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
                    </WrapperContainer2>
                </GridContainer>
            </form>
        </WrapperContainer1>
    );
}

export { ProcessCSVForm };