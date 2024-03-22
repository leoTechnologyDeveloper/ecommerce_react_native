import { StyleSheet, Text, View, FlatList, Pressable } from "react-native";
import colors from "../utils/globals/colors";
import cart from "../utils/data/cart.json";

const Cart = () => {
  return (
    <View>
      <Text>Cart</Text>

      <FlatList
        style={styles.container}
        data={cart.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          // <IndividualCategory item={item} navigation={navigation} />
          <>
            <Text>{item.id}</Text>
            <Text>{item.description}</Text>
            <Text>{item.category}</Text>
            <Text>❌</Text>
          </>
        )}
      />
      <View>
        <Pressable>
          <Text>Confirmar Compra</Text>
        </Pressable>
        <Text>Total : {cart.total}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sea2,
    padding: 20,
  },
});
