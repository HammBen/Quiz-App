import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NormalNavigator } from "./navigators/NormalNavigator";


export default function App() {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <NormalNavigator />
      {/* <RootNavigator /> */}
      {/* <QuestionAnswer /> */}
    </NavigationContainer>
  );
}
