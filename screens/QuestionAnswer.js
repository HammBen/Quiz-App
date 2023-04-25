import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import AnswerButton from "../components/AnswerButton";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import * as Progress from "react-native-progress";

export default QuestionAnswer = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const [loading, setLoading] = useState(true);
  const getQuiz = async () => {
    url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    res = await fetch(url);
    data = await res.json();
    // console.log(data.results[0]);
    setQuestions(data.results[0]);
    setLoading(false);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator size="large" color="#BA68C8" />
        </View>
      ) : (
        <View style={styles.mainCont}>
          <View style={styles.navBar}>
            <BackButton navigation={navigation} />
            <Progress.Circle
              size={58}
              indeterminate={false}
              borderWidth={3}
              borderColor={colors.progressBar}
              progress={0.2}
              showsText={true}
              textStyle={{
                fontSize: 13,
                color: colors.text,
                fontWeight: "bold",
              }}
              strokeCap="round"
              formatText={() => "4:09"}
              style={{
                borderColor: "orange",
                // borderWidth: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </View>
          <View style={styles.mainSect}>
            <View style={styles.questionCont}>
              <Text style={styles.questionNumber}>
                Question {questionNumber + 1}
              </Text>
              <Text style={styles.question}>
                {decodeURIComponent(questions.question)}
              </Text>
            </View>
            <View style={styles.questionImage}>
              <Image
                source={require("../assets/basketball.png")}
                style={{ width: "100%", height: undefined, aspectRatio: 1.5 }}
              />
            </View>
            <View style={styles.answerSelect}>
              <AnswerButton number="1" />
              <AnswerButton number="2" />
              <AnswerButton number="3" />
              <AnswerButton number="4" />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainCont: {
    marginHorizontal: 15,
    marginTop: 25,
    borderColor: "red",
    // borderWidth: 1,
  },
  navBar: {
    borderColor: "red",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainSect: {
    borderColor: "green",
    // borderWidth: 1,
    // marginTop: 20,
    paddingHorizontal: 10,
  },
  questionCont: {
    borderColor: "blue",
    // borderWidth: 1,
    marginVertical: 20,
  },
  questionNumber: {
    color: colors.subText,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  question: {
    color: colors.text,
    fontSize: 23,
    fontWeight: "600",
    width: "100%",
    // width: "88.4%",
    lineHeight: 28,
    marginVertical: 5,
  },
  questionImage: {
    marginVertical: 5,
    padding: 20,
  },
  answerSelect: {
    borderColor: "green",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    marginTop: 15,
    paddingVertical: 20,
  },
});
