import { WrapperContainer1, WrapperContainer2 } from "../WrapperContainers";
import { Graph } from "./Graph";
import { SubTitle } from "../SubTitle";


const GraphContainer = ({graphValues={}, index=0, title=true, wrapper=false}) => {
    return(
        <WrapperContainer2 padding={20} flexDirection="column">
            <WrapperContainer1 flexDirection="column" gap={15}>
                {title && 
                    <SubTitle textAlign="center">
                        {graphValues?.title}
                    </SubTitle>
                }
                

                <Graph index={index} graphValues={graphValues} wrapper={wrapper}/>

            </WrapperContainer1>            
        </WrapperContainer2>
    );
}

export { GraphContainer };