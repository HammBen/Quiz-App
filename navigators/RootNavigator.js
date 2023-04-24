// import React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { DrawerNavigator } from "./DrawerNavigator";
// import { NormalNavigator } from "./NormalNavigator";

// export function RootNavigator() {
//   return (
//     <NavigationContainer>
//       <DrawerNavigator />
//       {/* <NormalNavigator /> */}
//     </NavigationContainer>
//   );
// }

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DrawerNavigator } from "./DrawerNavigator";
import { NormalNavigator } from "./NormalNavigator";

const Stack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="NormalNavigator" component={NormalNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
