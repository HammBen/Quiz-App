import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeDrawer } from "../screens/HomeDrawer";
import LevelDifficulty from "../screens/LevelDifficulty";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeDrawer} />
      <Drawer.Screen
        name="Level"
        component={LevelDifficulty}
        options={{ drawerLabel: () => null, title: null }}
        drawerLockMode='locked-closed'
      />
    </Drawer.Navigator>
  );
};
