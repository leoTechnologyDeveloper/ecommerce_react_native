import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import MainNavigator from "./src/navigation/MainNavigator";
import CartStack from "./src/navigation/CartStack";
import colors from "./src/utils/globals/colors";
import MyBottomTab from "./src/navigation/MyBottomTab";
import OrderStack from "./src/navigation/OrderStack";

const App = () => {
  const [fontsLoaded] = useFonts({
    "SmoochSans-VariableFont_wght": require("./assets/fonts/SmoochSans-VariableFont_wght.ttf"),
    "KaushanScript-Regular": require("./assets/fonts/KaushanScript-Regular.ttf"),
    "WorkSans-VariableFont_wght": require("./assets/fonts/WorkSans-VariableFont_wght.ttf"),
    "NotoSerifDisplay-VariableFont_wdth,wght": require("./assets/fonts/NotoSerifDisplay-VariableFont_wdth,wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.sea1} />
        <MainNavigator />
      </NavigationContainer>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  clickeada: {
    fontSize: 50,
    color: "purple",
  },
  statusbar: {
    backgroundColor: colors.fruit1,
  },
});
