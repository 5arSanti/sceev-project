import React from "react";
import { AppContext } from "../../../../Context";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { SpanCard, TextCard } from "../../TextComponents";
import { GridContainer } from "../../GridContainer";


const UploadLogsContainer = () => {
    const context = React.useContext(AppContext)

    const text = {
        "addedRows": "Registros insertados",
        "duplicateRows": "Registros duplicados",
        "errorRows": "Registros Erroneos",
    }

    return(
        <GridContainer>
            <WrapperContainer2>
                {context.logs &&
                    Object.keys(context.logs)?.filter(item => context.logs?.[item] !== 0)?.map((item, index) => (
                        <WrapperContainer1 key={index}>
                            <TextCard><SpanCard>{text[item]}:</SpanCard> {context.logs?.[item]}</TextCard>
                        </WrapperContainer1>
                    ))
                }
            </WrapperContainer2>
        </GridContainer>
    );
}

export { UploadLogsContainer }