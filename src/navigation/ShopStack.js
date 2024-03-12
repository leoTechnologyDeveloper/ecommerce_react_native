import { StyleSheet, Text, View } from "react-native";
import ListCategory from "../screens/ListCategory";
import ProductDetail from "../screens/ProductDetail";
import Header from "../components/Header";
import Home from "../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => {
        return {
          header: () => {
            return (
              <Header
                title={
                  route.name === "Home"
                    ? "On-line Categories"
                    : route.name === "ListCategory"
                    ? route.params.categoryClicked
                    : "Detalle del Producto"
                }
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ListCategory" component={ListCategory} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
