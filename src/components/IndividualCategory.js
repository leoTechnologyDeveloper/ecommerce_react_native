import { Pressable, StyleSheet, Text, View } from "react-native";
import colors from "../utils/globals/colors";
import ShadowCard from "./wrappers/ShadowCard";

const IndividualCategory = ({ item, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(
          "ListCategory",
          { categoryClicked: item },
          (navigation = { navigation })
        )
      }
    >
      <ShadowCard style={[styles.container, styles.item]}>
        <Text style={styles.item}>{item}</Text>
      </ShadowCard>
    </Pressable>
  );
};

export default IndividualCategory;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    backgroundColor: "white",
    width: "80%",
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    padding: 5,
    borderRadius: 15,
    color: "crimson",
    fontWeight: "800",
    fontFamily: "WorkSans-VariableFont_wght",
  },
});
