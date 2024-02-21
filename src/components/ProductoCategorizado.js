import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import colors from "../utils/globals/colors";

const ProductoCategorizado = ({ item }) => {
  return (
    <Pressable style={styles.container} onPress={() => console.log(item.title)}>
      <Text style={styles.text}>{item.title}</Text>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.imagen}
        resizeMethod="cover"
      />
    </Pressable>
  );
};

export default ProductoCategorizado;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    backgroundColor: colors.clear,
  },
  imagen: {
    width: "25%",
    height: 100,
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    width: "65%",
    fontWeight: "600",
    fontFamily: "WorkSans-VariableFont_wght",
  },
});
