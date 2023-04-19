import { SafeAreaView, View, Text, Button } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <View>
        <MaterialCommunityIcons name="menu" size={30} color="#900" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
