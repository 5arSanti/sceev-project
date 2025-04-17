import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { TextCard } from "../../TextComponents";

const SectionAboutProject = () => {
    return(
        <SectionWrapper id={"section-about-project"}>
            <SectionTitle 
                subTitle="Sistema de Cargue, Espocision y Estadistica de Vacantes"
                title="Sobre el proyecto"
            />
            <TextCard textAlign="center">
                Este proyecto se centra en un software especializado diseñado para optimizar la gestión de información en grandes empresas, con un enfoque en la exposición de vacantes laborales y el análisis de datos. 
            </TextCard>
        </SectionWrapper>
    );
}

export { SectionAboutProject };