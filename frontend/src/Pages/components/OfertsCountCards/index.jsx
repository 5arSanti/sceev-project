import React from "react";

import { AppContext } from "../../../Context";
import { IoMdBriefcase } from "react-icons/io";
import { GridContainer } from "../GridContainer";
import { LogInfoCard } from "../LogInfoCard";
import { CiFilter } from "react-icons/ci";

const OfertsCountCard = () => {
    const context = React.useContext(AppContext);

    const { ofertsData } = context.responseData || [];

    return(
        <GridContainer>
            <LogInfoCard
                icon={<IoMdBriefcase/>}
                text={ofertsData?.totalOfertas}
                title="Numero total de Ofertas de Empleo"
                fontSize={30}
            />
            <LogInfoCard
                icon={<CiFilter/>}
                text={ofertsData?.totalOfertasByFilters}
                title="Numero total de Ofertas de Empleo según filtros"
                fontSize={30}
            />
        </GridContainer>
    );
}

export { OfertsCountCard };