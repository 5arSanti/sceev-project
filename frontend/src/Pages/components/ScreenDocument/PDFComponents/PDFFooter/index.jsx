import { Font, Link, StyleSheet, Text, View } from "@react-pdf/renderer";
import { pdfColors } from "../../../../../utils/PDFColors";
import { Montserrat, MontserratBold, facebookIcon, instagramIcon, linkedinIcon, xIcon, youtubeIcon } from "../../../../../assets";
import { PDFFooterIconCard } from "./PDFFooterIconCard";

const PDFFooter = () => {
    return(
        <>
            <Text
                style={{...styles.footerText, position: "absolute", bottom: 60, left: 90}}
                render={({pageNumber}) => `${pageNumber}`}
                fixed
            />
            <View style={styles.footer} fixed>
                <View style={styles.flexRow}>
                    <View style={styles.flexRow}>
                        <PDFFooterIconCard text={"@servicoempleocol"} icons={[instagramIcon]}/>
                        <PDFFooterIconCard text={"@SPEColombia"} icons={[facebookIcon]}/>
                        <PDFFooterIconCard text={"Servicio Público de Empleo (SPE)"} icons={[linkedinIcon]}/>
                    </View>

                    <View style={{...styles.footerTextContainer, ...styles.borderRightLeft}}>
                        <Text style={{...styles.footerText, fontWeight: "bold"}}>
                            UNIDAD ADMINISTRATIVA DEL SERVICIO PÚBLICO DE EMPLEO
                        </Text>
                        <Text style={{...styles.footerText}}>
                            Carrera 7 No. 31-10, Pisos 13 y 14, Bogotá D.C.
                        </Text>
                        <Link style={{...styles.footerText, color: pdfColors.red, fontWeight: "bold"}} src='https://www.serviciodeempleo.gov.co'>
                            www.serviciodeempleo.gov.co
                        </Link>
                    </View>

                    <View style={styles.flexRow}>
                        <PDFFooterIconCard text={"@ServiciodEmpleo"} icons={[xIcon, youtubeIcon]}/>
                    </View>
                </View>
            </View>
        </>
    );
}

Font.register({ family: 'Montserrat', fonts: [
    { src: Montserrat },
    { src: MontserratBold, fontWeight: 700 }
]});

const gapValue = 20;

const styles = StyleSheet.create({
    footer: {
        position: "absolute",
        bottom: 30,
        right: 30,

        display: "flex",
        justifyContent: "center",
    },
    footerTextContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 0,
        justifyContent: "center",
        alignItems: "center",
        maxWidth: 175
    },
    footerText: {
        fontSize: 7,
        maxWidth: 230,
        textAlign: "center",
        
        color: pdfColors.black,
        textDecoration: "none",
    },

    flexRow: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: 3,
        padding: "0 10 0 10"
    },
    borderRightLeft: {
        padding: `0 ${gapValue} 0 ${gapValue}`,
        borderLeft: `1px solid ${pdfColors.black}`,
        borderRight: `1px solid ${pdfColors.black}`,
    },

});

export { PDFFooter };