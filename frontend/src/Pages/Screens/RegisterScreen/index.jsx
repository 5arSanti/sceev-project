import React from "react";

import { AppContext } from "../../../Context";

import { AuthWrapper, IsAuthWrapper } from "../../components/AuthWrapper";
import { handleInputChange } from "../../../utils/handleInputChange";
import { InputCard, OptionInputCard } from "../../components/InputsCards";
import { handlePostData } from "../../../utils/handleData/handlePostData";
import { StyledSection } from "../../components/StyledSection";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { FadeWrapper } from "../../components/FadeWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { TextCard } from "../../components/TextComponents";
import { GridContainer } from "../../components/GridContainer";

const RegisterScreen = () => {
    const context = React.useContext(AppContext);

    const [values, setValues] = React.useState({
        id: null,
        name: null,
        surnames: null,
        email: null,
        password: null,
        confirmPassword: null,
        userType: 0
    })

    const handleRegister = async (event) => {
        event.preventDefault();

        context.setLoading(true);
        await handlePostData(event, values, "/auth/register");
        
        context.setLoading(false);
    }

    return(

        <AuthWrapper>
            <IsAuthWrapper notFound={true}>
                <StyledSection height="auto">
                    <FadeWrapper>
                        <WrapperContainer2 padding={30} flexDirection="column" justifyContent="center" alignItems="center">
                            <SectionTitle white={true} title="SCEEV" subTitle="Bienvenido al"/>

                            <WrapperContainer2 
                                className="login-container" 
                                flexDirection="column"
                                padding={"50px 75px"} gap={30}
                                height="auto"
                            >
                                <TextCard textAlign="center" white={true} fontSize={18}>
                                    Registrar nuevo usuario
                                </TextCard>

                                <form className="login-form-container" onSubmit={handleRegister}>
                                    <GridContainer>
                                        <InputCard
                                            id={"user-id"}
                                            label={"Cedula:"}
                                            placeholder="Ingrese su numero de cédula"
                                            onChange={(event) => handleInputChange("id", event, setValues)}
                                            defaultValue={values?.id}
                                        />
                                        <InputCard
                                            id={"name"}
                                            label={"Nombre:"}
                                            placeholder="Ingrese su nombre"
                                            onChange={(event) => handleInputChange("name", event, setValues)}
                                            defaultValue={values?.name}
                                        />
                                        <InputCard
                                            id={"surnames"}
                                            label={"Apellidos:"}
                                            placeholder="Ingrese los apellidos"
                                            onChange={(event) => handleInputChange("surnames", event, setValues)}
                                            defaultValue={values?.surnames}
                                        />
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
                                        <InputCard
                                            type="password"
                                            id={"confirm-password"}
                                            label={"Confirmar Contraseña:"}
                                            placeholder="Ingrese su contraseña"
                                            onChange={(event) => handleInputChange("confirmPassword", event, setValues)}
                                            defaultValue={values?.confirmPassword}
                                        />
                                    </GridContainer>
                                    <OptionInputCard
                                        id={"user-types"}
                                        label={"Tipo de usuario"}
                                        none={true}
                                        array={context.responseData?.userTypes}
                                        onChange={(event) => handleInputChange("userType", event, setValues)}
                                        defaultValue={values?.userType}
                                        required={true}
                                    />
                                    
                                    <button type="submit">Guardar Usuario</button>
                                </form>
                            </WrapperContainer2>
                        </WrapperContainer2>
                    </FadeWrapper>
                </StyledSection>
            </IsAuthWrapper>
        </AuthWrapper>
    );
}

export { RegisterScreen }