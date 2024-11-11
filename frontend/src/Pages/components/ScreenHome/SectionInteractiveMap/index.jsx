
import React from "react";
import { AppContext } from "../../../../Context";
import { MapContainer } from "../../MapContainer";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";

const SectionInteractiveMap = () => {
    const context = React.useContext(AppContext);

    const { ofertsFilters } = context || {};

    return (
        <SectionWrapper>
            <SectionTitle
                subTitle="Busca tu Oferta de Empleo"
                title="Mapa interactivo"
            />

            <MapContainer selectedDepartment={ofertsFilters?.Departamentos}/>
        </SectionWrapper>
    );
}

export { SectionInteractiveMap };