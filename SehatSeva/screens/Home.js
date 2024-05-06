import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <Image
        style={[styles.maskGroupIcon, styles.homeItemPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.homeItem, styles.homeItemPosition]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-search.png")}
      />
      <Image
        style={styles.homeInner}
        contentFit="cover"
        source={require("../assets/group-108.png")}
      />
      <Text style={styles.hiWelcomeback}>Hi, WelcomeBack</Text>
      <Text style={[styles.johnDoe, styles.johnDoeTypo]}>John Doe</Text>
      <Image
        style={[styles.ellipseIcon, styles.homeChild1Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector-bell.png")}
      />
      <Image
        style={[styles.homeChild1, styles.homeChild1Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.homeChild2}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleLayout]} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.childPosition]} />
        <View style={styles.groupItem} />
      </View>
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <View style={[styles.heading, styles.headingLayout]}>
        <View style={[styles.headingChild, styles.headingLayout]} />
      </View>
      <Text style={[styles.requestConsultation, styles.johnDoeTypo]}>
        Request consultation
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeItemPosition: {
    left: 32,
    position: "absolute",
  },
  johnDoeTypo: {
    fontFamily: FontFamily.leagueSpartanRegular,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  homeChild1Layout: {
    height: 27,
    top: 51,
    width: 27,
    position: "absolute",
  },
  vectorIconPosition1: {
    height: 17,
    top: 56,
    position: "absolute",
  },
  rectangleLayout: {
    height: 77,
    width: 360,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  vectorIconPosition: {
    height: 21,
    top: 697,
    position: "absolute",
  },
  headingLayout: {
    width: 295,
    height: 77,
    position: "absolute",
  },
  homeChild: {
    top: 153,
    left: 14,
    borderRadius: 15,
    width: 333,
    height: 230,
    backgroundColor: Color.colorLightsteelblue,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 41,
    width: 41,
    height: 41,
  },
  homeItem: {
    top: 105,
    // make it as rounded corner
    borderRadius: 15,
    width: 298,
    height: 33,
    backgroundColor: Color.colorLightsteelblue,
  },
  vectorIcon: {
    top: 113,
    left: 43,
    width: 15,
    height: 18,
    position: "absolute",
  },
  homeInner: {
    top: 109,
    left: 297,
    height: 26,
    width: 27,
    position: "absolute",
  },
  hiWelcomeback: {
    top: 50,
    left: 83,
    fontSize: FontSize.size_xs,
    fontWeight: "300",
    fontFamily: FontFamily.leagueSpartanLight,
    color: Color.colorMediumslateblue,
    width: 88,
    height: 14,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    textTransform: "capitalize",
    position: "absolute",
  },
  johnDoe: {
    top: 65,
    left: 82,
    fontSize: 14,
    color: Color.colorBlack,
    width: 101,
    height: 20,
  },
  ellipseIcon: {
    left: 272,
  },
  vectorIcon1: {
    left: 279,
    width: 14,
  },
  homeChild1: {
    left: 303,
  },
  homeChild2: {
    top: 57,
    left: 288,
    width: 5,
    height: 5,
    position: "absolute",
  },
  vectorIcon2: {
    left: 308,
    width: 17,
  },
  rectangleView: {
    top: 709,
    left: 0,
    width: 360,
    backgroundColor: Color.colorWhite,
  },
  groupChild: {
    height: 77,
    width: 360,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 14,
    left: 11,
    borderRadius: 24,
    width: 337,
    height: 48,
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
  rectangleParent: {
    top: 673,
    left: 0,
    width: 360,
  },
  vectorIcon3: {
    left: 26,
    width: 23,
    height: 23,
    top: 697,
    position: "absolute",
  },
  vectorIcon4: {
    left: 122,
    width: 24,
  },
  vectorIcon5: {
    left: 219,
    width: 19,
  },
  vectorIcon6: {
    left: 311,
    width: 18,
  },
  headingChild: {
    borderRadius: 100,
    backgroundColor: Color.colorMediumslateblue,
    top: 0,
    left: 0,
  },
  heading: {
    top: 592,
    left: 30,
  },
  requestConsultation: {
    top: 614,
    left: 86,
    fontSize: FontSize.size_xl,
    color: Color.colorWhite,
    width: 232,
    height: 38,
  },
  home: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Home;
