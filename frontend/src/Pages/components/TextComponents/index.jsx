/* eslint-disable react/prop-types */
import "./styles.css";

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

const SpanCard = ({children, className, fontSize=16}) => {
    return (
        <span className={`span-card ${className}`} style={{
            fontSize: fontSize,

        }}>{children}</span>
    );
}

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