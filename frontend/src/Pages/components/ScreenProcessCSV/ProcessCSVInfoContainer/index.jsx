import React from "react";
// import { SliderInstructionsContainer } from "../../SliderInstructionsContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ProcessCSVForm } from "../ProcessCSVForm";
import { AppContext } from "../../../../Context";
import { CsvLogCard } from "../CsvLogCard";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { GridContainer } from "../../GridContainer";

const ProcessCSVInfoContainer = () => {
    const context = React.useContext(AppContext);

    const stringifiedDataLog = localStorage.getItem("data-log");
    const parsedDataLog = JSON.parse(stringifiedDataLog);

    return(
        <WrapperContainer2 padding={0} flexDirection="column">
            <GridContainer className="grid-1-1" padding={0} flexDirection={context.windowWidth <= 1150 ? "column" : "row"}>
                <ProcessCSVForm/>
            </GridContainer>

            {parsedDataLog &&
                <VerifyLength array={parsedDataLog}>
                    {parsedDataLog?.map((item, index) => (
                        <CsvLogCard key={index} item={item}/>
                    ))}
                </VerifyLength>
            }
        </WrapperContainer2>
    );
}

export { ProcessCSVInfoContainer };