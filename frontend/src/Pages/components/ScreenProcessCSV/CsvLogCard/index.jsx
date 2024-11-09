import { SubTitle } from "../../SubTitle";
import { SpanCard, TextCard } from "../../TextComponents";
import { VerifyLength } from "../../VerifyLengthWrapper";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { ShowInfoWrapper } from "./ShowInfoWapper";
import { GridContainer } from "../../GridContainer";

const CsvLogCard = ({item={}}) => {

    if (!item) { return; }

    const incorrectRowsArray = item?.incorrectRows != "" ? item?.incorrectRows.split(",") : null;

    return(
        <WrapperContainer1 flexDirection="column" padding={30} gap={30}>
            <GridContainer className="grid-1-1">
                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Información de los usuarios cargados</SubTitle>
                    <TextCard><SpanCard>Numero total de usuarios: </SpanCard>{item?.totalRows}</TextCard>
                    <TextCard><SpanCard>Usuarios registrados en BD: </SpanCard>{item?.usersInfo?.notFound?.length}</TextCard>
                    <TextCard><SpanCard>Usuarios encontrados en BD: </SpanCard>{item?.usersInfo?.found?.length}</TextCard>
                </WrapperContainer2>

                <VerifyLength array={item?.usersInfo?.found}>
                    <WrapperContainer2 flexDirection="column" padding={0}>
                        <SubTitle>Usuarios ya registrados</SubTitle>
                        <ShowInfoWrapper>
                            <WrapperContainer2 flexDirection="column" padding={0} gap={2}>
                                    {item?.usersInfo?.found?.map((item, index) => (
                                        <TextCard key={index} fontSize={12}>
                                            - (Fila #{item?.index}) El usuario con cedula {item?.userId} ya se encuentra en la base de Datos.
                                        </TextCard>
                                    ))}
                            </WrapperContainer2>
                        </ShowInfoWrapper>
                    </WrapperContainer2>
                </VerifyLength>
            </GridContainer>

            <GridContainer className="grid-1-1" padding={0}>
                <WrapperContainer2 flexDirection="column" padding={0}>
                    <SubTitle>Información del archivo procesado</SubTitle>
                
                    <TextCard><SpanCard>Nombre del Archivo: </SpanCard>{item?.nameFile}</TextCard>
                    <TextCard><SpanCard>Numero total de registros correctos: </SpanCard>{item?.correctRowsCount}</TextCard>
                    <TextCard><SpanCard>Numero total de registros incorrectos: </SpanCard>{item?.incorrectRowsCount}</TextCard>
                    <TextCard><SpanCard>Errores encontrados: </SpanCard>{item?.errors}</TextCard>
                    <TextCard><SpanCard>Fecha de inicio: </SpanCard>{item?.startDate}</TextCard>
                    <TextCard><SpanCard>Fecha de finalización: </SpanCard>{item?.endDate}</TextCard>
                </WrapperContainer2>

                <VerifyLength array={incorrectRowsArray}>
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
                </VerifyLength>

            </GridContainer>
        </WrapperContainer1>
    );
}

export { CsvLogCard };