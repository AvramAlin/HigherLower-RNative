import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/success.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <ScrollView style={{ flex: 1, marginTop: 0 }}>
        <View style={styles.landscape}>
          <Title>GAME OVER!</Title>
          <View style={styles.rootContainerLandscape}>
            <View style={styles.imageContainerLandscape}>
              <Image
                source={require("../assets/images/success.png")}
                style={styles.image}
              />
            </View>
            <Text style={styles.summaryTextLandscape}>
              Your phone needed{" "}
              <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
              guess the number{" "}
              <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
          </View>
          <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
      </ScrollView>
    );
  }

  return <>{content}</>;
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: deviceWidth < 380 ? 75 : 150,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  imageContainerLandscape: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  summaryTextLandscape: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
    width: 300,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  rootContainerLandscape: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 0,
  },
  landscape: {
    flex: 1,
    alignItems: "center",
    marginTop: 8,
  },
});
