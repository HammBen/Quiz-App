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
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "./components/BackButton";
import AnswerButton from "./components/AnswerButton";
import { DrawerNavigator } from "./navigators/DrawerNavigator";
import { NormalNavigator } from "./navigators/NormalNavigator";
import { RootNavigator } from "./navigators/RootNavigator";
import QuestionAnswer from "./screens/QuestionAnswer";
// import HomeScreen from "./pages/home";
// import LevelDifficulty from "./pages/levelSelector";
// import QuizChallenge from "./pages/quizChallenge";

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();

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
//     <SafeAreaView>
//       <View style={styles.mainCont}>
//         <View style={styles.navBar}>
//           <BackButton navigation={navigation} />
//         </View>
//         <View style={styles.mainSect}>
//           <View style={styles.questionCont}>
//             <Text style={styles.questionNumber}>Question 4</Text>
//             <Text style={styles.question}>
//               What is the diameter of a basketball hoop in inches?
//             </Text>
//           </View>
//           <View style={styles.questionImage}>
//             <Image
//               source={require("./assets/basketball.png")}
//               style={{ width: "100%", height: undefined, aspectRatio: 1.5 }}
//             />
//           </View>
//           <View style={styles.answerSelect}>
//             <AnswerButton number="1" />
//             <AnswerButton number="2" />
//             <AnswerButton number="3" />
//             <AnswerButton number="4" />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   mainCont: {
//     marginHorizontal: 15,
//   },
//   mainSect: {
//     borderColor: "red",
//     // borderWidth: 1,
//     marginTop: 20,
//     paddingHorizontal: 10,
//   },
//   questionCont: {
//     borderColor: "blue",
//     // borderWidth: 1,
//     marginVertical: 20,
//   },
//   questionNumber: {
//     color: colors.subText,
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 5,
//   },
//   question: {
//     color: colors.text,
//     fontSize: 23,
//     fontWeight: "600",
//     width: "80%",
//     lineHeight: 28,
//     marginVertical: 5,
//   },
//   questionImage: {
//     marginVertical: 5,
//     padding: 20,
//   },
//   answerSelect: {
//     borderColor: "green",
//     // borderWidth: 1,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     flexWrap: "wrap",
//     marginTop: 15,
//   },
// });

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
