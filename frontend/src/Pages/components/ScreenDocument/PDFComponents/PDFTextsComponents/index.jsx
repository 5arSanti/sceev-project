import { StyleSheet, Text } from "@react-pdf/renderer";

const PDFTitle = ({children}) => {
    return(
        <Text style={styles.title}>
            {children}
        </Text>
    );
}

const PDFSubtitle = ({children}) => {
    return(
        <Text style={styles.subTitle}>
            {children}
        </Text>
    );
}
const PDFThirdtitle = ({children}) => {
    return(
        <Text style={styles.thirdTitle}>
            {children}
        </Text>
    );
}

const PDFHeaderText = ({children}) => {
    return(
        <Text style={styles.headerText}>
            {children}
        </Text>
    );
}

const PDFText = ({children, bold=false, fontSize=10, maxWidth="auto", textAlign="start"}) => {
    return(
        <Text style={{
            ...styles.text,
            fontWeight: bold ? "bold" : "normal",
            fontSize: fontSize,
            maxWidth: maxWidth,
            textAlign: textAlign
        }}>
            {children}
        </Text>
    );
}


const styles = StyleSheet.create({
    title: {
        width: "100%",
        textAlign: "center",
        fontSize: 13,
        fontWeight: "bold",
        margin: 10,
    },
    subTitle: {
        width: "100%",
        margin: 10,

        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
    },
    thirdTitle: {
        width: "100%",
        marginVertical: 10,

        textAlign: "left",
        fontSize: 10,
        fontWeight: "bold",
    },
    headerText: {
        textAlign: "start",
        fontSize: 18,
        fontWeight: "bold",
    },
    text: {
        textAlign: 'justify',

        marginBottom: 10
    },
});

export { PDFTitle, PDFSubtitle, PDFThirdtitle, PDFText, PDFHeaderText };