import "./styles.css";

const SubTitle = ({
    children,
    textAlign = "start",
    fontSize = 20,
    className = "",
}) => {

    return (
        <div className={`
            sub-title sub-title-style
            ${className}
            ${textAlign == "end" ? "sub-title-style-right" : "sub-title-style-left"}    
        `}>
            <h2 style={{
                textAlign: textAlign,
                fontSize: fontSize
            }}>
                {children}
            </h2>
        </div>
    );
}

export { SubTitle };