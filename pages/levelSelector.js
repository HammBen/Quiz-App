import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useCallback } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { colors } from "../assets/colors";

const LevelDifficulty = ({ navigation }) => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(null);

  const handleButtonPress = useCallback((index) => {
    setActiveButtonIndex(index);
  }, []);

  // function handleButtonPress() {
  //   setIsButtonActive(true);
  // }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCont}>
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={20}
              color={colors.primary}
            />
            <Text style={styles.backBtnText}>Back</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerTextCont}>
          <Text style={styles.headerText}>Sport</Text>
        </View>
        <View style={styles.mainSect}>
          <Image
            style={{ width: "100%", height: undefined, aspectRatio: 1.2 }}
            source={require("../assets/sports.png")}
          />
        </View>
        <View style={styles.levelSelect}>
          <Text style={styles.levelSelectQuestion}>Choose your level</Text>
          <PrimaryButton
            title="Easy"
            isActive={activeButtonIndex === 0}
            onPress={() => handleButtonPress(0)}
          />
          <PrimaryButton
            title="Medium"
            isActive={activeButtonIndex === 1}
            onPress={() => handleButtonPress(1)}
          />
          <PrimaryButton
            title="Hard"
            isActive={activeButtonIndex === 2}
            onPress={() => handleButtonPress(2)}
          />
        </View>
      </View>

      {/* <Button
        title="go to Home Wai"
        onPress={() => {
          navigation.navigate("Home");
        }}
      /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  mainCont: {
    borderColor: "green",
    // borderWidth: 1,
    paddingHorizontal: 15,
  },
  navBar: {
    marginTop: 20,
    height: "8%",
    // borderWidth: 1,
    borderColor: "blue",
  },
  backBtn: {
    width: "25%",
    borderColor: "orange",
    // borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  backBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  mainSect: {
    // borderColor: "red",
  },
  headerTextCont: {
    justifyContent: "center",
    alignItems: "center",
    height: "5%",
    borderColor: "pink",
    // borderWidth: 1,
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.text,
  },
  levelSelect: {
    // borderColor: "red",
    // borderWidth: 1,
  },
  levelSelectQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.subText,
  },
});

export default LevelDifficulty;
