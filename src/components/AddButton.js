import { StyleSheet, Text, View, Pressable } from "react-native";

const AddButton = ({ title, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gold",
    width: "70%",
    paddingVertical: 8,
    margin: 10,
    borderRadius: 20,
  },
  text: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
  },
});
