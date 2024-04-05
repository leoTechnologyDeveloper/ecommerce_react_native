import MyBottomTab from "./MyBottomTab";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import Cart from "../screens/Cart";

const MainNavigator = () => {
  const idToken = "Hello, I am the Token";

  return (
    <>
      <NavigationContainer>
        {/* <ShopStack /> */}
        {idToken ? <MyBottomTab /> : <Cart />}
        {/* {idToken ? <MyBottomTab /> : <AuthStack />} */}
        {/* <OrderStack /> */}
      </NavigationContainer>
    </>
  );
};

export default MainNavigator;
