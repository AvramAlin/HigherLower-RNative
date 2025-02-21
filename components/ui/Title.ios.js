import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 28,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: Platform.select({ios : 0, android : 2})
    borderWidth: 0,
    borderColor: "white",
    padding: 12,
    borderRadius: 25,
    maxWidth: "90%",
    width: 300,
  },
});
