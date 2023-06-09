import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../assets/colors";
import BackButton from "../components/BackButton";
import React, { useState, useCallback } from "react";
import PrimaryButton from "../components/PrimaryButton";
import { SafeAreaView } from "react-native-safe-area-context";

const LevelDifficulty = ({ navigation, route }) => {
  // const { data } = route.params;
  const data = route?.params?.data || {};

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const handleButtonPress = useCallback((index) => {
    setActiveButtonIndex(index);
    navigation.navigate("Questions");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainCont}>
        <View style={styles.navBar}>
          <BackButton navigation={navigation} />
        </View>
        <View style={styles.headerTextCont}>
          <Text style={styles.headerText}>{data.name}</Text>
        </View>
        <View style={styles.mainSect}>
          <Image
            style={{ width: "100%", height: undefined, aspectRatio: 1.2 }}
            source={data.image}
          />
        </View>
        <View style={styles.levelSelect}>
          <Text style={styles.levelSelectQuestion}>Choose your level</Text>
          <View style={styles.buttonCont}>
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
      </View>
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
    borderColor: colors.progressBar,
    backgroundColor: colors.white,
    borderWidth: 2,
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
  buttonCont: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  levelSelect: {
    borderColor: "red",
    // borderWidth: 1,
    marginTop: 5,
  },
  levelSelectQuestion: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.subText,
  },
});

export default LevelDifficulty;
