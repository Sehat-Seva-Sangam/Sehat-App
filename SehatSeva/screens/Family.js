import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image, TouchableOpacity, Pressable } from "react-native";
import { FontFamily, Color, Border, FontSize } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Family = () => {
    const navigate = useNavigation();
  return (
    <View style={styles.family}>
      <Text style={[styles.family1, styles.family1Position]}>Family</Text>
      <Image
        style={[styles.vectorIcon, styles.family1Position]}
        contentFit="cover"
        // source={require("../assets/vector.png")}
      />
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.name, styles.nameTypo1]}>{`Name `}</Text>
          <Text style={[styles.father, styles.sonLayout]}>Father</Text>
          <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group-gojo.png")}
          />
        </View>
        <View style={[styles.groupContainer, styles.groupLayout1]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.info, styles.addTypo]}>Info</Text>
        </View>
      </View>
      <Pressable onTouchStart={() => navigate.navigate("AddFamily")}>
      <View style={[styles.familyChild, styles.groupInnerLayout]} />
        </Pressable>
      <Text style={[styles.add, styles.addTypo]}>Add</Text>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
        <Text style={[styles.son, styles.sonLayout]}>Son</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.info, styles.addTypo]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name2, styles.nameTypo]}>Name</Text>
        <Text style={[styles.mother, styles.name1Typo]}>Mother</Text>
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.info, styles.addTypo]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name3, styles.nameTypo]}>Name</Text>
        <Text style={[styles.daughter, styles.sonLayout]}>Daughter</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout1]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.info, styles.addTypo]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent6, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name3, styles.nameTypo]}>
          Name
        </Text>
        <Text style={[styles.daughter, styles.sonLayout]}>
          Relation
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupParent3, styles.groupLayout1]}>
          <View style={[styles.rectangleGroup, styles.groupLayout]}>
            <View style={[styles.groupItem, styles.groupLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector6.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Text style={[styles.info, styles.addTypo]}>Info</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  family1Position: {
    height: 32,
    top: 43,
    position: "absolute",
  },
  groupParentLayout: {
    height: 131,
    width: 300,
    position: "absolute",
  },
  groupPosition: {
    left: 0,
    top: 0,
  },
  nameTypo1: {
    height: 16,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 31,
    color: Color.colorMediumslateblue,
  },
  sonLayout: {
    height: 18,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    width: 148,
  },
  maskGroupPosition: {
    left: 11,
    position: "absolute",
  },
  groupLayout1: {
    height: 22,
    width: 162,
    left: 126,
    position: "absolute",
  },
  groupLayout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  groupInnerLayout: {
    width: 46,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_lg,
    height: 22,
    position: "absolute",
  },
  addTypo: {
    width: 32,
    color: Color.colorWhite,
    fontFamily: FontFamily.leagueSpartanRegular,
    height: 15,
    fontSize: FontSize.size_mini,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
    position: "absolute",
  },
  name1Typo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 127,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_base,
    height: 16,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 127,
    color: Color.colorMediumslateblue,
    position: "absolute",
  },
  family1: {
    left: 122,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    width: 121,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorMediumslateblue,
    textTransform: "capitalize",
    height: 14,
  },
  vectorIcon: {
    left: 30,
    width: 8,
  },
  groupChild: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorLightsteelblue_200,
    height: 131,
    width: 300,
    position: "absolute",
  },
  name: {
    width: 148,
    fontSize: FontSize.size_mini,
    height: 13,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 127,
    top: 31,
    position: "absolute",
  },
  father: {
    top: 63,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    left: 127,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  maskGroupIcon: {
    top: 12,
    width: 107,
    height: 108,
  },
  rectangleParent: {
    height: 131,
    width: 300,
    position: "absolute",
  },
  groupItem: {
    borderRadius: Border.br_smi,
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon1: {
    top: 5,
    left: 5,
    width: 10,
    height: 11,
    position: "absolute",
  },
  rectangleGroup: {
    top: 1,
    left: 141,
  },
  groupInner: {
    left: 0,
    top: 0,
  },
  info: {
    top: 1,
    left: 7,
  },
  groupContainer: {
    top: 91,
  },
  groupParent: {
    top: 86,
    left: 29,
    width: 300,
  },
  familyChild: {
    left: 279,
    top: 45,
    width: 46,
    backgroundColor: Color.colorMediumslateblue,
    borderRadius: Border.br_lg,
  },
  add: {
    top: 46,
    left: 286,
  },
  name1: {
    width: 129,
    height: 16,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 31,
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_sm,
  },
  son: {
    top: 59,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    left: 127,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupView: {
    top: 88,
  },
  rectangleContainer: {
    top: 232,
    left: 29,
    width: 300,
  },
  name2: {
    top: 33,
    width: 170,
  },
  mother: {
    top: 52,
    height: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    width: 148,
  },
  maskGroupIcon2: {
    top: 14,
    width: 102,
    height: 103,
  },
  rectangleParent2: {
    top: 377,
    left: 29,
    width: 300,
  },
  name3: {
    top: 29,
    width: 140,
  },
  daughter: {
    top: 60,
    fontSize: FontSize.size_smi,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    left: 127,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleParent4: {
    top: 520,
    left: 29,
    width: 300,
  },
  groupParent3: {
    top: 89,
  },
  rectangleParent6: {
    top: 666,
    left: 29,
    width: 300,
  },
  family: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Family;
