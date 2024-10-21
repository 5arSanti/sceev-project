import React from "react";

import { PDFViewer } from "@react-pdf/renderer";
import { ButtonCard } from "../../ButtonCard";
import { WrapperContainer2 } from "../../WrapperContainers";
import { MyExportPDFDocument } from "../MyExportPDFDocument";

const DocumentPreview = ({array, graphImages, year, month}) => {
    const [documentPreview, setDocumentPreview] = React.useState(false);

    return(
        <WrapperContainer2 padding={0} flexDirection="column">
            <ButtonCard 
                title="Visualizar vista previa del boletín"
                onClick={() => setDocumentPreview(!documentPreview)}
            >
                {documentPreview ? "Cerrar vista previa" : "Vista previa del boletín"}
            </ButtonCard>

            {documentPreview &&
                <PDFViewer style={{width: "100%", height: "100%", minHeight: 500}}>
                    <MyExportPDFDocument array={array} graphs={graphImages || []} year={year} month={month}/>
                </PDFViewer>
            }
        </WrapperContainer2>
    );
}

export { DocumentPreview }