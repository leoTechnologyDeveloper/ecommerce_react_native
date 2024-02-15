import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

const Home = ({ stateCategoryClicked }) => {
  return (
    <View>
      <Header title="Ecommerce Tech" arrow={false} />
      <Categories stateCategoryClicked={stateCategoryClicked} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});
