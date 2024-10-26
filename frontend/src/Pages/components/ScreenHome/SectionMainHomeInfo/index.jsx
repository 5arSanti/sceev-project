import { FadeWrapper } from "../../FadeWrapper";
import { TextCard } from "../../TextComponents";
import { Title } from "../../Title";
import { WrapperContainer2 } from "../../WrapperContainers";


const SectionMainHome = () => {
    return(
        <FadeWrapper>
            <WrapperContainer2 justifyContent="space-evenly" alignItems="center" gap={5} flexDirection="column" padding={80}>
                <TextCard white={true} textAlign="center" fontSize={16}>Bienvenido a</TextCard>

                <WrapperContainer2 justifyContent="center" alignItems="center" gap={5} flexDirection="column">
                    <Title>
                        SCEEV
                    </Title>
                    <TextCard white={true} textAlign="center" className="italic">
                        &quot;Transforma datos en talento, oportunidades en éxito&quot;
                    </TextCard>

                </WrapperContainer2>

            </WrapperContainer2>
        </FadeWrapper>
    );
}

export { SectionMainHome }