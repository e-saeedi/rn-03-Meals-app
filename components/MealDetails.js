import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailitem, textStyle]}>{duration}m</Text>
      <Text style={[styles.detailitem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailitem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  detailitem: {
    fontSize: 12,
    marginHorizontal: 12,
    color: Colors.text200,
  },
});
