import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/base";
import React from "react";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import {initialValues} from "./RegisterForm.data";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formValue) =>{
      console.log("formulario enviado")
      console.log(formValue)
    }
  });
  return (
    <View style={styles.content}>
      <Input
        placeholder="Correo electronico"
        containerStyle={styles.input}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
        onChangeText = {text => formik.setFieldValue("email",text)}
      />
      <Input
        placeholder="Contraseña"
        secureTextEntry={true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText = {text => formik.setFieldValue("password",text)}
      />
      <Input
        placeholder="Repetir contraseña"
        secureTextEntry={true}
        containerStyle={styles.input}
        rightIcon={
          <Icon
            type="material-community"
            name="eye-outline"
            iconStyle={styles.icon}
          />
        }
        onChangeText = {text => formik.setFieldValue("repeatPassword",text)}
      />

      <Button
        title="Unirse"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress = {formik.handleSubmit}
      />
    </View>
  );
}
