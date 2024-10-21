import { PDFText, PDFThirdtitle } from "../PDFTextsComponents";
import { PDFWrapper } from "../PDFWrapper";

const PDFGlosary = () => {
    return(
        <PDFWrapper justifyContent='start' wrap={false}>
            <PDFThirdtitle>Glosario</PDFThirdtitle>
            
            <PDFText><PDFText bold={true}>Empleo: </PDFText>Trabajo que se realiza a cambio de un salario. </PDFText>

            <PDFText><PDFText bold={true}>Oferente de Empleo: </PDFText>Buscador de empleo, es una persona que está buscando activamente un trabajo.</PDFText>

            <PDFText><PDFText bold={true}>Buscadores de empleo de empleo registrados: </PDFText>Número total de personas que se encuentran registradas en las bases de datos del SISE mediante los prestadores de la red del SPE.</PDFText>

            <PDFText>
                <PDFText bold={true}>El Servicio Público de Empleo: </PDFText>
                La Unidad del Servicio Público de Empleo, entidad adscrita al Ministerio del Trabajo, se consolida como el vínculo indispensable entre buscadores de empleo y potenciales empleadores, promoviendo oportunidades de trabajo formal de manera equitativa, transparente y gratuita dentro y fuera de Colombia. La misión del Servicio Público de Empleo es clara; facilitar la conexión entre quienes buscan empleo y las oportunidades laborales, respaldando a empleadores en la identificación de talento humano para cubrir sus vacantes. Actualmente, contamos con una extensa Red de Prestadores, que abarca las agencias de empleo de alcaldías y gobernaciones, la Agencia Pública de Empleo del SENA y las agencias de empleo de las cajas de compensación familiar y bolsas de empleo de las Universidades las cuales  están presentes en todos los departamentos del país.
            </PDFText>
        </PDFWrapper>
    );
}
export { PDFGlosary };