import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";
import { GridContainer } from "../GridContainer";
import { LogInfoCard } from "../LogInfoCard";
import { FaDatabase } from "react-icons/fa";
import { graphIcons } from "../../../utils/Graphs/graphIcons";


const GraphContainer = ({graphValues={}, index=0, title=true, wrapper=false}) => {
    return(
        <WrapperContainer2 flexDirection="column" gap={35} padding={0}>
            {title && 
                <SubTitle textAlign="center" fontSize={26}>
                    {graphValues?.selectedColumn} - {graphValues?.title || `Gráfica de tipo ${graphValues?.graphType}`}
                </SubTitle>
            }

            <GridContainer className="grid-1" padding={0} gap={35}>
                <WrapperContainer2 flexDirection="column" gap={15} padding={0}>
                    <Graph index={index} graphValues={graphValues} wrapper={wrapper}/>
                </WrapperContainer2>            


                <GridContainer padding={0}>
                    <LogInfoCard 
                        icon={<FaDatabase/>}
                        text={graphValues?.selectedColumn}
                        title={"Datos seleccionados"}
                    />
                    <LogInfoCard 
                        icon={graphIcons[graphValues?.graphType]}
                        text={graphValues?.graphType}
                        title={"Tipo de grafica"}
                    />
                </GridContainer>
            </GridContainer>
        </WrapperContainer2>
    );
}

export { GraphContainer };