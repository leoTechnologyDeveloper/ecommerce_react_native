import { StyleSheet } from "react-native";
import Order from "../screens/Order";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return <Header title="Orders" navigation={navigation} />;
          },
        };
      }}
    >
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
