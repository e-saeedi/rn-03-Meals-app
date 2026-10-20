import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import Colors from "../constants/colors";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId,
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, catId]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
