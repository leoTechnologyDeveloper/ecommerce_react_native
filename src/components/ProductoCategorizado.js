import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import colors from "../utils/globals/colors";

const ProductoCategorizado = ({ item, navigation }) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(
          "ProductDetail",
          { prodDetalladoId: item.id },
          (navigation = { navigation })
        )
      }
    >
      <Text style={styles.text}>{item.title}</Text>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.imagen}
        resizeMethod="resize"
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
    backgroundColor: "whitesmoke",
    borderWidth: 2,
    borderBlockColor: "crimson",
  },
  imagen: {
    width: "25%",
    height: 100,
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    width: "65%",
    fontWeight: "600",
    fontFamily: "WorkSans-VariableFont_wght",
  },
});
