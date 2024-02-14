import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ListCategory from "./src/screens/ListCategory";
import ProductDetail from "./src/screens/ProductDetail";
import { useState, useEffect } from "react";

const App = () => {
  const [categoryClicked, setCategoryClicked] = useState("");
  const handleCategoryClicked = (category) => setCategoryClicked(category);

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
