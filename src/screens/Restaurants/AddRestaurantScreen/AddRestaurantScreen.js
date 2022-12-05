import { ScrollView } from "react-native";
import React from "react";
import { Button,Input } from "@rneui/base";
import { styles } from "./AddRestaurantScreen.styles";
import { InfoForm,UploadImagesForm,ImageRestaurant } from "../../../components/Restaurants/AddRestaurants";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";
import { useFormik } from "formik";

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
      <ImageRestaurant formik={formik}/>
      <InfoForm  formik={formik}/>
      <UploadImagesForm formik={formik}/>
      <Button
        title="Crear Restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading = {formik.isSubmitting}
      />
    </ScrollView>
  );
}
