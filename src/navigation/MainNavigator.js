import { StyleSheet, StatusBar } from "react-native";

import ShopStack from "./ShopStack";
import MyBottomTab from "./MyBottomTab";
import OrderStack from "./OrderStack";
import { NavigationContainer } from "@react-navigation/native";

const MainNavigator = () => {
  return (
    <>
      <NavigationContainer>
        {/* <ShopStack /> */}
        <MyBottomTab />
        {/* <OrderStack /> */}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
