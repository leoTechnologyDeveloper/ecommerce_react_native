import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text } from "react-native";
import colors from "../utils/globals/colors";

// Importamos las pantallas
import Home from "../screens/Home";
import Cart from "../screens/Cart";
import Order from "../screens/Order";
import ShopStack from "./ShopStack";
import MyIcon from "../components/MyIcon";

const MyTabStack = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <MyTabStack.Navigator
      initialRouteName="Shopstack"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.bottomBar,
      }}
    >
      <MyTabStack.Screen
        name="ShopStack"
        component={ShopStack}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MyIcon title="Home" focused={focused} />;
          },
        }}
      />
      <MyTabStack.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MyIcon title="Cart" focused={focused} />;
          },
        }}
      />
      <MyTabStack.Screen
        name="Order"
        component={Order}
        options={{
          tabBarIcon: ({ focused }) => {
            return <MyIcon title="Order" focused={focused} />;
          },
        }}
      />
    </MyTabStack.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.darkBlue,
    height: 80,
    // width: "100%",
    // borderRadius: 10,
    // alignSelf: "center",
    // marginBottom: 5,
    paddingVertical: 5,
    borderBottomColor: colors.soft,
    borderBottomWidth: 1,
  },
});
