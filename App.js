import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ListCategory from "./src/screens/ListCategory";
import ProductDetail from "./src/screens/ProductDetail";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";

const App = () => {
  const [categoryClicked, setCategoryClicked] = useState("");
  const handleCategoryClicked = (category) => setCategoryClicked(category);
  const [fontsLoaded] = useFonts({
    "SmoochSans-VariableFont_wght": require("./assets/fonts/SmoochSans-VariableFont_wght.ttf"),
    "KaushanScript-Regular": require("./assets/fonts/KaushanScript-Regular.ttf"),
    "WorkSans-VariableFont_wght": require("./assets/fonts/WorkSans-VariableFont_wght.ttf"),
    "NotoSerifDisplay-VariableFont_wdth,wght": require("./assets/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View>
      {categoryClicked ? (
        <ListCategory categoryClicked={categoryClicked} />
      ) : (
        <Home stateCategoryClicked={handleCategoryClicked} />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  clickeada: {
    fontSize: 50,
    color: "purple",
  },
});
