import React from "react";
import { GraphContainer } from "../../GraphContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { GraphConfigOptions } from "../GraphConfigOptions";

const DynamicGraphCard = () => {
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
        <WrapperContainer2 flexDirection="column" padding={0}>
            <GraphConfigOptions graphValues={graphValues} setGraphValues={setGraphValues}/>

            <GraphContainer graphValues={graphValues} index={1} wrapper={true}/>

        </WrapperContainer2>
    );
}

export { DynamicGraphCard };