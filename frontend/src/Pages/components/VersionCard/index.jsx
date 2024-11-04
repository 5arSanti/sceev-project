import React from "react";
import { AppContext } from "../../../Context";
import { TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";
import { getFrontVersion } from "./getFrontVersion";

const VersionCard = () => {
    const context = React.useContext(AppContext);

    const { backVersion } = context.responseData;

    const frontVersion = getFrontVersion();

    return (
        <WrapperContainer2 gap={50} flexDirection="row" justifyContent="flex-end" alignItems="center" padding={0} className="version-container">
            <TextCard width="auto" textAlign="center" fontSize={10}>Frontend: V{frontVersion}</TextCard>
            <TextCard width="auto" textAlign="center" fontSize={10}>Backend: V{backVersion}</TextCard>
        </WrapperContainer2>
    )
}

export { VersionCard };