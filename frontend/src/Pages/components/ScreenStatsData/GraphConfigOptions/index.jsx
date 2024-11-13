import React from "react";
import { handleInputChange } from "../../../../utils/handleInputChange"
import { InputCard } from "../../InputsCards"
import { WrapperContainer1, WrapperContainer2, WrapperContainer3 } from "../../WrapperContainers"
import { AppContext } from "../../../../Context";
import { GridContainer } from "../../GridContainer";
import { DropCard } from "../../DropCard";
import { chartTypes } from "../../../../utils/chartTypes";

import { FaDatabase } from "react-icons/fa6";

import "./styles.css"
import { graphIcons } from "../../../../utils/Graphs/graphIcons";
import { SubTitle } from "../../SubTitle";

const GraphConfigOptions = ({ graphValues={}, setGraphValues }) => {
    const context = React.useContext(AppContext);

    return(
        <WrapperContainer2 flexDirection="column" className="border-left-style shadow-style" padding={35} gap={35}>
            <SubTitle textAlign="center" fontSize={26}>
                Configuracion de la Gráfica
            </SubTitle>

            <InputCard
                id={"graph-title"}
                label={"Ingresa el titulo de tu grafica"}
                defaultValue={graphValues?.title}
                onChange={(event) => handleInputChange("title", event, setGraphValues)}
                placeholder="Titulo de la grafica"
                required={false}
            />
            
            <GridContainer>
                <WrapperContainer2 padding={0} gap={30} className="graph-option-wrapper">
                    <FaDatabase/>
                    <DropCard
                        title={"¿Que datos deseas visualizar?"}
                        array={context.responseData?.columns}
                        value={graphValues?.selectedColumn}
                        searchBox={true}
                        onClick={(event) => handleInputChange("selectedColumn", event, setGraphValues)}
                        seeAllOption={false}
                    />
                </WrapperContainer2>
                <WrapperContainer2 padding={0} gap={30} className="graph-option-wrapper">
                    {graphIcons[graphValues?.graphType]}
                    <DropCard
                        seeAllOption={false}
                        title={"Selecciona el tipo de grafico"}
                        array={chartTypes}
                        value={graphValues?.graphType}
                        onClick={(event) => handleInputChange("graphType", event, setGraphValues)}
                    />
                </WrapperContainer2>

            </GridContainer>
        </WrapperContainer2>
    )
}

export { GraphConfigOptions };