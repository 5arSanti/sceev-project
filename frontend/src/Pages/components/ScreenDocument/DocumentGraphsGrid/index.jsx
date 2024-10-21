import { graphValuesConfig } from "../../../../utils/graphConfig";
import { Graph } from "../../GraphContainer/Graph";
import { WrapperContainer1 } from "../../WrapperContainers";
import { SpanCard, TextCard } from "../../TextComponents";

const DocumentGraphsGrid = ({item, index}) => {
    const values = graphValuesConfig(item);

    return (
        <WrapperContainer1 key={index} padding={15} flexDirection="column">
            <TextCard><SpanCard>Titulo: </SpanCard>{item?.title || ""}</TextCard>
            <Graph index={index} values={values} />
        </WrapperContainer1>
    );
}

export { DocumentGraphsGrid };