import { StyleSheet, View } from "@react-pdf/renderer";

const PDFWrapper = ({children, justifyContent="center", wrap=true}) => {
    return(
        <View styles={{
            ...styles.wrapper, 
            justifyContent: justifyContent
        }}
            wrap={wrap}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: "100%",

        display: "flex",
        flexDirection: "column",
        gap: 0,
    },
});

export { PDFWrapper };