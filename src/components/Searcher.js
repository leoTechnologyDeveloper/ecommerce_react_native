import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../utils/globals/colors";
import { useState } from "react";

const Searcher = () => {
  const [stateInput, setStateInput] = useState("");

  const handleInput = (e) => setStateInput(e);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        style={styles.buscador}
        onTextInput={handleInput}
        value={stateInput}
      />
      <Text style={styles.lupa}> 🔍</Text>
    </View>
  );
};

export default Searcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buscador: {
    backgroundColor: colors.secondary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontWeight: "400",
    fontSize: 30,
    position: "relative",
    alignItems: "center",
    width: "85%",
  },
  lupa: {
    backgroundColor: "white",
    width: "10%",
    fontSize: 20,
    alignSelf: "center",
  },
});
