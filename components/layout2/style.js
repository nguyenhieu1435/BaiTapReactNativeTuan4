import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {
        flex: 1,
    },
    flex4: {
        flex: 4,
    },
    flex6: {
        flex: 6,
    },
    boxContainImg:{ 
        alignItems: "center",
        justifyContent: "center"
    },
    imageEclipse: {
        width: "142px",
        height: "142px",
    },
    boxContainContent: {
        alignItems: "center",
        width: "85%",
        marginHorizontal: "auto"
    },
    middleMainText: {
        width: "80%",
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "700",
        marginBottom: "40px"
    },
    middleDescText: {
        textAlign: "center",
        fontSize: "15px",
        fontWeight: 700,
        marginBottom: "50px"
    },
    boxBtnControl:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",

    },
    btnText: {
        textAlign: "center",
        backgroundColor: "#e3c000",
        width: "125px",
        paddingVertical: "8px",
        fontWeight: 700,
        fontSize: "18px",
    },
    footerText:{
        marginTop: "20px",
        fontSize: "18px",
        fontWeight: 700
    }
})