import { StyleSheet, Text, View } from "react-native";

const OrderItem = ({ order }) => {
  return (
    <View>
      <>
        <Text>{order.total}</Text>
        {/* <Text>{item.description}</Text>
        <Text>{item.category}</Text> */}
        <Text>❌</Text>
      </>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
