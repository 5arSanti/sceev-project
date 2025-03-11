/* eslint-disable react/prop-types */
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


const NavButtons = ({ className = "nav-buttons animacion2" }) => {
    const { auth, windowWidth } = React.useContext(AppContext)

    const seeDetails = windowWidth > 800;

    return (
        <div className="nav-buttons-container">
            <Link to={"/home"} className={className}>{seeDetails ? "Home" : ""} <FaHome /></Link>
            <Link to={"/stats"} className={className}>{seeDetails ? "Estadistica" : ""} <SlGraph /></Link>

            {!auth &&
                <Link to={"/login"} className={`${className}`}>{seeDetails ? "Iniciar Sesión" : ""} <FaUser /></Link>
            }

            <IsAuthWrapper>
                <Link to={"/upload"} className={`${className}`}>{seeDetails ? "Publicar" : ""} <MdUploadFile /></Link>
                <Link to={"/users"} className={`${className}`}>{seeDetails ? "Usuarios" : ""} <FaUsers /></Link>

                <button
                    className={`${className}`}
                    onClick={handleLogout}
                >
                    Cerrar Sesión
                    <IoLogOutOutline />
                </button>
            </IsAuthWrapper>
        </div>
    );

}

export { NavButtons };