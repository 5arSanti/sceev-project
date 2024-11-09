import "./styles.css";

const SubTitle = ({children, textAlign = "start", fontSize=22}) => {

    return(
        <div className="sub-title">
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