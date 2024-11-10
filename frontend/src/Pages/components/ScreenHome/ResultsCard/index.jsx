import moment from "moment";
import { Link } from "react-router-dom";

import { GridContainer } from "../../GridContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SlideButtonCard } from "./SlideButtonCard";

import "./styles.css";

const ResultsCard = ({item = {}, index=1}) => {
    return(
        <Link style={{width: "100%"}}>
            <WrapperContainer2 
                height="auto" 
                flexDirection="column" 
                className="results-card-container" 
                justifyContent="center" 
                alignItems="center" 
                padding={"15px 25px"}
                gap={25}
            >
                <GridContainer className="grid-15-05">
                    <SubTitle>({index + 1}) {item.Titulo_Oferta}</SubTitle>

                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <SpanCard className={"italic"} fontSize={10}>Codigo de la Oferta</SpanCard>
                        <TextCard textAlign="center">{item.Codigo_Oferta}</TextCard>
                    </WrapperContainer2>
                </GridContainer>

                <ScrollableWrapper maxHeight={200}>
                    <TextCard>
                        {item.Descripcion_Oferta}
                    </TextCard>
                </ScrollableWrapper>

                <GridContainer padding={0} className="grid-15-05">
                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <SpanCard  fontSize={10}>Prestador</SpanCard>
                        <TextCard fontSize={14} className={"italic"} textAlign="center">{item.Prestadores}</TextCard>
                    </WrapperContainer2>
                    <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                        <SpanCard fontSize={10}>Fecha de publicacion</SpanCard>
                        <TextCard fontSize={14} className={"italic"} textAlign="center">{moment(item.Fecha_Publicacion).format("DD-MM-YYYY")}</TextCard>
                    </WrapperContainer2>
                </GridContainer>

                <SlideButtonCard/>
            </WrapperContainer2>
        </Link>
    );
}

export { ResultsCard };