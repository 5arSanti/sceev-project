import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Montserrat, MontserratBold } from '../../../../assets';
import { PDFHeader } from '../PDFComponents/PDFHeader';
import { PDFFooter } from '../PDFComponents/PDFFooter';
import { pdfColors } from '../../../../utils/PDFColors';
import { PDFText, PDFThirdtitle, PDFTitle } from '../PDFComponents/PDFTextsComponents';
import { PDFGraph } from '../PDFComponents/PDFGraph';
import { PDFWrapper } from '../PDFComponents/PDFWrapper';
import { actualMonth, actualYear, months } from '../../../../utils/dateFunctions';
import { graphLabels } from '../../../../utils/chartTypes';
import { PDFGlosary } from '../PDFComponents/PDFGlosary';
import { PDFGraphInfo } from '../PDFComponents/PDFGraphInfoCard';

const MyExportPDFDocument = ({graphs=[], array=[], year=actualYear, month=actualMonth}) => {

    return(
        <Document>
            <Page size="A4" style={styles.body}>
                <PDFHeader month={month} year={year}/>

                <PDFWrapper>
                    <PDFTitle>Oferta laboral {months[month]} del {year}</PDFTitle>

                    <PDFText>
                        Este boletín describe el comportamiento de los buscadores de empleo del país para 
                        el mes de {months[month]} del año {year}. El documento se divide en la descripción de los 
                        buscadores de empleo registrados en el mes de referencia, y se presentan por las 
                        23 principales ciudades, áreas del conocimiento, nivel educativo y nivel de 
                        experiencia. La fuente de los datos de este boletín proviene de la base de datos de 
                        los buscadores de empleo registrados en el Sistema de Información del Servicio 
                        de Empleo SISE.
                    </PDFText>
                </PDFWrapper>

                {array?.map((item, index) => (
                    <PDFGraphInfo key={index} item={item} index={index} graphs={graphs}/>
                ))}

                <PDFGlosary/>

                <PDFFooter/>
            </Page>
        </Document> 
    );
}

Font.register({ family: 'Montserrat', fonts: [
    { src: Montserrat },
    { src: MontserratBold, fontWeight: 700 }
]});


const styles = StyleSheet.create({
    body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        position: "relative",

        paddingTop: 100,
        paddingHorizontal: 90, 
        paddingBottom: 110,

        fontFamily: "Montserrat"
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 10,
    },
    borderLeft: {
        borderLeft: 1,
        borderLeftColor: pdfColors.yellow,
        borderLeftWidth: 1,
        paddingLeft: 10
    },
    textEnd: {
        width: 150,
        textAlign: "right",
    }

});

export { MyExportPDFDocument };