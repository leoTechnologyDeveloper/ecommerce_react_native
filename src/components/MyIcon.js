import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../utils/globals/colors";

const MyIcon = ({ title, focused }) => {
  return (
    <View style={focused ? styles.container : null}>
      {title == "Home" ? (
        <>
          <Text style={styles.IconStyles}>🏠</Text>
          <Text style={focused ? styles.IconText : styles.IconText2}>
            {title}
          </Text>
        </>
      ) : title == "Cart" ? (
        <>
          <Text style={styles.IconStyles}>🛒</Text>
          <Text style={focused ? styles.IconText : styles.IconText2}>
            {title}
          </Text>
        </>
      ) : title == "Order" ? (
        <>
          <Text style={styles.IconStyles}>📄</Text>
          <Text style={focused ? styles.IconText : styles.IconText2}>
            {title}
          </Text>
        </>
      ) : (
        <>
          <Text style={styles.IconStyles}>🖐</Text>
          <Text style={focused ? styles.IconText : styles.IconText2}>
            {title}
          </Text>
        </>
      )}
    </View>
  );
};

export default MyIcon;

const styles = StyleSheet.create({
  IconText: {
    color: colors.dark,
    backgroundColor: colors.light2,
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
    paddingHorizontal: 8,
    marginTop: 5,
  },
  IconText2: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    alignSelf: "center",
  },
  IconStyles: {
    alignSelf: "center",
    fontSize: 22,
  },
  container: {
    borderColor: "white",
    borderWidth: 0.5,
  },
});
