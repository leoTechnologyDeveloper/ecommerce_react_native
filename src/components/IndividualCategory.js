import { StyleSheet, Text, View } from "react-native";
import colors from "../utils/globals/colors";
import ShadowCard from "./wrappers/ShadowCard";

const IndividualCategory = ({ item }) => {
  return (
    <ShadowCard style={[styles.container, styles.item]}>
      <Text style={styles.item}>{item}</Text>
    </ShadowCard>
  );
};

export default IndividualCategory;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: colors.sea1,
    width: "80%",
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    padding: 5,
    borderRadius: 15,
    color: colors.primary,
    fontWeight: "600",
  },
});
