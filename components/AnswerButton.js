import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../assets/colors";

const AnswerNumber = ({ number }) => {
  return (
    <View style={styles.ansNum}>
      <Text style={{ fontWeight: "500", color: colors.text }}>{number}</Text>
    </View>
  );
};

export default function AnswerButton({ number }) {
  return (
    <TouchableOpacity style={styles.ansBtn}>
      <View style={styles.innerCont}>
        <AnswerNumber number={number} />
        <Text style={styles.ansText}>16 inches</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ansBtn: {
    // flex: 1,
    width: "100%",
    maxWidth: "45%",
    borderColor: colors.progressBar,
    backgroundColor: colors.white,
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    margin: 7.1,
    justifyContent: "space-around",
    // justifyContent: "flex-start",
    // marginVertical: 30,
    flexDirection: "row",
  },
  innerCont: {
    flex: 1,
    flexDirection: "row",
    borderColor: "red",
    // borderWidth: 1,
    // justifyContent: "space-between",
    alignItems: "center",
    // width: "80%"
  },
  ansText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
    marginLeft: 10,
  },
  ansNum: {
    width: "25%",
    backgroundColor: colors.progressBar,
    padding: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
