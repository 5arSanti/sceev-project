import "./styles.css"

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