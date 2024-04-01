import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={({ navigation }) => {
        return {
          header: () => {
            return (
              <Header
                title={
                  TabRouter.name === "Login" ? "Inicio de Sesión" : "Registro"
                }
                navigation={navigation}
              />
            );
          },
        };
      }}
    >
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
