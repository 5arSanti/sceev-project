import "./styles.css"

/**
 * Contenedor de grid responsivo con utilidades de columnas por clase.
 * Breakpoints: a <=1150px fuerza 1 columna (ver styles.css @media).
 */
const GridContainer = ({children, padding=0, className="grid-1-1", gap=20}) => {
    return(
        <div className={`grid-container ${className}`} style={{
            gap: gap,
            padding: padding,
        }}>
            {children}
        </div>
    )
}

export { GridContainer };