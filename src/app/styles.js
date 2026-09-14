import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scrollContainer: {
        gap: 16,
        paddingBottom: 16,
    },
    videoCard: {
        paddingBottom: 30,
    },
    thumbnail: {
        width: 300,
        height: 300,
    },

    categoryButton: {
        backgroundColor: "lightgray",
        padding: 10,
    },
    categoryText: {
        fontSize: 16,
    },

    videoTitle: {
        fontSize: 20,
    },

    upperBar: {
        height: 80,
        backgroundColor: "#e12222",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        gap: 20,
    },
    bottomBar: {
        height: 80,
        backgroundColor: "#e12222",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    logo: {
        height: 30,
        width: 30,
    },
    icon: {
        height: 30,
        width: 30,
    },
    appTitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    },
    searchBox: {
        backgroundColor: "white"
    },
    menuButton: {
        backgroundColor: "transparent",
        padding: 10,
    },
    menuText: {
        fontSize: 16,
        color: "white",
        fontWeight: "bold",
    }
})