import { GridContainer } from "../../GridContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";

const ResultsCard = ({item}) => {
    return(
        <WrapperContainer2 height="auto" flexDirection="column">
            <WrapperContainer2>
                <SubTitle>{item.Titulo_Oferta}</SubTitle>

                <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                    <TextCard>{item.Codigo_Oferta}</TextCard>
                    <SpanCard className={"italic"} fontSize={12}>Codigo de la Oferta</SpanCard>
                </WrapperContainer2>
            </WrapperContainer2>

            <ScrollableWrapper>
                {item.Descripcion_Oferta}
            </ScrollableWrapper>

            <GridContainer>
                <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                    <TextCard>{item.Nombre_Prestador}</TextCard>
                    <SpanCard className={"italic"} fontSize={12}>Prestador</SpanCard>
                </WrapperContainer2>
                <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                    <TextCard>{item.Fecha_Publicacion}</TextCard>
                    <SpanCard className={"italic"} fontSize={12}>Fecha de publicacion</SpanCard>
                </WrapperContainer2>
            </GridContainer>
        </WrapperContainer2>
    );
}

export { ResultsCard };