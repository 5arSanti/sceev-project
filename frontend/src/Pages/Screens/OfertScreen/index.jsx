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

import { MdSavings } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { SectionEmpleador } from "../../components/ScreenOfert/SectionEmpleador";
import { MapContainer } from "../../components/MapContainer";
import { formatTextYearOrNo } from "../../../utils/Format/formatTextYesOrNo";

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
                <SectionTitle subTitle="Toda la información centralizada..." title="Detalles de la Oferta"/>
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
                        <LogInfoCard title={"Salario"} text={"$ " + formatNumbers(selectedOfert?.Salario_Ingresado)} icon={<MdSavings/>}/>
                        <LogInfoCard title={"Meses de experiencia"} text={selectedOfert?.Experiencia} icon={<MdCalendarMonth/>}/>
                    </WrapperContainer2>
                </GridContainer>

            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle subTitle="Cantidad de Ofertas, tipo de oferta y mucho mas..." title="Información adicional"/>

                <GridContainer className="grid-1-1-1">
                    <LogInfoCard text={selectedOfert?.Cantidad_Ofertas} title={"Cantidad de ofertas"}/>
                    <LogInfoCard text={selectedOfert?.Tipo_Contrato} title={"Tipo de contrato"}/>
                    <LogInfoCard text={selectedOfert?.Nivel_Estudios} title={"Nivel de estudios"}/>
                </GridContainer>
                <GridContainer>
                    <LogInfoCard 
                        text={formatTextYearOrNo(selectedOfert?.Teletrabajo)} 
                        title={"¿Teletrabajo?"}/>
                    <LogInfoCard text={formatTextYearOrNo(selectedOfert?.Discapacidad)} title={"¿Para discapacitados?"}/>
                </GridContainer>
            </SectionWrapper>

            <SectionWrapper>
                <SectionTitle subTitle="Visualiza tu proximo lugar de trabajo" title="Ubicación de la Oferta"/>

                <GridContainer className="grid-05-15">
                    <WrapperContainer2 flexDirection="column" padding={0} justifyContent="center" alignItems="center" gap={40}>
                        <TextCard fontSize={14} textAlign="center">Encuentra la oferta ideal segun tu lugar de residencia o aspriación</TextCard>
                        <SubInfoCard 
                            titleSize={14} 
                            textSize={30} 
                            subTitle={"Municipio de la Oferta"} 
                            text={selectedOfert?.Municipios}
                            textAlign="center"
                        />
                        <SubInfoCard 
                            titleSize={14} 
                            textSize={30} 
                            subTitle={"Departamento de la Oferta"} 
                            text={selectedOfert?.Departamentos}
                            textAlign="center"
                        />
                        <SubInfoCard 
                            titleSize={14} 
                            textSize={30} 
                            subTitle={"Región de la Oferta"} 
                            text={selectedOfert?.Regiones}
                            textAlign="center"
                        />
                    </WrapperContainer2>
                    <MapContainer selectedDepartment={selectedOfert?.Departamentos}/>
                </GridContainer>
            </SectionWrapper>

            <SectionPrestador selectedOfert={selectedOfert}/>
            <SectionEmpleador selectedOfert={selectedOfert}/>
        </AuthWrapper>
    );
}

export { OfertScreen };