import "./styles.css";

const Title = ({children, white=false, className=""}) => {
    return (
        <div className="title-container">
            <h1 className={`title archivo-font ${white && "white-color"} ${className}`}>
                {children}
            </h1>
        </div>
    );
}

export { Title };