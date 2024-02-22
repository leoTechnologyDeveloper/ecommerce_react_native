import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "../components/Header";
import productos from "../utils/data/products.json";
import colors from "../utils/globals/colors";

const ProductDetail = ({ route }) => {
  const { prodDetalladoId } = route.params;
  const [productoDetailed, setProductoDetailed] = useState("");

  useEffect(() => {
    if (prodDetalladoId)
      setProductoDetailed(
        productos.find((item) => item.id === prodDetalladoId)
      );
  }, [prodDetalladoId]);

  return (
    <View>
      <Header title="ProductDetail" arrow={true} />
      <View style={styles.container}>
        <Text style={styles.textTitle}>{productoDetailed.title}</Text>
        <Image
          source={{ uri: productoDetailed.thumbnail }}
          style={styles.imagen}
          resizeMethod="cover"
        />
        <Text style={styles.textPrice}>Precio : {productoDetailed.price}</Text>
        <Text style={styles.text}>
          Description : {productoDetailed.description}
        </Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    margin: 4,
    backgroundColor: colors.clear,
    height: "85%",
    borderWidth: 30,
  },
  imagen: {
    width: "90%",
    height: "60%",
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "WorkSans-VariableFont_wght",
  },
  textTitle: {
    fontWeight: "800",
    fontSize: 35,
    textAlign: "center",
  },
  textPrice: {
    fontWeight: "500",
    fontSize: 30,
    backgroundColor: colors.sea1,
    padding: 5,
    borderRadius: 15,
    width: "100%",
    textAlign: "center",
  },
});
