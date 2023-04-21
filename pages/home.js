import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// import ProgressBar from "react-native-progress/Bar";
import * as Progress from "react-native-progress";
import { colors } from "../assets/colors";
import { Dimensions } from "react-native";
import React from "react";
import { data } from "../constants/data";

const { width, height } = Dimensions.get("window");
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.subjectCard}>
        <View style={styles.innerCont}>
          <Image
            source={item.image}
            resizeMode="contain"
            style={{ width: "100%", aspectRatio: 1.2, height: undefined }}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: colors.primary,
              marginBottom: 10,
            }}
          >
            {item.name}
          </Text>
          <View style={styles.ProgBarContainer}>
            <Progress.Bar
              progress={0.3}
              width={100}
              height={4.6}
              color="grey"
              unfilledColor={colors.secondary}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navCont}>
        <View style={styles.profImg}>
          <Image
            source={require("../assets/user-image.png")}
            resizeMode="contain"
            accessibilityLabel="Profile Image"
            style={{ width: 35, height: 35 }}
          />
        </View>
        <View style={styles.drawerBtn}>
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={styles.menuIcon}
          >
            <MaterialCommunityIcons
              name="menu"
              size={20}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainTextSection}>
        <Text style={styles.mainText}>
          Hey Charley, what subject you want to improve today?
        </Text>
      </View>
      <View style={styles.subjectCategory}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.dataContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: "5%",
  },
  navCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "8%",
    marginVertical: "5%",
    paddingHorizontal: "5%",
  },
  profImg: {
    height: "100%",
    width: "13%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  drawerBtn: {
    width: "13%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: colors.white,
  },
  menuIcon: {
    padding: 10,
  },

  //Main Text Starts From Here
  mainTextSection: {
    width: "75%",
    marginBottom: "5%",
    marginLeft: "2%",
  },
  mainText: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 26,
    color: colors.text,
  },

  //Subject Category Start From Here
  subjectCategory: {
    // borderWidth: 1,
    padding: 15,
    // borderColor: "red",
    // height: "74.6%",
    maxHeight: windowHeight * 0.9,
  },
  subjectCard: {
    flex: 1,
    // borderColor: "orange",
    // borderWidth: 1,
    width: windowWidth * 0.9,
    marginHorizontal: 5,
    alignItems: "center",
  },
  dataContainer: {
    paddingHorizontal: 10,
    // borderColor: "green",
    // borderWidth: 1,
  },
  innerCont: {
    // borderWidth: 1,
    // borderColor: "blue",
    alignItems: "center",
    marginHorizontal: 10,
    paddingVertical: 10,
    marginBottom: "5%",
    backgroundColor: colors.white,
    justifyContent: "center",
    // alignItems: "center",
    flex: 1,
  },
  ProgBarContainer: {},
});
