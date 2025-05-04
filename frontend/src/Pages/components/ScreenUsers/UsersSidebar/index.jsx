import React from "react";
import { FadeWrapper } from "../../FadeWrapper";
import { AppContext } from "../../../../Context";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { FaUserEdit, FaUserMinus, FaUserPlus, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";

import "./styles.css";

const UsersSideBar = () => {
    const [activeMenu, setActiveMenu] = React.useState(true);

    const { user } = React.useContext(AppContext);

    const labelStyle = { opacity: activeMenu ? 0.1 : 0.8, letterSpacing: '0.5px' }

    return (
        <FadeWrapper width="auto">
            <Sidebar width={"300px"} collapsed={activeMenu} className={`side-menu-container ${!activeMenu ? "lines-background" : ""}`} transitionDuration={200} transitionTimingFunction="ease-in-out">
                <Menu className="menu-container" iconShape="square">
                    <WrapperContainer2 height="auto" padding={"20px 20px"} flexDirection="column" gap={10}>
                        <SubTitle className="no-wrap" fontSize={18}>Gestion de usuarios</SubTitle>
                        <TextCard style={labelStyle} className="no-wrap" textAlign="start" fontSize={14}> Bienvenido </TextCard>
                        <TextCard style={labelStyle} className="no-wrap bold" textAlign="start"> {`${user.Nombre} ${user.Apellidos}`} </TextCard>
                        <TextCard style={labelStyle} className="no-wrap bold" textAlign="start" fontSize={12}> {user.Correo} </TextCard>
                        <TextCard style={labelStyle} className="no-wrap bold" textAlign="start" fontSize={12}> {user.Tipo_Usuario} </TextCard>
                    </WrapperContainer2>

                    <WrapperContainer2 height="auto" padding={"10px 20px"}>
                        <TextCard className="no-wrap" style={labelStyle} fontSize={14}> Acciones </TextCard>
                    </WrapperContainer2>

                </Menu>

                <Menu className="menu-container" >
                    <MenuItem icon={<FaUsers />}component={<Link to={"/users"} />}> Ver usuarios </MenuItem>
                    <MenuItem icon={<FaUserEdit />}component={<Link to={"/users/edit"} />}> Editar usuarios </MenuItem>
                    <MenuItem icon={<FaUserMinus />}component={<Link to={"/users/delete"} />}> Eliminar usuarios </MenuItem>
                    <MenuItem icon={<FaUserPlus />} component={<Link to={"/register"} />}> Crear usuario </MenuItem>

                    <WrapperContainer2 height="auto" padding={"10px 20px"}>
                        <TextCard className="no-wrap" style={labelStyle} fontSize={14}> {!activeMenu ? "Cerrar" : "Abrir"} </TextCard>
                    </WrapperContainer2>

                    <MenuItem
                        icon={!activeMenu ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
                        onClick={() => { setActiveMenu(!activeMenu) }}
                        className="menu-item-open-close"
                    >
                        {!activeMenu ? "Cerrar" : "Abrir"}
                    </MenuItem>
                </Menu>

            </Sidebar>
        </FadeWrapper>
    );
}


export { UsersSideBar }; 