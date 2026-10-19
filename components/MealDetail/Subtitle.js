import { Children } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Subtitle({ children }) {
  return (
    <View style={styles.subtitlecontainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitlecontainer: {
    borderBottomColor: Colors.text200,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    padding: 6,
  },
  subtitle: {
    color: Colors.text200,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
