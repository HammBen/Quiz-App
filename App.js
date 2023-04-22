import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  Image,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { data } from "./constants/data";
import { colors } from "./assets/colors";
import { DrawerNavigator } from "./navigators/DrawerNavigator";
import { NormalNavigator } from "./navigators/NormalNavigator";
// import HomeScreen from "./pages/home";
// import LevelDifficulty from "./pages/levelSelector";
// import QuizChallenge from "./pages/quizChallenge";

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Levels" component={LevelDifficulty} />
//       <Stack.Screen name="Main" component={MyDrawer} />
//       <Stack.Screen name="Quiz" component={QuizChallenge} />
//     </Stack.Navigator>
//   );
// };

// const MyDrawer = () => {
//   return (
//     <Drawer.Navigator
//       screenOptions={{ drawerPosition: "right", headerShown: false }}
//     >
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Difficulty" component={MyStack} />
//     </Drawer.Navigator>
//   );
// };

// const HomeScreen = ({ navigation }) => {
//   const renderItem = ({ item }) => {
//     return (
//       <TouchableOpacity
//         style={styles.subjectCard}
//         onPress={() => {
//           navigation.navigate("Another", { data: item });
//         }}
//       >
//         <View style={styles.innerCont}>
//           <Image
//             source={item.image}
//             resizeMode="contain"
//             style={{
//               width: "100%",
//               aspectRatio: 1.81,
//               height: undefined,
//               marginBottom: 5,
//             }}
//           />
//           <Text
//             style={{
//               fontSize: 18,
//               fontWeight: "bold",
//               color: colors.primary,
//               marginBottom: 10,
//             }}
//           >
//             {item.name}
//           </Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };
//   return (
//     <View>
//       <Text>HomeScreen</Text>
//       <FlatList
//         data={data}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         contentContainerStyle={styles.dataContainer}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// const AnotherScreen = ({ navigation, route }) => {
//   const data = route.params.data;

//   return (
//     <View>
//       <Text style={{ borderColor: "red", borderWidth: 1, color: "black" }}>
//         {data.name}
//       </Text>
//       <Image
//         source={data.image}
//         style={{ width: "100%", height: undefined, aspectRatio: 1.5 }}
//       />
//       <Text>Another Screen</Text>
//       <Button
//         title="Button"
//         onPress={() => {
//           navigation.navigate("Also");
//         }}
//       />
//     </View>
//   );
// };

// const AlsoAnotherScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Also Another Screen</Text>
//       <Button
//         title="Button"
//         onPress={() => {
//           navigation.navigate("Home");
//         }}
//       />
//     </View>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
      {/* <NormalNavigator /> */}
    </NavigationContainer>
  );
}
