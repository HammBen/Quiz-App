import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./pages/home";
import LevelDifficulty from "./pages/levelSelector";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Levels" component={LevelDifficulty} />
      <Stack.Screen name="Main" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ drawerPosition: "right", headerShown: false }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Difficulty" component={MyStack} />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* <MyStack /> */}
    </NavigationContainer>
  );
}
