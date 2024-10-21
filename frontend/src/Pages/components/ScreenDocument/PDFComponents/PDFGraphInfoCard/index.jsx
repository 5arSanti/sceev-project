import { graphLabels } from "../../../../../utils/chartTypes";
import { months } from "../../../../../utils/dateFunctions";
import { PDFGraph } from "../PDFGraph";
import { PDFText, PDFThirdtitle } from "../PDFTextsComponents";
import { PDFWrapper } from "../PDFWrapper";

const PDFGraphInfo = ({item={}, index=0, graphs}) => {
    return(
        <PDFWrapper key={index}>
            <PDFThirdtitle>{graphLabels[item.TIPO_DATOS].name}</PDFThirdtitle>

            <PDFText>
                {item.DESCRIPCION}
            </PDFText>

            
            <PDFGraph
                title={`${item.TITULO_GRAFICA} - ${months[item.MES]} del ${item.AÑO}`}
                graph={graphs[index]}
            />
        </PDFWrapper>
    );
}

export { PDFGraphInfo };