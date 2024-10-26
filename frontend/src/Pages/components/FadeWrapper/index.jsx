import { Fade } from "react-awesome-reveal";

const FadeWrapper = ({children}) => {
    return(
        <Fade style={{width: "100%", height: "100%"}} cascade={true} damping={1} delay={100}>
            {children}
        </Fade>
    );
}

export { FadeWrapper };