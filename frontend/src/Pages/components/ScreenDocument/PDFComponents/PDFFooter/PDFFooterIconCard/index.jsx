import { Image, StyleSheet, View } from "@react-pdf/renderer";

import { PDFText } from "../../PDFTextsComponents";

const PDFFooterIconCard = ({text, icons=[]}) => {
    return(
        <View style={styles.footerIconContainer}>
            <View style={styles.iconsContainer}>
                {icons?.map((item, index) => (
                    <Image
                        key={index}
                        src={item}
                        style={styles.iconImage}
                    />
                ))}
            </View>

            <PDFText textAlign="center" maxWidth={35} fontSize={5} bold={true}>{text}</PDFText>
        </View>
    );
}

const styles = StyleSheet.create({
    footerIconContainer: {
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 3,
    },
    iconsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    iconImage: {
        objectFit: "contain",
        width: 15,
    }
})

export { PDFFooterIconCard };