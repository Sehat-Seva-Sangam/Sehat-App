import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "react-native";

const FirstScreen = () => {
    return (
        <View style={styles.firstScreen}>
            <Text style={[styles.sehat, styles.sevaTypo]}>sehat</Text>
            <Text style={[styles.seva, styles.sevaTypo]}>Seva</Text>
            <Text style={[styles.sangam, styles.sevaTypo]}>Sangam</Text>
            <Image
                style={styles.firstScreenChild}
                contentFit="cover"
                source={require("../assets/group-91.png")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sevaTypo: {
        height: 36,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        color: "#ffffff",
        fontWeight: "100",
        fontSize: 30,
        position: "absolute",
    },
    sehat: {
        top: 458,
        left: 114,
        textTransform: "capitalize",
        width: 142,
    },
    seva: {
        top: 502,
        left: 102,
        width: 153,
    },
    sangam: {
        top: 543,
        left: 136,
        width: 191,
    },
    firstScreenChild: {
        top: 309,
        left: 120,
        width: 130,
        height: 130,
        position: "absolute",
    },
    firstScreen: {
        borderRadius: 30,
        backgroundColor: "#2260ff",
        flex: 1,
        width: "100%",
        height: 800,
        overflow: "hidden",
    },
});

export default FirstScreen;
