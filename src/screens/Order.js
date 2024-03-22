import { StyleSheet, Text, View, FlatList } from "react-native";
import orders from "../utils/data/order.json";
import colors from "../utils/globals/colors";
import OrderItem from "../components/OrderItem";

const Order = () => {
  return (
    <View>
      <Text>Order</Text>
      <FlatList
        style={styles.container}
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
      <Text>After flat</Text>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sea2,
    padding: 20,
  },
});
