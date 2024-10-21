import React from "react";
import { AppContext } from "../../../../Context";
import { getMonthsUntilCurrent, months } from "../../../../utils/dateFunctions";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { SubTitle } from "../../SubTitle";
import { MyExportPDFDocument } from "../MyExportPDFDocument";
import { ButtonCard } from "../../ButtonCard";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { YearAndMonthFilterCard } from "../../YearAndMonthFilterCard";
import { DocumentPreview } from "../DocumentPreview";


const DocumentPDFFiltersViewer = ({array, graphImages}) => {
    const context = React.useContext(AppContext);

    const year = context.filters?.year;
    const month = context.filters?.month;

    return(
        <AllInfoGridContainer className="grid-125-075">
            <WrapperContainer1
                flexDirection="column"
                padding={40}
                justifyContent="center"
            >
                <SubTitle>Crear boletín</SubTitle>

                <YearAndMonthFilterCard
                    state={context.filters}
                    setState={context.setFilters}
                    id={"export"}
                />

                <PDFDownloadLink document={<MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>} fileName={`Boletin Oferta Laboral ${months[month]} ${year}`}>
                    {({loading}) => ((loading) ? 
                        <ButtonCard onClick={() => {
                            handleNotifications("info", "El documento esta siendo Procesado")
                        }}>Cargando boletín</ButtonCard>
                        : 
                        <ButtonCard onClick={() => {
                            handleNotifications("success", "Documento descargado correctamente")
                        }}>Descargar boletín</ButtonCard>
                    )}
                </PDFDownloadLink>

            </WrapperContainer1>
            
            <DocumentPreview
                array={array}
                graphImages={graphImages}
                year={year}
                month={month}
            />
        </AllInfoGridContainer>
    );
}

export { DocumentPDFFiltersViewer };