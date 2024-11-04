import { Link } from "react-router-dom";

import { GridContainer } from "../../GridContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

import { FaArrowRight } from "react-icons/fa";

import "./styles.css";

const ResultsCard = ({item = {}}) => {
    return(
        <Link>
            <WrapperContainer2 height="auto" flexDirection="column" className="results-card-container" padding={"15px 25px"}>
                <WrapperContainer2 padding={0}>
                    <SubTitle>{item.Titulo_Oferta || `Titulo Prueba`}</SubTitle>

                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <TextCard textAlign="center">{item.Codigo_Oferta || 12345678}</TextCard>
                        <SpanCard className={"italic"} fontSize={10}>Codigo de la Oferta</SpanCard>
                    </WrapperContainer2>
                </WrapperContainer2>

                <ScrollableWrapper maxHeight={200}>
                    <TextCard>
                        {item.Descripcion_Oferta || ""} Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi impedit voluptatum consequatur itaque, eos pariatur nulla, veritatis vero aliquid ipsum, sit ipsa fugiat unde quibusdam. Hic voluptatem esse beatae nihil?
                    </TextCard>
                </ScrollableWrapper>

                <GridContainer padding={0}>
                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <TextCard fontSize={14} className={"italic"} textAlign="center">{item.Nombre_Prestador || "Prestador Prueba"}</TextCard>
                        <SpanCard  fontSize={10}>Prestador</SpanCard>
                    </WrapperContainer2>
                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <TextCard fontSize={14} className={"italic"} textAlign="center">{item.Fecha_Publicacion || "10/11/2024"}</TextCard>
                        <SpanCard fontSize={10}>Fecha de publicacion</SpanCard>
                    </WrapperContainer2>
                </GridContainer>

                <WrapperContainer2 className="slide-button" justifyContent="center" alignItems="center">
                    <FaArrowRight/>
                </WrapperContainer2>
            </WrapperContainer2>
        </Link>
    );
}

export { ResultsCard };