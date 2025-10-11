/* eslint-disable react/prop-types */
import "./styles.css";

/**
 * Contenedor flexible con fondo y borde lateral para agrupar contenido.
 * Breakpoints: estilos propios; no fuerza columnas. Usa props de flex para layout.
 */
const WrapperContainer1 = ({children, flexDirection = "row", padding = 20, gap = 15, justifyContent="start", alignItems="center"}) => {
    return(
        <div className="wrapper-container1 shadow-style border-left-style" style={{
            flexDirection: flexDirection,
            padding: padding,
            gap: gap,
            justifyContent: justifyContent, 
            alignItems: alignItems,
        }}>
            {children}
        </div>
    );
}

/**
 * Contenedor flexible transparente y relativo; admite alto y ancho configurables.
 * Breakpoints: estilos propios; no define media queries aquí.
 */
const WrapperContainer2 = ({
        children, 
        flexDirection = "row", 
        padding = 20, 
        paddingVertical=null, 
        gap = 15, 
        justifyContent="start", 
        alignItems="center", 
        className="",
        height="100%",
        width="100%"
    }) => {
    return(
        <div className={`wrapper-container2 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: height,
            width: width
        }}>
            {children}
        </div>
    );
}

/**
 * Contenedor con borde y hover para resaltar bloques interactivos.
 * Breakpoints: sin media queries; mantiene flex y alineación.
 */
const WrapperContainer3 = ({
    children, 
    flexDirection = "row", 
    padding = 20, 
    paddingVertical=null, 
    gap = 15, 
    justifyContent="start", 
    alignItems="center", 
    className="",
    height="auto"
}) => {
    return(
        <div className={`wrapper-container3 ${className}`} style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems,
            height: height,
        }}>
            {children}
        </div>
    );
}

/**
 * Contenedor de sección con padding configurable y fondo de sección.
 * Breakpoints: sin media queries aquí; se adapta vía props y CSS global.
 */
const WrapperContainer4 = ({children, flexDirection = "row", padding = 20, paddingVertical=50, paddingHorizontal=30, gap = 15, justifyContent="start", alignItems="start"}) => {
    return(
        <div className="wrapper-container4" style={{
            flexDirection: flexDirection,
            padding: padding,
            paddingTop: paddingVertical || padding,
            paddingBottom: paddingVertical || padding,
            paddingRight: paddingHorizontal || padding,
            paddingLeft: paddingHorizontal || padding,
            gap: gap,
            justifyContent: justifyContent,
            alignItems: alignItems
        }}>
            {children}
        </div>
    );
}

export { WrapperContainer1, WrapperContainer2, WrapperContainer3, WrapperContainer4 };