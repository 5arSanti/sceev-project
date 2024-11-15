import { mainHome } from "../../../assets";
import "./styles.css"

const StyledSection = ({children, image, height="100vh"}) => {

    return (
        <section 
            className="styled-home-main-container" 
            id="about"
            style={{
                height: height,
            }}
        >
            <div className="gradient-container">
                {children}
            </div>

            <img src={image || mainHome} alt="Main home imagen"/>
        </section>
    );
}

export { StyledSection }