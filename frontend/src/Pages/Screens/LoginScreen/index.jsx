import React from "react";
import axios from "axios";

import { AppContext } from "../../../Context";

import { useNavigate } from "react-router-dom";

import { handleNotifications } from "../../../utils/handleNotifications";
import { scrollToValue } from "../../../utils/scrollToValue";
import { InputCard } from "../../components/InputsCards";
import { handleInputChange } from "../../../utils/handleInputChange";
import { api } from "../../../utils/api";

import "./styles.css";
import { StyledSection } from "../../components/StyledSection";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { FadeWrapper } from "../../components/FadeWrapper";
import { AuthWrapper } from "../../components/AuthWrapper";
import { handlePostData } from "../../../utils/handleData/handlePostData";

const LoginScreen = () => {
    const context = React.useContext(AppContext);

    React.useEffect(() => {
        scrollToValue()
    }, []);

    const [values, setValues] = React.useState({
        email: null,
        password: null,
    })

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = async (event) => {
        event.preventDefault();
        context.setLoading(true);

        await handlePostData(event, values, "/auth/login", () => { navigate("/home") })

        context.setLoading(false);
    }

    return (
        <AuthWrapper>
            <StyledSection>
                <FadeWrapper height="auto">
                    <WrapperContainer2 height="auto" padding={30} flexDirection="column" justifyContent="center" alignItems="center">
                        <SectionTitle white={true} title="SCEEV" subTitle="Bienvenido al" />

                        <WrapperContainer2
                            className="login-container"
                            flexDirection="column"
                            padding={"50px 75px"}
                            gap={30}
                            height="auto"
                        >
                            <TextCard textAlign="center" white={true} fontSize={18}>
                                Inicia sesión con tu cuenta
                            </TextCard>

                            <form className="login-form-container" onSubmit={handleSubmit}>
                                <InputCard
                                    type="email"
                                    id={"email"}
                                    label={"Correo:"}
                                    placeholder="Ingrese su correo"
                                    onChange={(event) => handleInputChange("email", event, setValues)}
                                    defaultValue={values?.email}
                                />
                                <InputCard
                                    type="password"
                                    id={"password"}
                                    label={"Contraseña:"}
                                    placeholder="Ingrese su contraseña"
                                    onChange={(event) => handleInputChange("password", event, setValues)}
                                    defaultValue={values?.password}
                                />
                                <button type="submit">Iniciar sesion</button>
                            </form>
                        </WrapperContainer2>
                    </WrapperContainer2>
                </FadeWrapper>
            </StyledSection>
        </AuthWrapper>
    );
}

export { LoginScreen }