import { useState } from "react";
import MyBottomTab from "./MyBottomTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import Cart from "../screens/Cart";

const MainNavigator = () => {
  const [idToken, setIsToken] = useState("");

  return (
    <>
      <NavigationContainer>
        {/* <ShopStack /> */}
        {/* {idToken ? <MyBottomTab /> : <Cart />} */}
        {idToken ? <MyBottomTab /> : <AuthStack />}
        {/* <OrderStack /> */}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
