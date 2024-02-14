import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import colors from "../utils/globals/colors";
import productos from "../utils/data/products.json";
import { useState, useEffect } from "react";
import ProductoCategorizado from "../components/ProductoCategorizado";

const ListCategory = ({ categoryClicked }) => {
  const [prodFiltrados, setProdFiltrados] = useState([]);

  useEffect(() => {
    setProdFiltrados(
      productos.filter((item) => item.category === categoryClicked)
    );
  }, [categoryClicked]);

  return (
    <View>
      <Header title={`Categoria ${categoryClicked}`} />
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
