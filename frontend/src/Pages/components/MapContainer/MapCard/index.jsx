/* eslint-disable react/prop-types */
import React from "react";
import { AppContext } from "../../../../Context";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";
import { departmentColors } from "./departmentColors";
import { handleInputChange } from "../../../../utils/handleInputChange";

const MapCard = ({ config, geoUrl, setState, state }) => {
    const context = React.useContext(AppContext);

    const { setOfertsFilter } = context;
    const { totalByDepartment } = context.responseData?.ofertsData || {};

    const departmentColorSelect = (properties) => {

        if (!state) {
            return departmentColors[properties.NOMBRE_DPT];
        }

        if (state === properties.NOMBRE_DPT) {
            return departmentColors[properties.NOMBRE_DPT];
        }

        return "#D9D9D9";
    };


    return (
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
                            name={geo.properties.NOMBRE_DPT}
                            fill={departmentColorSelect(geo.properties)}
                            stroke={"#FFF"}
                            onMouseEnter={() => {
                                setState({
                                    department: geo.properties.NOMBRE_DPT,
                                    total: totalByDepartment?.[geo.properties.NOMBRE_DPT],
                                });
                            }}
                            onMouseLeave={() => { setState(null) }}
                            onClick={() => {
                                handleInputChange("Departamentos", geo.properties.NOMBRE_DPT, setOfertsFilter)
                            }}
                        />
                    ))
                )}
            </Geographies>
        </ComposableMap>
    );
}

export { MapCard };