import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./MapForm.styles";
import { Modal } from "../../../Shared";
import Toast from "react-native-toast-message";
import * as Location from "expo-location";

export function MapForm(props) {
  const { show, close } = props;
  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tienes que ir a ajustes de la app y activar la localizacion",
        });
        return;
      }
      
      const locationTemp = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });

    })();
  }, []);

  return (
    <Modal show={show} close={close}>
      <Text>MapForm</Text>
    </Modal>
  );
}
