/* eslint-disable react/prop-types */
import "./styles.css";

/**
 * Texto en etiqueta <p> con utilidades de color y tamaño.
 * Breakpoints: comportamiento tipográfico definido en CSS global.
 */
const TextCard = ({
    children, 
    textAlign="start", 
    width="100%", 
    className="", 
    fontSize=16, 
    white=false,
    style={},
}) => {
    
    return(
        <p 
            style={{
                textAlign: textAlign, 
                width: width,
                fontSize: fontSize,
                ...style
            }} 
            className={`text-card ${className} ${white ? "white-color" : "text-color"}`}>{children}</p>
    );
}

/**
 * Texto en <span> destacado (negrita/color) con tamaño configurable.
 * Breakpoints: estilos responsivos heredados del CSS global.
 */
const SpanCard = ({children, className, fontSize=16}) => {
    return (
        <span className={`span-card ${className}`} style={{
            fontSize: fontSize,

        }}>{children}</span>
    );
}

/**
 * Enlace estilizado con soporte para íconos y tamaño.
 * Breakpoints: estilos de tipografía/íconos manejados por CSS.
 */
const AnchorCard = ({
    children, 
    uri="", 
    className="", 
    padding=0, 
    width="100%", 
    fontSize=16,
    white=false
}) => {
    if (uri === "" || uri == null) {
        return;
    }
    
    return (
        <a href={uri} target="_blank" rel="noopener noreferrer" 
            className={`anchor-card ${className} ${white && "white-color"}`} 
            style={{
                padding: padding,
                width: width,
                fontSize: fontSize,

            }}
        >
            {children}
        </a>
    );
}

export { TextCard, SpanCard, AnchorCard }