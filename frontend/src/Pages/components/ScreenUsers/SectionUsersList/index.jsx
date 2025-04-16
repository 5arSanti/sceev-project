import React from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { WrapperContainer2 } from "../../WrapperContainers";
import { FadeWrapper } from "../../FadeWrapper";
import { FaUsers } from "react-icons/fa";
import { FaUserMinus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { Link } from "react-router-dom";

import "./styles.css"
import { TextCard } from "../../TextComponents";
import { SubTitle } from "../../SubTitle";
import { AppContext } from "../../../../Context";

const SectionUsersList = () => {
    const [activeMenu, setActiveMenu] = React.useState(false);

    const { user } = React.useContext(AppContext);

    const labelStyle = { opacity: activeMenu ? 0.1 : 0.8, letterSpacing: '0.5px' }

    return (
        <WrapperContainer2 flexDirection="column" gap={0} padding={0} justifyContent="start" alignItems="start">
            <FadeWrapper>
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
                        <MenuItem icon={<FaUsers />}> Ver usuarios </MenuItem>
                        <MenuItem icon={<FaUserEdit />}> Editar usuarios </MenuItem>
                        <MenuItem icon={<FaUserMinus />}> Eliminar usuarios </MenuItem>
                        <MenuItem icon={<FaUserPlus />} component={<Link to={"/register"} />}> Crear usuario </MenuItem>

                        <WrapperContainer2 height="auto" padding={"10px 20px"}>
                            <TextCard className="no-wrap" style={labelStyle} fontSize={14}> {!activeMenu ? "Cerrar" : "Abrir"} </TextCard>
                        </WrapperContainer2>

                        <MenuItem
                            icon={!activeMenu ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
                            onClick={() => { setActiveMenu(!activeMenu) }}
                            className="end"
                        >
                            {!activeMenu ? "Cerrar" : "Abrir"}
                        </MenuItem>
                    </Menu>

                </Sidebar>
            </FadeWrapper>

        </WrapperContainer2>
    );
}

export { SectionUsersList };