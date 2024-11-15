import "./styles.css";

const ButtonCard = ({children, className="", title="", onClick, type="button", padding=20, borderWidth=1}) => {
    return(
        <button
            className={`button-card-container ${className}`}
            title={title}
            onClick={(event) => onClick(event)}
            type={type}
            style={{
                padding: padding,
                borderWidth: borderWidth
            }}
        >
            {children}
        </button>
    );
}

export { ButtonCard };