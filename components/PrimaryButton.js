import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../assets/colors";

export default function PrimaryButton({ title, onPress, isActive }) {
  const buttonStyle = isActive ? styles.activeBtn : styles.primaryBtn;
  const titleStyle = isActive ? styles.activeTitle : styles.btnTitle;

  return (
    <TouchableOpacity
      style={[styles.primaryBtn, buttonStyle]}
      onPress={onPress}
    >
      <Text style={[styles.btnTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryBtn: {
    width: "100%",
    height: undefined,
    aspectRatio: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 30,
    marginVertical: 10,
  },
  activeBtn: {
    backgroundColor: colors.primary,
    borderWidth: 0,
  },
  activeTitle: {
    color: "white",
  },
  btnTitle: {
    color: colors.text,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
});
