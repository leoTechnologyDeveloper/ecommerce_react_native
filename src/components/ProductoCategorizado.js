import { StyleSheet, Text, View, Image } from "react-native";
import colors from "../utils/globals/colors";

const ProductoCategorizado = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.thumbnail }}
        style={styles.imagen}
        resizeMethod="cover"
      />
      <Text style={styles.text}>{item.title}</Text>
    </View>
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
  },
  text: {
    fontSize: 25,
    width: "65%",
  },
});
