import { View, ScrollView } from "react-native";
import { Text, Image } from "@rneui/base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./LoginScreen.styles";
import { screen } from "../../../utils";
export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <View>
      <Image
        source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
        style={styles.image}
      />
      <View style = {styles.content}>
        <Text>Estamos en el login</Text>
        <Text onPress={goToRegister}>Registrarse</Text>
      </View>
    </View>
  );
}
