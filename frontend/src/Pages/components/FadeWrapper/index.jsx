import { Fade } from "react-awesome-reveal";

const FadeWrapper = ({children, width="100%", height="100%"}) => {
    return(
        <Fade style={{width: width, height: height}} cascade={true} damping={1} delay={100}>
            {children}
        </Fade>
    );
}

export { FadeWrapper };