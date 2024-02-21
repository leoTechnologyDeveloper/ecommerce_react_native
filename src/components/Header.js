import { Pressable, StyleSheet, Text, View, BackHandler } from "react-native";
import colors from "../utils/globals/colors";

const Header = ({ title = "Ecommerce", arrow }) => {
  const handleBack = () => {
    BackHandler.exitApp();
  };

  // console.log(arrow);

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
      {arrow ? (
        <Pressable onPress={handleBack}>
          <Text style={styles.closeIcon}>✖</Text>
        </Pressable>
      ) : (
        ""
      )}
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
  closeIcon: {
    fontSize: 25,
    // color: colors.sea1,
    backgroundColor: "yellow",
    color: "darkblue",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    marginRight: 30,
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontSize: 30,
    width: "80%",
    fontFamily: "NotoSerifDisplay-VariableFont_wdth,wght",
  },
});
