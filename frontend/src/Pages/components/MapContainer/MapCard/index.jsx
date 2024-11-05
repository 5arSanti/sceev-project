import React from "react";
import { AppContext } from "../../../../Context";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";
import { departmentColors } from "./departmentColors";

const MapCard = ({config, geoUrl}) => {
    const context = React.useContext(AppContext);

    const departmentColorSelect = ({properties}) => {
        const color = context.selectedDepartment ? 
            context.selectedDepartment === properties.NOMBRE_DPT ? 
            departmentColors[properties.NOMBRE_DPT] :
            "#D3D3D3" : 
            departmentColors[properties.NOMBRE_DPT];

        
        return color;
    }


    return(
        <ComposableMap
            projectionConfig={config}
            projection="geoMercator"
            className="map-container"
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) => (
                    geographies.map((geo, index) => (
                        <Geography
                            key={index}
                            geography={geo}
                            fill={departmentColorSelect(geo)}
                            stroke={"#FFF"}
                            onMouseEnter={(event) => {context.handleMapMouseEnter(event, geo)}}
                            onMouseLeave={context.handleMapMouseLeave}
                            onClick={() => {context.saveSelectedDepartment(geo.properties.NOMBRE_DPT)}}
                        />
                    ))
                )}
            </Geographies>
        </ComposableMap>
    );
}

export { MapCard };