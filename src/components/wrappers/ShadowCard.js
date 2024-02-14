import { children } from "react";
import { StyleSheet, Text, View } from "react-native";

const ShadowCard = ({ style, children }) => {
  return <View style={[styles.shadow, style]}>{children}</View>;
};

export default ShadowCard;

const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
  },
});
