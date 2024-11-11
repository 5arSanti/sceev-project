import React from "react";
import moment from "moment";

import { useParams } from "react-router-dom";
import { AuthWrapper } from "../../components/AuthWrapper";
import { SectionWrapper } from "../../components/SectionWrapper";
import { SectionTitle } from "../../components/SectionWrapper/SectionTitle";
import { AppContext } from "../../../Context";
import { TextCard } from "../../components/TextComponents";
import { GridContainer } from "../../components/GridContainer";
import { WrapperContainer2 } from "../../components/WrapperContainers";
import { SubTitle } from "../../components/SubTitle";
import { LogInfoCard } from "../../components/LogInfoCard";
import { formatNumbers } from "../../../utils/formatNumbers";
import { SubInfoCard } from "../../components/SubInfoCard";
import { SectionPrestador } from "../../components/ScreenOfert/SectionPrestador";
import { StyledSection } from "../../components/StyledSection";

import { IoMdBriefcase } from "react-icons/io";
import { MainSectionInfoCard } from "../../components/MainSectionInfoCard";

const OfertScreen = () => {
    const { id } = useParams();
    
    const context = React.useContext(AppContext);

    const { selectedOfert } = context.responseData || {};

    React.useEffect(() => {
        const endpoints = [
            `/oferts/${id}`
        ]

        context.fetchData(endpoints)
    }, [])



    return(
        <AuthWrapper>
            <StyledSection>
                <MainSectionInfoCard
                    icon={<IoMdBriefcase/>}
                    title={selectedOfert?.Titulo_Oferta}
                    subTitle={"A continuacion, puede encontrar toda la informacion correspondiente a la oferta seleccionada"}
                />
            </StyledSection>

            <SectionWrapper>
                <GridContainer className="grid-125-075">
                    <WrapperContainer2 justifyContent="start" alignItems="start" flexDirection="column" gap={35}>
                        <SubTitle fontSize={24}>{selectedOfert?.Titulo_Oferta}</SubTitle>
                        <SubInfoCard 
                            titleSize={18} 
                            textSize={16} 
                            subTitle={"Cargo."} 
                            text={selectedOfert?.Cargo}
                            textAlign="start"
                        />
                        <SubInfoCard 
                            titleSize={18} 
                            textSize={16} 
                            subTitle={"Descripción."} 
                            text={selectedOfert?.Descripcion_Oferta}
                            textAlign="start"
                        />
                        <SubInfoCard 
                            titleSize={18} 
                            textSize={16} 
                            subTitle={"Disciplina."} 
                            text={selectedOfert?.Disciplinas}
                            textAlign="start"
                        />

                        <GridContainer>
                            <LogInfoCard title={"Fecha de publicacion"} text={moment(selectedOfert?.Fecha_Publicacion).format("DD-MM-YYYY HH:MM:SS")}/>
                            <LogInfoCard title={"Fecha de vencimiento"} text={moment(selectedOfert?.Fecha_Vencimiento).format("DD-MM-YYYY HH:MM:SS")}/>
                        </GridContainer>


                    </WrapperContainer2>
                    <WrapperContainer2 flexDirection="column">
                        <LogInfoCard title={"Codigo de la Oferta"} text={selectedOfert?.Codigo_Oferta}/>
                        <LogInfoCard title={"Salario"} text={"$ " + formatNumbers(selectedOfert?.Salario_Ingresado)}/>
                        <LogInfoCard title={"Meses de experiencia"} text={selectedOfert?.Experiencia}/>
                    </WrapperContainer2>
                </GridContainer>

                <SectionPrestador selectedOfert={selectedOfert}/>

            </SectionWrapper>
        </AuthWrapper>
    );
}

export { OfertScreen };