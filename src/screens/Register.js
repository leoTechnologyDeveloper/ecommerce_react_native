import { StyleSheet, Text, View, Pressable } from "react-native";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useState } from "react";
// import colors from "../utils/globals/colors";
// import fonts from "../utils/globals/fonts";
import { useLoginMutation } from "../app/services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
// import { loginSchema } from "../utils/validations/authSchema";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerLogin] = useLoginMutation();

  const onSubmit = async () => {
    try {
      loginSchema.validateSync({ email, password });
      const { data } = await triggerLogin({ email, password });
      dispatch(
        setUser({
          email: data.email,
          idToken: data.idToken,
          localId: data.localId,
        })
      );
    } catch (error) {
      setErrorEmail("");
      setErrorPassword("");

      switch (error.path) {
        case "email":
          setErrorEmail(error.message);
          break;
        case "password":
          setErrorPassword(error.message);
          break;
        default:
          break;
      }
    }
  };

  // const onSubmit = () => {
  //   console.log("Mail : ", email);
  //   console.log("Password : ", password);
  // };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <InputForm
          label="Email"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={errorEmail}
        />
        <InputForm
          label="Password"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <InputForm
          label="Confirmar Password"
          value={confirmpassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={errorPassword}
        />
        <SubmitButton onPress={onSubmit} title="Registrarme" />
        <Text style={styles.sub}>Ya tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Inici de Sesión</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  container: {
    width: "90%",
    backgroundColor: "whitesmoke",
    gap: 15,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    // fontFamily: fonts.LobsterRegular,
  },
  sub: {
    fontSize: 24,
    // fontFamily: fonts.JosefinSansBold,
  },
  subLink: {
    fontSize: 24,
    // fontFamily: fonts.JosefinSansBold,
    color: "brown",
    borderWidth: 2,
    borderColor: "brown",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
  },
});
