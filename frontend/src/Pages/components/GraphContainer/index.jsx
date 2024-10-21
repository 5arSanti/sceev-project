import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";

import { months } from "../../../utils/dateFunctions";

import { graphValuesConfig } from "../../../utils/graphConfig";
import { TextCard } from "../TextComponents";


const GraphContainer = ({graph={}, index=0, title=true, wrapper=false}) => {
    const values = graphValuesConfig(graph);

    return(
        <WrapperContainer2 padding={20} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                {title && 
                    <SubTitle textAlign="center">
                        {graph?.title } - {months[graph?.month]} del {graph?.year}
                    </SubTitle>
                }
                

                <Graph index={index} values={values} wrapper={wrapper}/>

                <TextCard fontSize={12}>Total Nacional <br/> *SISE: Sistema de Información del Servicio Público de Empleo</TextCard>
            </WrapperContainer1>            
        </WrapperContainer2>
    );
}

export { GraphContainer };