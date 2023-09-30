import { StyleSheet } from "react-native";

export const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00CCF9"
    },
    boxFlex3: {
        flex: 3,
    },
    boxFlex1: {
        flex: 1,
    },
    imageEclipse: {
        width: "140px",
        height: "140px",
    },
    boxContainerImage: {
        justifyContent: "center",
        alignItems: "center"
    },
    boxCenterText: {
        fontSize: "25px",
        fontWeight: "bold",
        textAlign: "center",
        width: "70%",
    },
    boxCenter: {
        alignItems: "center"
    },
    boxFooter:{
        alignContent: "center",
        justifyContent: "center",
        width: "95%",
        marginHorizontal: "auto"
    },
    boxTextFooter:{
        marginBottom: "30px"
    },
    textFooter:{
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "15px"
    },
    boxControlFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%"
    },
    btnControlFooter: {
        paddingVertical: "6px",
        paddingHorizontal: "20px",
        fontSize: "20px",
        backgroundColor: "#E3C000",
        fontWeight: "500",
        marginHorizontal: "6px"
    },
    
})