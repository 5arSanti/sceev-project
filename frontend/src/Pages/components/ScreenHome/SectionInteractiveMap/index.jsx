
import React from "react";
import { AppContext } from "../../../../Context";
import { MapContainer } from "../../MapContainer";
import { MapHelpButton } from "../../MapContainer/MapHelpButton";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { WrapperContainer2 } from "../../WrapperContainers";

const SectionInteractiveMap = () => {
    const context = React.useContext(AppContext);

    const { ofertsFilters } = context || {};

    return (
        <SectionWrapper id={"section-interactive-map"}>
            <WrapperContainer2 justifyContent="space-between" alignItems="center" padding={0}>
                <SectionTitle
                    subTitle="Busca tu Oferta de Empleo"
                    title="Mapa interactivo"
                />
            </WrapperContainer2>
            <MapHelpButton />

            <MapContainer selectedDepartment={ofertsFilters?.Departamentos} />
        </SectionWrapper>
    );
}

export { SectionInteractiveMap };