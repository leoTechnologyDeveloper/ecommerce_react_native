import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/globals/colors";

const Header = ({ title = "Ecommerce" }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 35,
  },
});
