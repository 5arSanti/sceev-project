import React from "react";
import { SectionWrapper } from "../../SectionWrapper";
import { SectionTitle } from "../../SectionWrapper/SectionTitle";
import { AppContext } from "../../../../Context";
import { GridContainer } from "../../GridContainer";
import { FaUser } from "react-icons/fa";
import { SubInfoCard } from "../../SubInfoCard";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css";

const SectionActualUser = () => {
    const context = React.useContext(AppContext);

    const { user } = context;

    return(
        <SectionWrapper>
            <SectionTitle subTitle="Observa tu información" title="Usuario actual"/>

            <WrapperContainer2 flexDirection="column" padding={0} className="actual-user-container" gap={30}>
                <FaUser width={70} height={70} className="actual-user-icon"/>
                
                <SubInfoCard
                    textAlign="center"
                    titleSize={14}
                    textSize={20}
                    subTitle={"Nombre:"}
                    text={user.Nombre}
                />
                <SubInfoCard
                    textAlign="center"
                    titleSize={14}
                    textSize={20}
                    subTitle={"Apellidos:"}
                    text={user.Apellidos}
                />
                <SubInfoCard
                    textAlign="center"
                    titleSize={14}
                    textSize={20}
                    subTitle={"Correo electronico:"}
                    text={user.Correo}
                />
                <SubInfoCard
                    textAlign="center"
                    titleSize={14}
                    textSize={20}
                    subTitle={"Tipo de usuario:"}
                    text={user.Tipo_Usuario}
                />
            </WrapperContainer2>

        </SectionWrapper>
    );
}

export { SectionActualUser };