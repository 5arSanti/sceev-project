import React from "react";
import { GraphContainer } from "../../GraphContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { GraphConfigOptions } from "../GraphConfigOptions";

const DynamicGraphCard = ({item, removeGraphCard, index}) => {
    const context = React.useContext(AppContext);

    const [ graphValues, setGraphValues ] = React.useState({
        title: "",
        selectedColumn: "Departamentos",
        indexAxis: "x",
        graphType: "bar",
        layout: ""
    })

    React.useEffect(() => {
        const endpoints = [
            `/graph?column=${graphValues?.selectedColumn}`
        ]
        
        context.fetchData(endpoints, setGraphValues);
    }, [graphValues?.selectedColumn])

    return (
        <WrapperContainer2 className="shadow-style" flexDirection="column" padding={40} gap={40}>
            <GraphConfigOptions 
                graphValues={graphValues} 
                setGraphValues={setGraphValues} 
                wrapper={false} 
                item={item} 
                removeGraphCard={removeGraphCard}
                index={index}
            />

            <GraphContainer 
                graphValues={graphValues} 
                index={index} 
                wrapper={false}
            />
        </WrapperContainer2>
    );
}

export { DynamicGraphCard };