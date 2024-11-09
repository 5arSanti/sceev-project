import React from "react";

import { Link } from "react-router-dom";
import { AppContext } from "../../../Context";

import { handleLogout } from "../../../utils/handleData/handleLogout";
import { IsAuthWrapper } from "../AuthWrapper";

import { FaUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { SlGraph } from "react-icons/sl";
import { MdUploadFile } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { IoLogOutOutline } from "react-icons/io5";

import "./styles.css";


const NavButtons = ({className="nav-buttons animacion2"}) => {
    const context = React.useContext(AppContext)



    return(
        <div className="nav-buttons-container">
            <Link to={"/home"} className={className}>Home <FaHome/></Link>
            <Link to={"/stats"} className={className}>Estadistica <SlGraph/></Link>

            {!context.auth && 
                <Link to={"/login"} className={`${className}`}>Iniciar Sesión <FaUser/></Link>
            }

            <IsAuthWrapper>
                <Link to={"/upload"} className={`${className}`}>Publicar <MdUploadFile/></Link>
                <Link to={"/users"} className={`${className}`}>Usuarios <FaUsers/></Link>
                
                <button  
                    className={`${className}`} 
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                    <IoLogOutOutline/>
                </button>
            </IsAuthWrapper>
        </div>
    );

}

export { NavButtons };