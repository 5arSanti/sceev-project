import { NavLink } from "react-router-dom";
// import { mainLogo } from "../../../assets";

import { NavButtons } from "../NavButtons";
import { TextCard } from "../TextComponents";

import "./styles.css"

const Header = () => {

    return(
        <nav className="nav-container animacion-nav">
            <NavLink to="/">
                {/* <img src={mainLogo} alt="" /> */}
                <TextCard fontSize={18} className="nav-buttons animacion2">SCEEV</TextCard>
            </NavLink>

            <NavButtons/>
        </nav>
    );
}

export { Header };