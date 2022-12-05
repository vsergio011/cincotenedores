import { View } from "react-native";
import React, {useState} from "react";
import { Input } from "@rneui/base";
import { styles } from "./InfoForm.styles";
import { MapForm } from "../MapForm";
export function InfoForm(props) {
  const { formik } = props;
  const [showMap, setShowMap] = useState(false)
  const onOpenCloseMap = () => setShowMap((prevState) => !prevState)
  return (
    <>
      <View style={styles.content}>
        <Input
          placeholder="Nombre del restaurante"
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder="Direccion"
          onChangeText={(text) => formik.setFieldValue("address", text)}
          errorMessage={formik.errors.address}
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius",
            color: "#c2c2c2",
            onPress: onOpenCloseMap,
          }}
        />
        <Input
          placeholder="Telefono"
          onChangeText={(text) => formik.setFieldValue("phone", text)}
          errorMessage={formik.errors.phone}
        />
        <Input
          placeholder="Email"
          onChangeText={(text) => formik.setFieldValue("email", text)}
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Descripcion del restaurante"
          multiline={true}
          inputContainerStyle={styles.textArea}
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
      </View>
      <MapForm show={showMap} close={onOpenCloseMap}/>
    </>
  );
}
