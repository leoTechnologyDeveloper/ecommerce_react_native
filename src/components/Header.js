import { Pressable, StyleSheet, Text, View, BackHandler } from "react-native";
import colors from "../utils/globals/colors";

const Header = ({ title = "Ecommerce", arrow }) => {
  const handleBack = () => {
    // BackHandler.exitApp();
  };

  console.log(arrow);

  return (
    <View style={styles.header}>
      {arrow ? (
        <Pressable onPress={handleBack}>
          <Text style={styles.backArrow}>◀</Text>
        </Pressable>
      ) : (
        ""
      )}
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.primary,
    height: "auto",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  backArrow: {
    fontSize: 30,
    color: colors.sea1,
    alignSelf: "center",
    width: "20",
    marginRight: 30,
  },
  text: {
    color: "white",
    fontSize: 30,
    width: "80%",
    fontFamily: "NotoSerifDisplay-VariableFont_wdth,wght",
  },
});
