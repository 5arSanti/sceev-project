import "./styles.css";

const SubTitle = ({children, textAlign = "start", fontSize=20}) => {

    return(
        <div className={`
            sub-title sub-title-style
            ${textAlign == "end" ? "sub-title-style-right" : "sub-title-style-left"}    
        `}>
            <h2  style={{
                textAlign: textAlign,
                fontSize: fontSize
            }}>
                {children}
            </h2>
        </div>
    );
}

export { SubTitle };