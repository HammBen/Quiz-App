import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {colors} from "../assets/colors";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navCont}>
        <View style={styles.profImg}>
          <Text>j</Text>
        </View>
        <View style={styles.drawerBtn}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={styles.menuIcon}>
            <MaterialCommunityIcons name="menu" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 5,
  },
  navCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  profImg: {
    height: "100%",
    width: "15%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.white,
    // shadowColor: colors.shadow,
    shadowColor: "red",
    shadowOpacity: 0,
    // shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    shadowOffset: {
      width: 0,
      height: -20,
    },
  },
  drawerBtn: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    backgroundColor: colors.white,
  },
  menuIcon: {
    padding: 10,
  }
});
