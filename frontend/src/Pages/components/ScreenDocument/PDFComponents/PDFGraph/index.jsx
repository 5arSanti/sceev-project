import { Font, Image, StyleSheet, Text, View } from "@react-pdf/renderer";
import { PDFSubtitle } from "../PDFTextsComponents";
import { Montserrat, MontserratBold } from "../../../../../assets";

const PDFGraph = ({title, graph="", refText="Ofertas de empleo registradas, Unidad del SPE."}) => {
    return(
        <View wrap={false} style={styles.graphContainer}>
            <PDFSubtitle>{title}</PDFSubtitle>
            <Image
                style={styles.graphsImages}
                src={graph || ""}
            />
            <Text style={styles.refText}>
                Fuente: {refText}
            </Text>
        </View>
    );
}

Font.register({ family: 'Montserrat', fonts: [
    { src: Montserrat },
    { src: MontserratBold, fontWeight: 700 }
]});


const styles = StyleSheet.create({
    graphContainer: {
        width: "100%",
        paddingHorizontal: 50,
    },
    graphsImages: {
        width: "auto"
    },
    refText: {
        width: "100%",
        textAlign: "center",

        margin: 5,
        fontSize: 8,

        fontFamily: "Montserrat",
    },
});

export { PDFGraph };