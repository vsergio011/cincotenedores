import { View, ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/base";
import React from "react";
import { styles } from "./UserGuestScreen.styles";
import { useNavigation } from "@react-navigation/native";
import {screen} from "../../../utils"
export function UserGuestScreen() {
  const navigation = useNavigation();
  const goTologin = () => {
    navigation.navigate(screen.account.login);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Consultar un perfil de 5 tenedores</Text>
      <Text style={styles.description}>
        ¿Como describirias tu mejor restaurante? busca y visualiza los mejores
        restaurantes de forma sencilla
      </Text>
      <View>
        <Button
          title="Ver tu perfil"
          onPress={goTologin}
          buttonStyle={styles.btnStyle}
        />
      </View>
    </ScrollView>
  );
}
