import { View, Text } from "react-native";
import React from "react";
import { Input, Button } from "@rneui/base";
import { styles } from "./ChangeDisplayNameForm.styles";
import {getAuth,updateProfile} from "firebase/auth"
import { useFormik } from "formik";
import  Toast  from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
export function ChangeDisplayNameForm(props) {
  const {onClose,onReload} = props;
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const {displayName} = formValue;
        const currentUser = getAuth().currentUser;
        await updateProfile(currentUser,{displayName})
        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: "error",
          position: "bottom",
          text1:"Error al cambiar el nombre y apellido"
        })
      }
    },
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Nombre y apellido"
        rightIcon={{
          type: "material-community",
          name: "account-circle-outline",
          color: "#c2c2c2",
        }}
        onChangeText={(text) => formik.setFieldValue("displayName", text)}
        errorMessage = {formik.errors.displayName}
      />
      <Button
        title="Cambiar"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress = {formik.handleSubmit}
        loading = {formik.isSubmitting}
      />
    </View>
  );
}
