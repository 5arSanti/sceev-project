import React from "react";
import { AppContext } from "../../../Context";
import { DropCard } from "../DropCard";
import { GridContainer } from "../GridContainer";

const FiltersContainer = () => {
    const context = React.useContext(AppContext);

    const { filters } = context.responseData || null;

    const array = filters ? Object.keys(filters) : null;

    return (
        <GridContainer padding={0} gap={15}>
            {array?.map((item, index) => (
                <DropCard
                    key={index}
                    title={item}
                    array={filters[item]}
                />
            ))}
        </GridContainer>
    );
}

export { FiltersContainer };