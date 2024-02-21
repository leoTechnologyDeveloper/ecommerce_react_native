import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import ListCategory from "./src/screens/ListCategory";
import ProductDetail from "./src/screens/ProductDetail";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    "SmoochSans-VariableFont_wght": require("./assets/fonts/SmoochSans-VariableFont_wght.ttf"),
    "KaushanScript-Regular": require("./assets/fonts/KaushanScript-Regular.ttf"),
    "WorkSans-VariableFont_wght": require("./assets/fonts/WorkSans-VariableFont_wght.ttf"),
    "NotoSerifDisplay-VariableFont_wdth,wght": require("./assets/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListCategory" component={ListCategory} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  clickeada: {
    fontSize: 50,
    color: "purple",
  },
});
