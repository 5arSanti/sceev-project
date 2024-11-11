import React from "react";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { formatNumbers } from "../../../../utils/formatNumbers";
import { AppContext } from "../../../../Context";

import "./styles.css";
import { ButtonCard } from "../../ButtonCard";
import { handleInputChange } from "../../../../utils/handleInputChange";

const ToolTipMap = ({ state={} }) => {
    const context = React.useContext(AppContext);

    const { ofertsFilters, setOfertsFilter } = context;
    const { totalByDepartment } = context.responseData?.ofertsData || {};

    return (
        <div className="tool-tip-container">
            <TextCard fontSize={12} className="italic">Seleccione con el cursor el departamento de su interés</TextCard>

            <WrapperContainer2 height="auto" flexDirection="column" padding={0} gap={15}>
                <TextCard fontSize={14}>
                    <SpanCard fontSize={14}>Departamento:</SpanCard> {ofertsFilters?.Departamentos && ofertsFilters?.Departamentos || state?.department}
                </TextCard>

                <TextCard fontSize={14}>
                    <SpanCard fontSize={14}>Ofertas de Empleo:</SpanCard> {ofertsFilters?.Departamentos && totalByDepartment[ofertsFilters?.Departamentos] || state?.total}
                </TextCard>

                {ofertsFilters?.Departamentos  &&
                    <ButtonCard
                        title="Borrar selección"
                        onClick={() => handleInputChange("Departamentos", "", setOfertsFilter)}
                        padding={5}
                    >
                        Borrar seleccion
                    </ButtonCard>
                }
            </WrapperContainer2>

        </div>
    );
}

export { ToolTipMap };