import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importamos las pantallas
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const MyTab = createBottomTabNavigator();

export default function MyBottomTab() {
  return (
    <MyTab.Navigator>
      <MyTab.Screen name="Home" component={Home} />
      <MyTab.Screen name="Settings" component={Settings} />
      <MyTab.Screen name="Profile" component={Profile} />
    </MyTab.Navigator>
  );
}
