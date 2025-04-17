import { mainHome } from "../../../assets";
import "./styles.css"

const StyledSection = ({
    children,
    image,
    height = "100vh",
    id
}) => {

    return (
        <section
            className="styled-home-main-container"
            id={id}
            style={{
                height: height,
            }}
        >
            <div className="gradient-container">
                {children}
            </div>

            <img src={image || mainHome} alt="Main home imagen" />
        </section>
    );
}

export { StyledSection }