import { StyleSheet, Text, View, FlatList } from "react-native";
import allcategorias from "../utils/data/categorias.json";
import IndividualCategory from "./IndividualCategory";
import colors from "../utils/globals/colors";

const Categories = ({ navigation }) => {
  return (
    <FlatList
      style={styles.container}
      data={allcategorias}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <IndividualCategory item={item} navigation={navigation} />
      )}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.sea2,
    padding: 20,
  },
});
