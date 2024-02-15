import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Keyboard,
} from "react-native";
import colors from "../utils/globals/colors";
import { useState } from "react";

const Searcher = ({ handleWordForSearch }) => {
  const [stateInput, setStateInput] = useState("");

  const handleInput = (e) => setStateInput(e);

  const handleSearching = () => {
    Keyboard.dismiss();
    console.log(stateInput);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar"
        style={styles.buscador}
        onChangeText={handleInput}
        value={stateInput}
      />
      <Pressable onPress={handleSearching} style={styles.lupa}>
        <Text style={styles.lupaIcon}> 🔍</Text>
      </Pressable>
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

    alignSelf: "center",
  },
  lupaIcon: {
    fontSize: 25,
  },
});
