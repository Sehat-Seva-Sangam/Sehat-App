import * as React from "react";
import { useState } from "react";
import { Image, TextInput } from "react-native";
import { StyleSheet, View, Text, Button, ScrollView} from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";

const Message = () => {

    const [messages, setMessages] = useState([

        { id: 1, text: "Hi there!", sender: "bot" },
        { id: 2, text: "Hello! How can I help you?", sender: "user" },
        ]);

    const sendMessage = (message) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: prevMessages.length + 1, text: message, sender: "user" },
        ]);
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { id: prevMessages.length + 1, text: "This is a sample bot response.", sender: "bot" },
            ]);
        }, 1000);
    };

  return (
    <View style={styles.message}>
      
      <View style={[styles.messageChild, styles.messagePosition]} />
      <View style={[styles.messageItem, styles.messagePosition]} />
      <Image
        style={[styles.messageInner, styles.messageInnerPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-15.png")}
      />
      <Image
        style={styles.vectorIcon1}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={styles.chatbot}>ChatBot</Text>
      <Text style={[styles.botIsTyping, styles.writeHereTypo]}>
        Bot is typing...
      </Text>
      <View style={[styles.rectangleView, styles.messageInnerPosition]} />
      <Image
        style={styles.vectorIcon2}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Text style={[styles.text, styles.textTypo]}>user</Text>
    
      <TextInput
        style={[styles.writeHere, styles.writeHereTypo]}
        placeholder="Write Here..."
        onSubmitEditing={({ nativeEvent }) => {
            sendMessage(nativeEvent.text);
            console.log(nativeEvent.text);
        }}
        />
      <Text style={[styles.loremIpsumDolor, styles.loremTypo1]}>
        hello, can you help me with my order?
      </Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={styles.groupItem} />
      </View>
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector3-high.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector4-high.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    width: 19,
    height: 21,
  },
  messagePosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  messageInnerPosition: {
    height: 37,
    top: 610,
    position: "absolute",
  },
  writeHereTypo: {
    textAlign: "left",
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  messageChildLayout: {
    height: 80,
    width: 202,
  },
  textTypo: {
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    height: 14,
  },
  textChildPosition: {
    left: 39,
    position: "absolute",
  },
  loremTypo1: {
    height: 60,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    textTransform: "lowercase",
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  loremTypo: {
    left: 61,
    height: 60,
    width: 155,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    textTransform: "lowercase",
    lineHeight: 12,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  groupChildLayout: {
    height: 77,
    width: 360,
    left: 0,
    position: "absolute",
  },
  vectorIconPosition: {
    top: 705,
    position: "absolute",
  },
  vectorIcon: {
    top: 697,
    left: 216,
    display: "none",
    height: 21,
    position: "absolute",
  },
  messageChild: {
    top: -22,
    height: 78,
    backgroundColor: Color.colorMediumslateblue,
  },
  messageItem: {
    top: 593,
    backgroundColor: Color.colorLightsteelblue,
    height: 72,
  },
  messageInner: {
    left: 312,
    width: 36,
  },
  vectorIcon1: {
    left: 30,
    width: 8,
    height: 14,
    top: 30,
    position: "absolute",
  },
  chatbot: {
    left: 47,
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.leagueSpartanSemiBold,
    color: Color.colorWhite,
    textAlign: "center",
    justifyContent: "center",
    width: 80,
    height: 25,
    alignItems: "center",
    display: "flex",
    top: 25,
    position: "absolute",
  },
  botIsTyping: {
    top: 569,
    left: 31,
    color: Color.colorMediumslateblue,
    width: 106,
    height: 15,
  },
  rectangleIcon: {
    top: 298,
    left: 128,
    height: 80,
    position: "absolute",
  },
  messageChild1: {
    top: 482,
    height: 56,
    width: 202,
    left: 128,
    position: "absolute",
  },
  rectangleView: {
    left: 10,
    borderRadius: 31,
    width: 296,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon2: {
    top: 620,
    left: 323,
    width: 17,
    height: 17,
    position: "absolute",
  },
  vectorIcon3: {
    top: 618,
    left: 283,
    width: 13,
    height: 21,
    position: "absolute",
  },
  text: {
    top: 177,
    textAlign: "right",
    left: 291,
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    position: "absolute",
  },
  text1: {
    top: 382,
    textAlign: "right",
    left: 291,
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    position: "absolute",
  },
  text2: {
    top: 542,
    textAlign: "right",
    left: 291,
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    position: "absolute",
  },
  text3: {
    top: 279,
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    height: 14,
    left: 39,
    textAlign: "left",
  },
  text4: {
    top: 475,
    width: 39,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.leagueSpartanLight,
    fontWeight: "300",
    textTransform: "capitalize",
    fontSize: FontSize.size_xs,
    alignItems: "center",
    display: "flex",
    height: 14,
    left: 39,
    textAlign: "left",
  },
  messageChild2: {
    top: 93,
    left: 128,
    height: 80,
    position: "absolute",
  },
  messageChild3: {
    top: 193,
    height: 80,
    width: 202,
  },
  messageChild4: {
    top: 389,
    height: 80,
    width: 202,
  },
  writeHere: {
    top: 620,
    left: 19,
    color: "#a9bcfe",
    width: 76,
    height: 16,
  },
  loremIpsumDolor: {
    top: 112,
    width: 155,
    left: 144,
    height: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    textTransform: "lowercase",
    lineHeight: 12,
  },
  loremIpsumDolor1: {
    top: 317,
    width: 155,
    left: 144,
    height: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    textTransform: "lowercase",
    lineHeight: 12,
  },
  loremIpsumDolor2: {
    top: 493,
    left: 143,
    width: 179,
    height: 41,
    color: Color.colorBlack,
    fontFamily: FontFamily.leagueSpartanExtraLight,
    fontWeight: "200",
    textTransform: "lowercase",
    lineHeight: 12,
  },
  loremIpsumDolor3: {
    top: 212,
  },
  loremIpsumDolor4: {
    top: 408,
  },
  groupChild: {
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupItem: {
    top: 14,
    left: 11,
    borderRadius: Border.br_5xl,
    width: 337,
    height: 48,
    backgroundColor: Color.colorMediumslateblue,
    position: "absolute",
  },
  rectangleParent: {
    top: 679,
  },
  vectorIcon4: {
    left: 26,
    width: 23,
    height: 23,
  },
  vectorIcon5: {
    left: 122,
    width: 24,
    height: 21,
  },
  vectorIcon6: {
    left: 219,
    height: 21,
    width: 19,
  },
  vectorIcon7: {
    left: 311,
    width: 18,
    height: 21,
  },
  message: {
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Message;
