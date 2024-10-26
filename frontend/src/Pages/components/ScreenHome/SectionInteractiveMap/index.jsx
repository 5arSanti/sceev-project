import { GridContainer } from "../../GridContainer";
import { MapContainer } from "../../MapContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";

const SectionInteractiveMap = () => {
    return (
        <SectionWrapper>
            <SectionTitle
                subTitle="Busca tu Oferta de Empleo"
                title="Mapa interactivo"
            />
            <GridContainer className="grid-1">
                <MapContainer/>
            </GridContainer>
        </SectionWrapper>
    );
}

export { SectionInteractiveMap };