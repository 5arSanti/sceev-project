import { SpanCard, TextCard } from "../../TextComponents"
import { WrapperContainer2 } from "../../WrapperContainers"

const FormTextRecommendations = () => {
    return (
        <WrapperContainer2 flexDirection="column" padding={0} gap={10}>
            <TextCard>Por favor asegúrate de que el archivo que deseas cargar cumpla con las siguientes condiciones</TextCard>
            <TextCard fontSize={14}><SpanCard fontSize={14}> - Tipo de Datos:</SpanCard> El archivo debe contener únicamente datos relacionados con Disciplinas o Municipios.</TextCard>
            <TextCard fontSize={14}><SpanCard fontSize={14}> - Formato:</SpanCard>El archivo debe estar en formato .csv.</TextCard>
            <TextCard fontSize={14}><SpanCard fontSize={14}> - Estructura:</SpanCard>El archivo solo debe tener una columna sin incluir títulos o encabezados.</TextCard>
        
        </WrapperContainer2>
    );

}

export { FormTextRecommendations }