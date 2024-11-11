import moment from "moment";
import { Link } from "react-router-dom";

import { GridContainer } from "../../GridContainer";
import { ScrollableWrapper } from "../../ScrollableWrapper";
import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer2 } from "../../WrapperContainers";
import { SlideButtonCard } from "./SlideButtonCard";
import { formatNumbers } from "../../../../utils/formatNumbers";

import "./styles.css";
import { SubInfoCard } from "../../SubInfoCard";

const ResultsCard = ({item = {}, index=1}) => {
    return(
        <Link to={`/ofert/${item.Codigo_Oferta}`} style={{width: "100%"}}>
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

                    <SubInfoCard subTitle={"Codigo de la Oferta"} text={item.Codigo_Oferta}/>
                </GridContainer>

                <WrapperContainer2 flexDirection="column" padding={0} gap={5}>
                    <SubInfoCard textAlign="start" subTitle={"Salario."} text={`$ ${formatNumbers(item.Salario_Ingresado)}`}/>
                    
                    <TextCard><SpanCard fontSize={10}>Descripcion: </SpanCard></TextCard>
                    <ScrollableWrapper maxHeight={200}>
                        <TextCard>
                            {item.Descripcion_Oferta}
                        </TextCard>
                    </ScrollableWrapper>
                </WrapperContainer2>

                <GridContainer padding={0} className="grid-15-05">
                    <SubInfoCard subTitle={"Prestador"} text={item.Prestadores}/>
                    <SubInfoCard subTitle={"Fecha de publicación"} text={moment(item.Fecha_Publicacion).format("DD-MM-YYYY")}/>
                </GridContainer>

                <SlideButtonCard/>
            </WrapperContainer2>
        </Link>
    );
}

export { ResultsCard };