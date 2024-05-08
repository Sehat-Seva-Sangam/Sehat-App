import * as React from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FontFamily, Color, FontSize, Border } from "./GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SelectFamily = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.selectFamily}>
      <Text style={[styles.family, styles.familyPosition]}>Family</Text>
      
      <View style={[styles.groupParent, styles.groupParentLayout1]}>
        <View style={[styles.rectangleParent, styles.groupPosition]}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <Text style={[styles.you, styles.youTypo]}>You</Text>
          <Text style={[styles.father, styles.sonTypo]}>Father</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Schedule')}>
        <Image
            style={[styles.maskGroupIcon, styles.maskGroupPosition]}
            contentFit="cover"
            source={require("../assets/mask-group-gojo.png")}
        />
        </TouchableOpacity>
        </View>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupItem, styles.groupParentLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.info, styles.infoPosition]}>Info</Text>
        </View>
        
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name, styles.nameTypo1]}>Name</Text>
        <Text style={[styles.son, styles.sonTypo]}>Son</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupItem, styles.groupParentLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.info, styles.infoPosition]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name1, styles.nameTypo]}>Name</Text>
        <Text style={[styles.mother, styles.nameTypo1]}>Mother</Text>
        <Image
          style={[styles.maskGroupIcon2, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupItem, styles.groupParentLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.info, styles.infoPosition]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent4, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name2, styles.nameTypo]}>Name</Text>
        <Text style={[styles.daughter, styles.sonTypo]}>Daughter</Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
            <View style={[styles.groupItem, styles.groupParentLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.info, styles.infoPosition]}>Info</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent6, styles.groupParentLayout1]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.name2, styles.nameTypo]}>
          Name
        </Text>
        <Text style={[styles.daughter, styles.sonTypo]}>
          In Law
        </Text>
        <Image
          style={[styles.maskGroupIcon, styles.maskGroupPosition]}
          contentFit="cover"
          source={require("../assets/mask-group-gojo.png")}
        />
        <View style={[styles.groupParent3, styles.groupLayout]}>
          <View style={[styles.rectangleParent7, styles.groupParentLayout]}>
            <View style={[styles.groupItem, styles.groupParentLayout]} />
            <Image
              style={styles.vectorIcon1}
              contentFit="cover"
              source={require("../assets/vector17.png")}
            />
          </View>
          
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.info, styles.infoPosition]}>Info</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  familyPosition: {
    height: 40,
    top: 24,
    position: "absolute",
  },
  groupParentLayout1: {
    height: 131,
    width: 300,
    position: "absolute",
  },
  groupPosition: {
    top: 0,
    left: 0,
  },
  youTypo: {
    height: 16,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 31,
    color: Color.colorMediumslateblue,
  },
  sonTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    height: 18,
    width: 148,
  },
  maskGroupPosition: {
    left: 11,
    position: "absolute",
  },
  groupLayout: {
    height: 22,
    position: "absolute",
  },
  groupParentLayout: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  infoPosition: {
    top: 1,
    position: "absolute",
  },
  nameTypo1: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    left: 127,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_base,
    height: 18,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    left: 127,
    color: Color.colorMediumslateblue,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 0,
    position: "absolute",
  },
  family: {
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
    top: 19,
  },
  vectorIcon: {
    left: 30,
    width: 8,
    height: 14,
    top: 19,
  },
  groupChild: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorLightsteelblue_200,
    left: 0,
    height: 131,
    width: 300,
    position: "absolute",
  },
  you: {
    width: 148,
    height: 14,
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    left: 127,
    top: 31,
    position: "absolute",
  },
  father: {
    top: 65,
    height: 12,
    fontSize: FontSize.size_smi,
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
    left: 0,
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
    width: 10,
    height: 11,
    left: 5,
    position: "absolute",
  },
  rectangleGroup: {
    left: 141,
    top: 1,
    width: 21,
  },
  groupInner: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorMediumslateblue,
    width: 46,
    left: 0,
    top: 0,
  },
  info: {
    left: 7,
    fontFamily: FontFamily.leagueSpartanRegular,
    color: Color.colorWhite,
    width: 32,
    height: 15,
    fontSize: FontSize.size_mini,
    top: 6,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    textTransform: "capitalize",
  },
  groupContainer: {
    top: 91,
    width: 162,
    height: 22,
    left: 126,
  },
  checkRoundFillIcon: {
    left: 270,
    width: 24,
    height: 24,
    top: 7,
    position: "absolute",
  },
  groupParent: {
    top: 60,
    left: 29,
    width: 300,
  },
  name: {
    width: 129,
    height: 18,
    fontFamily: FontFamily.leagueSpartanMedium,
    fontWeight: "500",
    top: 31,
    color: Color.colorMediumslateblue,
    fontSize: FontSize.size_sm,
  },
  son: {
    top: 59,
    fontSize: FontSize.size_xs,
    height: 12,
    textAlign: "left",
    left: 127,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupView: {
    top: 88,
    width: 162,
    height: 22,
    left: 126,
  },
  rectangleContainer: {
    top: 206,
    left: 29,
    width: 300,
  },
  name1: {
    top: 33,
    width: 170,
  },
  mother: {
    top: 52,
    height: 18,
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
    top: 351,
    left: 29,
    width: 300,
  },
  name2: {
    top: 29,
    width: 140,
  },
  daughter: {
    top: 55,
    height: 12,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textAlign: "left",
    left: 127,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  rectangleParent4: {
    top: 494,
    left: 29,
    width: 300,
  },
  rectangleParent7: {
    left: 56,
    top: 1,
    width: 21,
  },
  vector158Stroke: {
    width: 11,
    height: 10,
    left: 5,
  },
  rectangleParent8: {
    left: 124,
    top: 1,
    width: 21,
  },
  vectorIcon6: {
    left: 8,
    width: 5,
    height: 9,
  },
  rectangleParent9: {
    left: 101,
    top: 1,
    width: 21,
  },
  vectorIcon7: {
    top: 9,
    left: 10,
    height: 6,
  },
  rectangleParent10: {
    left: 79,
    top: 1,
    width: 21,
  },
  vectorIcon8: {
    left: 89,
    height: 1,
    top: 7,
  },
  groupParent3: {
    top: 89,
    width: 145,
    left: 126,
    height: 22,
  },
  rectangleParent6: {
    top: 640,
    left: 29,
    width: 300,
  },
  selectFamilyChild: {
    top: 685,
    width: 360,
    height: 77,
    left: 0,
    position: "absolute",
  },
  selectFamily: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default SelectFamily;
