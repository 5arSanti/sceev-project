import React from "react";
import { AppContext } from "../../../Context";
import { DropCard } from "../DropCard";
import { GridContainer } from "../GridContainer";
import { WrapperContainer2 } from "../WrapperContainers";
import { SubTitle } from "../SubTitle";
import { InputCard } from "../InputsCards";

import { CiSearch } from "react-icons/ci";
import { handleInputChange } from "../../../utils/handleInputChange";

const FiltersContainer = () => {
    const context = React.useContext(AppContext);

    const { ofertsFilters, setOfertsFilter } = context;
    const { filters } = context.responseData || null;

    const array = filters ? Object.keys(filters) : null;

    return (
        <WrapperContainer2 justifyContent="start" alignItems="start" padding={0} flexDirection="column">
            <SubTitle>Filtros</SubTitle>

            <InputCard
                id={"search"}
                haveLabel={false}
                placeholder="Desarrollador"
                icon={<CiSearch/>}
                onChange={(event) => handleInputChange("Busqueda", event, setOfertsFilter)}
                defaultValue={ofertsFilters?.Busqueda}
                
            />

            <GridContainer padding={0} gap={15}>
                {array?.map((item, index) => (
                    <DropCard
                        key={index}
                        title={item}
                        array={filters[item]}
                        onClick={(inputValue) => handleInputChange(item, inputValue, setOfertsFilter)}
                        value={ofertsFilters?.[item]}
                    />
                ))}
            </GridContainer>
        </WrapperContainer2>
    );
}

export { FiltersContainer };