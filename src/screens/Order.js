import { StyleSheet, Text, View, FlatList } from "react-native";
import orders from "../utils/data/order.json";
import colors from "../utils/globals/colors";
import OrderItem from "../components/OrderItem";

const Order = () => {
  return (
    <View>
      <Text style={styles.title}>Ordenes</Text>
      <FlatList
        style={styles.container}
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <OrderItem order={item} />}
      />
      {/* <Text>After flat</Text> */}
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    padding: 40,
    flexDirection: "row",
  },
  title: {
    fontSize: 35,
    backgroundColor: "brown",
    padding: 15,
    color: "white",
  },
});
