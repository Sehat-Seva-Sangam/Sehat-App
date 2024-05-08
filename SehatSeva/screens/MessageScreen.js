import React, { useState, useRef } from "react";
import { Image, TextInput, StyleSheet, View, Text, FlatList, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Border } from "./GlobalStyles";

const MessageScreen = () => {
  // State to hold messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi there!", sender: "user" },
    { id: 2, text: "Hello! How can I help you?", sender: "bot" },
  ]);

  // State to hold the current input
  const [input, setInput] = useState('');

  // Reference to the FlatList
  const flatListRef = useRef();

  // Function to handle sending messages
  const sendMessage = () => {
    if (input.length > 0) {
      // Add user's message to the list
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: prevMessages.length + 1, text: input, sender: "user" },
      ]);
      // Clear the input
      setInput('');
      // Scroll to the end of the FlatList
      flatListRef.current.scrollToEnd({ animated: true });
      // Simulate bot's response after 1 second
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { id: prevMessages.length + 1, text: "This is a sample bot response.", sender: "bot" },
        ]);
        // Scroll to the end of the FlatList
        flatListRef.current.scrollToEnd({ animated: true });
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      {/* Chat messages */}
      <FlatList
      ref = {flatListRef}
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === "user" ? styles.userMessageContainer : styles.botMessageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      {/* Input field for typing message */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write Here..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage}>
          <Image
            style={styles.sendIcon}
            source={require("../assets/vector11.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    paddingTop: 50,
  },
  userMessageContainer: {
    backgroundColor: Color.colorLightGray,
    alignSelf: "flex-end",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  botMessageContainer: {
    backgroundColor: Color.colorLightBlue,
    alignSelf: "flex-start",
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
  },
  messageText: {
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_md,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: Color.colorLightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.colorLightGray,
    marginRight: 10,
    fontFamily: FontFamily.leagueSpartanRegular,
    fontSize: FontSize.size_md,
  },
  sendIcon: {
    width: 30,
    height: 30,
    tintColor: "black",
  },
});

export default MessageScreen;
