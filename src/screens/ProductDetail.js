import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Header from "../components/Header";
// import productos from "../utils/data/products.json";
// import productos from "../utils/data/products2.json";
import { useGetProductQuery } from "../app/services/shop";
import colors from "../utils/globals/colors";
import { useDispatch } from "react-redux";
import { addcartItem } from "../features/cart/cartSlice";

const ProductDetail = ({ route }) => {
  const dispatch = useDispatch();
  const { prodDetalladoId } = route.params;
  const [productoDetailed, setProductoDetailed] = useState("");
  const { data: product, isLoading } = useGetProductQuery(prodDetalladoId - 1);
  // setProductoDetailed(product);

  // useEffect(() => {
  //   if (prodDetalladoId)
  //     // setProductoDetailed(
  //     //   productos.find((item) => item.id === prodDetalladoId)
  //     // );
  //     setProductoDetailed(product);
  // }, [prodDetalladoId]);

  // if (isLoading) return <Text style={styles.textPrice}>Waitttt !!!!!</Text>;
  if (isLoading) return null;

  console.log("el product traido", product);

  return (
    <View>
      {/* <Header title="ProductDetail" arrow={true} /> */}
      <View style={styles.container}>
        <Text style={styles.textTitle}>{product.title}</Text>
        <Image
          source={{ uri: product.thumbnail }}
          style={styles.imagen}
          resizeMethod="auto"
        />
        <View style={styles.containerPrice}>
          <Text style={styles.textPrice}>Precio : {product.price}</Text>
          <Pressable onPress={() => dispatch(addcartItem(product))}>
            <Text style={styles.carritoButton}> ➕ Agregar</Text>
          </Pressable>
        </View>
        <Text style={styles.text}>Description : {product.description}</Text>
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
    gap: 15,
  },
  imagen: {
    width: "90%",
    height: "60%",
    borderColor: colors.primary,
    borderWidth: 4,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "600",
    fontFamily: "WorkSans-VariableFont_wght",
    color: colors.dark,
    padding: 10,
    borderColor: colors.darkBlue,
  },
  textTitle: {
    fontWeight: "800",
    fontSize: 30,
    textAlign: "center",
  },
  containerPrice: {
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
  },
  textPrice: {
    fontWeight: "500",
    fontSize: 25,
    backgroundColor: colors.primary,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    width: "auto",
    textAlign: "center",
    color: colors.light,
    borderColor: colors.darkBlue,
    borderWidth: 2,
  },
  carritoButton: {
    backgroundColor: "yellow",
    color: colors.dark,
    fontWeight: "500",
    fontSize: 25,
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 15,
    width: "auto",
    borderColor: colors.darkBlue,
    borderWidth: 2,
  },
});
