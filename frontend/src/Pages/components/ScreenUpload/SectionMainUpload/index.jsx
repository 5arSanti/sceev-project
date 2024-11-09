import { FadeWrapper } from "../../FadeWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";

import { FaDatabase } from "react-icons/fa";


const SectionMainUpload = () => {
    return (
        <FadeWrapper>
            <WrapperContainer2 justifyContent="space-evenly" alignItems="center" gap={50} flexDirection="column" padding={80}>

                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <FaDatabase size={60}/>
                    <Title>
                        Carga de datos e información
                    </Title>
                    <TextCard white={true} textAlign="center" className="italic">
                        Realice el cargue de ofertas y vacantes de empleo
                    </TextCard>

                </WrapperContainer2>

            </WrapperContainer2>
        </FadeWrapper>
    );
}

export { SectionMainUpload };