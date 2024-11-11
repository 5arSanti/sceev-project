/* eslint-disable react/prop-types */
import React from "react";
import { AppContext } from "../../../../Context";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";
import { departmentColors } from "./departmentColors";
import { handleInputChange } from "../../../../utils/handleInputChange";

const MapCard = ({config, geoUrl, setState}) => {
    const context = React.useContext(AppContext);

    const { ofertsFilters, setOfertsFilter } = context;
    const { totalByDepartment } = context.responseData?.ofertsData || {};

    const departmentColorSelect = (properties) => {

        if (!ofertsFilters?.Departamentos) {
          return departmentColors[properties.NOMBRE_DPT];
        }

        if (ofertsFilters?.Departamentos === properties.NOMBRE_DPT) {
            return departmentColors[properties.NOMBRE_DPT];
        }

        return "#D9D9D9";
      };


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
                            fill={departmentColorSelect(geo.properties)}
                            stroke={"#FFF"}
                            onMouseEnter={() => {
                                setState({
                                    department: geo.properties.NOMBRE_DPT,
                                    total: totalByDepartment?.[geo.properties.NOMBRE_DPT],
                                });
                            }}
                            onMouseLeave={() => {setState(null)}}
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