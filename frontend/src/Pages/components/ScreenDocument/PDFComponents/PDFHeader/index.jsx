import { Image, StyleSheet, View } from "@react-pdf/renderer";
import { iconComplete, logoCoPotencia } from "../../../../../assets";
import { PDFHeaderText, PDFText, PDFTitle } from "../PDFTextsComponents";
import { months } from "../../../../../utils/dateFunctions";

const PDFHeader = ({month, year}) => {
    return(
        <>
            <Image 
                src={iconComplete}
                style={{...styles.headerImage}}
                fixed
            />
            <View style={styles.headerInfoContainer}>
                <PDFHeaderText>
                    Boletín técnico
                </PDFHeaderText>

                <View >
                    <PDFHeaderText>
                        Bogotá D.C.
                    </PDFHeaderText>
                    <PDFText>{months[month]} de {year}</PDFText>
                </View>
            </View>
        </>

    );
}

const styles = StyleSheet.create({
    headerContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10
    },
    headerInfoContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",

        paddingBottom: 10,
        borderBottom: "1 solid #000"
    },
    headerImage: {
        position: "absolute",
        top: 50,
        left: 90,
        objectFit: "contain",
        width: 100
    },

});

export { PDFHeader }