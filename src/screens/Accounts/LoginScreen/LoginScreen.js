import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginScreen.styles";
import { LoginForm } from "../../../components/Auth/LoginForm";
import { screen } from "../../../utils";
export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />
        
        <Text style={styles.textRegister}>
          ¿aun no tienes cuenta?{" "}
          <Text style={styles.btnRegister} onPress={goToRegister}>
            Registrarse
          </Text>{" "}
        </Text>
      </View>
    </ScrollView>
  );
}
