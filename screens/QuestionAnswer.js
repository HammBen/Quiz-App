import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../assets/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "../components/BackButton";
import AnswerButton from "../components/AnswerButton";
import { useEffect, useState } from "react";

export default QuestionAnswer = ({ navigation }) => {
  const [questions, setQuestions] = useState();
  const [questionNumber, setQuestionNumber] = useState(0);
  const getQuiz = async () => {
    url = "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";
    res = await fetch(url);
    data = await res.json();
    setQuestions(data.results[0]);
  };
  useEffect(() => {
    getQuiz();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {questions && (
        <View style={styles.mainCont}>
          <View style={styles.navBar}>
            <BackButton navigation={navigation} />
          </View>
          <View style={styles.mainSect}>
            <View style={styles.questionCont}>
              <Text style={styles.questionNumber}>Question {questionNumber + 1}</Text>
              <Text style={styles.question}>{decodeURIComponent(questions.question)}</Text>
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
  mainCont: {
    marginHorizontal: 15,
    marginTop: 25,
    borderColor: "red",
    // borderWidth: 1,
  },
  navBar: {
    borderColor: "red",
    // borderWidth: 1,
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
    width: "88.4%",
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
