import React from "react";
import { AppContext } from "../../../../Context";
import { UsersForm } from "../UsersForm";
import { UsersGrid } from "../UsersGrid";
import { GridContainer } from "../../GridContainer";

const UsersInfoContainer = () => {
    const context = React.useContext(AppContext)

    return(
        <GridContainer>
            <UsersGrid/>
            {context.users && <UsersForm/>}
            
        </GridContainer>
    );
}

export { UsersInfoContainer };