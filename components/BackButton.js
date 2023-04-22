import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { colors } from "../assets/colors";

export default function BackButton({ title, onPress }) {
  return (
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
  );
}

const styles = StyleSheet.create({
  backBtn: {
    width: "25%",
    height: undefined,
    aspectRatio: 1.6,
    borderColor: colors.progressBar,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  backBtnText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
});
