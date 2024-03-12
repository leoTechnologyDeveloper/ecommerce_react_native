import { StyleSheet, StatusBar } from "react-native";

import ShopStack from "./ShopStack";
import MyBottomTab from "./MyBottomTab";
import OrderStack from "./OrderStack";

const MainNavigator = () => {
  return (
    <>
      {/* <ShopStack /> */}
      <MyBottomTab />
      {/* <OrderStack /> */}
    </>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
