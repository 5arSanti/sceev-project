import { FaArrowRight } from "react-icons/fa";
import { WrapperContainer2 } from "../../../WrapperContainers";

import "./styles.css"

const SlideButtonCard = () => {
    return(
        <WrapperContainer2 className="slide-button" justifyContent="flex-end" alignItems="center" padding={"0 50px 0 0"}>
            <FaArrowRight/>
        </WrapperContainer2>
    );
}

export { SlideButtonCard };