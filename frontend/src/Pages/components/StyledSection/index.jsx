import "./styles.css"

const StyledSection = ({children, image=""}) => {

    return (
        <section className="styled-home-main-container" id="about">
            <div className="gradient-container">
                {children}
            </div>

            <img src={image} alt="Alternative text"/>
        </section>
    );
}

export { StyledSection }