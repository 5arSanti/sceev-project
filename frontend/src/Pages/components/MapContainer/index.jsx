import React from "react";
import { WrapperContainer2 } from "../WrapperContainers";
import { MapCard } from "./MapCard";
import { colombiaGeo, sanAndresGeo } from "../../../assets";
import { ToolTipMap } from "./ToolTipMap";

import "./styles.css"

const MapContainer = () => {
    const [ selectedDepartment, setSelectedDepartment ] = React.useState(null);

    const colombiaConfig = {
        scale: 1900,
        center: [-74.297333, 4.470868],
    };
    
    const sanAndresConfig = {
        scale: 350000,
        center: [-81.70639, 12.58317],
    }
    const providenciaConfig = {
        scale: 350000,
        center: [-81.37472222, 13.34888889],
    }

    return(
        <WrapperContainer2 padding={0}>
            <ToolTipMap state={selectedDepartment}/>

            <MapCard 
                config={colombiaConfig} 
                geoUrl={colombiaGeo} 
                state={selectedDepartment} 
                setState={setSelectedDepartment}
            />

            <div className="san-andres-container">
                <MapCard 
                    config={sanAndresConfig} 
                    geoUrl={sanAndresGeo} 
                    state={selectedDepartment} 
                    setState={setSelectedDepartment}
                />
                <MapCard 
                    config={providenciaConfig} 
                    geoUrl={sanAndresGeo} 
                    state={selectedDepartment} 
                    setState={setSelectedDepartment}
                />
            </div>
        </WrapperContainer2>
    );
}

export { MapContainer };