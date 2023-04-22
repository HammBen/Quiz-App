import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./DrawerNavigator";
import { NormalNavigator } from "./NormalNavigator";

export function RootNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      <NormalNavigator />
    </NavigationContainer>
  );
}
