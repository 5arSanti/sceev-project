import React from "react";
import { ButtonCard } from "../../../ButtonCard";

const ShowInfoWrapper = ({children}) => {
    const [showInfo, setShowInfo] = React.useState(false);

    return(
        <>
            <ButtonCard title={showInfo ? "Cerrar" : "Ver usuarios ya registrados"} onClick={() => {setShowInfo(!showInfo)}}>
                {showInfo ? "Cerrar" : "Ver Información"}
            </ButtonCard>
            
            {showInfo &&
                children
            }
        </>
    )

}

export { ShowInfoWrapper };