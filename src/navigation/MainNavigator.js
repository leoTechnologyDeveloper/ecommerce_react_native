import MyBottomTab from "./MyBottomTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import Cart from "../screens/Cart";
import { useSelector } from "react-redux";
import { useState } from "react";

const MainNavigator = () => {
  // const idToken = "Hello, I am the Token";

  // const [idToken, setIdToken] = useState("");
  const user = useSelector((state) => state.auth);

  return (
    <>
      <NavigationContainer>
        {/* <ShopStack /> */}
        {/* {idToken ? <MyBottomTab /> : <Cart />} */}
        {user.idToken ? <MyBottomTab /> : <AuthStack />}
        {/* <OrderStack /> */}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
