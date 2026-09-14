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

    bars: {
        height: 80,
        backgroundColor: "#e12222",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
    },
    menuButton: {
        backgroundColor: "transparent",
        padding: 10,
    },
    menuText: {
        fontSize: 20,
        color: "white",
        fontWeight: "bold",
    }
})