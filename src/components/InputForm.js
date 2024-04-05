import { StyleSheet, Text, View, TextInput } from "react-native";
// import fonts from "../utils/globals/fonts";

// const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.titleInput}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      {error ? (
        <View>
          <Text style={styles.error}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
  },
  input: {
    width: "90%",
    borderWidth: 0,
    borderBottomWidth: 3,
    borderBottomColor: "brown",
    padding: 2,

    fontSize: 14,
    marginHorizontal: "5%",
    marginVertical: 10,
  },
  titleInput: {
    width: "90%",
    marginHorizontal: "5%",
    fontSize: 23,
    fontWeight: "600",
    color: "brown",
  },
  error: {
    fontSize: 24,
    color: "lightsalmon",
    backgroundColor: "black",
    fontStyle: "italic",
    marginLeft: 20,
    paddingHorizontal: 15,
    paddingVertical: 5,
    width: "60%",
    borderRadius: 10,
    fontWeight: "700",
  },
});
