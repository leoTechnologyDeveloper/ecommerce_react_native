import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const AuthStack = ({ setIdToken }) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ route, navigation }) => {
        return {
          header: () => {
            return (
              <Header
                title={route.name === "Login" ? "Inicio de Sesión" : "Registro"}
                navigation={navigation}
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Register"
        component={Register}
        initialParams={{ setIdToken }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
