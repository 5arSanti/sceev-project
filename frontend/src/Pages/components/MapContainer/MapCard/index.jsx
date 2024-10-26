import React from "react";
import { AppContext } from "../../../../Context";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./styles.css";

const MapCard = ({config, geoUrl}) => {
    const context = React.useContext(AppContext);

    const departmentColors = {
        "ANTIOQUIA": "#00FF74",
        "ATLÁNTICO": "#00D8FF",
        "BOGOTÁ, D.C.": "#F02B76",
        "BOLÍVAR": "#F0B12B",
        "BOYACÁ": "#BF4BDC",
        "CALDAS": "#AF22CE",
        "CAQUETÁ": "#23FF00",
        "CAUCA": "#4BBFDC",
        "CESAR": "#C820A7",
        "CÓRDOBA": "#FF0000",
        "CUNDINAMARCA": "#00FFAE",
        "CHOCÓ": "#4F1FE4",
        "HUILA": "#7800FF",
        "LA GUAJIRA": "#FFFF00",
        "MAGDALENA": "#055B2F",
        "META": "#438161",
        "NARIÑO": "#381265",
        "NORTE DE SANTANDER": "#AC3F6C",
        "QUINDIO": "#46796D",
        "RISARALDA": "#96ABA6",
        "SANTANDER": "#464C63",
        "SUCRE": "#6E6D2A",
        "TOLIMA": "#E1652C",
        "VALLE DEL CAUCA": "#6678DA",
        "ARAUCA": "#FFE400",
        "CASANARE": "#6BEFE7",
        "PUTUMAYO": "#ADAD38",
        "AMAZONAS": "#76E6A4",
        "GUAINÍA": "#001F93",
        "GUAVIARE": "#6F2E78",
        "VAUPÉS": "#B03804",
        "VICHADA": "#76B8AD",
        "ARCHIPIÉLAGO DE SAN ANDRÉS, PROVIDENCIA Y SANTA CATALINA": "#F312E2",
    }

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