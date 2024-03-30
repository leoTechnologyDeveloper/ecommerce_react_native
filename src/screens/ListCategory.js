import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import colors from "../utils/globals/colors";
// import productos from "../utils/data/products.json";
// import productos from "../utils/data/products2.json";
import { useGetProductsByCategoryQuery } from "../app/services/shop";
import { useState, useEffect } from "react";
import ProductoCategorizado from "../components/ProductoCategorizado";
import Searcher from "../components/Searcher";

const ListCategory = ({ route, navigation }) => {
  const { categoryClicked } = route.params;
  console.log(categoryClicked);
  const { data: products } = useGetProductsByCategoryQuery(categoryClicked);
  const [prodFiltrados, setProdFiltrados] = useState([]);
  const [wordForSearch, setWordForSearch] = useState("");
  // console.log("before filtrados : ", prodFiltrados);
  const handleWordForSearch = (word) => setWordForSearch(word);

  // console.log("productos traidos", products);

  useEffect(() => {
    if (categoryClicked) setProdFiltrados();
    // products.filter((item) => item.category === categoryClicked)
    // console.log("after filtrados : ", prodFiltrados);
  }, [categoryClicked]);

  return (
    <View>
      {/* <Header title={`${categoryClicked}`} arrow={true} /> */}
      {/* <Searcher handleWordForSearch={handleWordForSearch} /> */}
      <FlatList
        style={styles.container}
        // data={prodFiltrados}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          //
          <ProductoCategorizado item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default ListCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "whitesmoke",
  },
});
