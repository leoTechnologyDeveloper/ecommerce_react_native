import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import colors from "../utils/globals/colors";
import productos from "../utils/data/products.json";
import { useState, useEffect } from "react";
import ProductoCategorizado from "../components/ProductoCategorizado";
import Searcher from "../components/Searcher";

const ListCategory = ({ categoryClicked }) => {
  const [prodFiltrados, setProdFiltrados] = useState([]);
  const [wordForSearch, setWordForSearch] = useState("");

  const handleWordForSearch = (word) => setWordForSearch(word);

  useEffect(() => {
    setProdFiltrados(
      productos.filter((item) => item.category === categoryClicked)
    );
  }, [categoryClicked]);

  return (
    <View>
      <Header title={`${categoryClicked}`} arrow={true} />
      <Searcher handleWordForSearch={handleWordForSearch} />
      <FlatList
        style={styles.container}
        data={prodFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //
          <ProductoCategorizado item={item} />
        )}
      />
    </View>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
  },
});
