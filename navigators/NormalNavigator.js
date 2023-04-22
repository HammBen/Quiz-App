import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LevelDifficulty from "../screens/LevelDifficulty";
import QuestionAnswer from "../screens/QuestionAnswer";
// import { DrawerNavigator } from "./DrawerNavigator";

const Stack = createNativeStackNavigator();

export const NormalNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Level" component={LevelDifficulty} />
      <Stack.Screen name="Questions" component={QuestionAnswer} />
      {/* <Stack.Screen name="Home" component={DrawerNavigator} /> */}
    </Stack.Navigator>
  );
};
