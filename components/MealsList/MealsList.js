import { View, FlatList, StyleSheet } from "react-native";

import Colors from "../../constants/colors";
import MealItem from "./MealItem";

function MealsList({ items }) {
  function renderMealsItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealsItem}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg500,
  },
});
