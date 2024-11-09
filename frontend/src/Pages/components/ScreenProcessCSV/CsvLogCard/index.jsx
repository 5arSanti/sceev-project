import { SubTitle } from "../../SubTitle";
import { TextCard } from "../../TextComponents";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { WrapperContainer2 } from "../../WrapperContainers";
import { ShowInfoWrapper } from "./ShowInfoWapper";
import { GridContainer } from "../../GridContainer";
import { LogInfoCard } from "../../LogInfoCard";

import { CiViewTable } from "react-icons/ci";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { BsDatabaseFillCheck } from "react-icons/bs";
import { BsDatabaseFillX } from "react-icons/bs";

const CsvLogCard = ({item={}}) => {

    if (!item) { return; }

    const incorrectRowsArray = item?.incorrectRows != "" ? item?.incorrectRows.split(",") : null;

    return(
        <WrapperContainer2 flexDirection="column" padding={0} gap={30}>
            <SubTitle fontSize={26} textAlign="center">
                Auditoría e información del ultimo <br /> archivo procesado
            </SubTitle>

                <GridContainer className="grid-125-075">
                    <LogInfoCard 
                        icon={null} 
                        title="Nombre del Archivo" 
                        text={`"${item?.nameFile}"`}
                    />
                    <LogInfoCard 
                        icon={<CiViewTable/>} 
                        title="Tabla seleccionada" 
                        text={`"${item?.table}"`}
                    />
                </GridContainer>

                <GridContainer className="grid-1-1-1">
                    <LogInfoCard 
                        icon={<IoMdCloseCircleOutline/>} 
                        title="Errores encontrados" 
                        text={item?.errors}
                    />
                    <LogInfoCard 
                        icon={<BsDatabaseFillCheck/>} 
                        title="Registros correctos" 
                        text={item?.correctRowsCount}
                    />
                    <LogInfoCard 
                        icon={<BsDatabaseFillX/>} 
                        title="Registros incorrectos" 
                        text={item?.incorrectRowsCount}
                    />
                </GridContainer>

                <GridContainer className="grid-1-1">
                    <LogInfoCard
                        title="Fecha de inicio" 
                        text={item?.startDate}
                    />
                    <LogInfoCard
                        title="Fecha de finalización" 
                        text={item?.endDate}
                    />
                </GridContainer>

                {/* <VerifyLength array={incorrectRowsArray}>
                    <WrapperContainer2 flexDirection="column" padding={0}>
                        <SubTitle>Registros incorrectos</SubTitle>
                        <ShowInfoWrapper>
                            <WrapperContainer2 flexDirection="column" padding={0} gap={0}>
                                    {incorrectRowsArray?.map((item, index) => (
                                        <TextCard key={index} fontSize={14}>Registro incorrecto en la fila {item}</TextCard>
                                    ))}
                            </WrapperContainer2>
                        </ShowInfoWrapper>
                    </WrapperContainer2>
                </VerifyLength> */}
        </WrapperContainer2>
    );
}

export { CsvLogCard };