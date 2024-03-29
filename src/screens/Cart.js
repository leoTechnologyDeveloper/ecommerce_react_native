import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import colors from "../utils/globals/colors";
// import cart from "../utils/data/cart.json";
import { deleteItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";

import { UseSelector, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <View style={styles.containerAllcart}>
      <Text>Cart</Text>

      <FlatList
        style={styles.container}
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <IndividualCategory item={item} navigation={navigation} />
          <View style={styles.cartContainer}>
            <>
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.imagen}
                resizeMethod="auto"
              />
              <View style={styles.containerText}>
                <Text style={styles.productTitle}> {item.title}</Text>
                <View style={styles.cantiPrecio}>
                  <Text style={styles.productPrecio}>$ {item.price}</Text>
                  <Text style={styles.productPrecio}>
                    Cantidad: {item.cantidad}
                  </Text>
                </View>
              </View>
            </>
            <Pressable onPress={() => dispatch(deleteItem(item.id))}>
              <Text style={styles.deleteArticle}>❌</Text>
            </Pressable>
          </View>
        )}
      />
      <View style={styles.containerConfirmarCompra}>
        <Text style={styles.textConTotalprice}>Total : {cart.total} USD</Text>
        <Pressable>
          <Text style={styles.textConfirmarCompra}>Comprar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  containerAllcart: {
    position: "relative",
    height: "100%",
  },
  container: {
    backgroundColor: colors.sea2,
    padding: 10,
    gap: 20,
    width: "100%",
  },
  cartContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    backgroundColor: "skyblue",
    borderWidth: 1,
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: "800",
    fontSize: 20,
  },
  containerText: {
    flexDirection: "column",
  },
  cantiPrecio: {
    flexDirection: "row",
    gap: 50,
  },
  productPrecio: {
    fontWeight: "400",
    alignSelf: "center",
    marginTop: 10,
    fontSize: 24,
  },
  imagen: {
    width: 70,
    height: 70,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 5,
  },
  deleteArticle: {
    padding: 8,
    alignSelf: "flex-end",
    borderColor: colors.primary,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 50,
  },
  containerConfirmarCompra: {
    backgroundColor: colors.dark,
    position: "absolute",
    bottom: 3,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textConfirmarCompra: {
    color: "black",
    fontWeight: "600",
    backgroundColor: "orange",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 22,
  },
  textConTotalprice: {
    color: colors.light,
    fontSize: 25,
  },
});
