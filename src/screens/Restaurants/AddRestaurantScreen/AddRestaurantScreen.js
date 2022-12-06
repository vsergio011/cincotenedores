import { ScrollView } from "react-native";
import React from "react";
import { Button, Input } from "@rneui/base";
import { styles } from "./AddRestaurantScreen.styles";
import {
  InfoForm,
  UploadImagesForm,
  ImageRestaurant,
} from "../../../components/Restaurants/AddRestaurants";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
export function AddRestaurantScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createdAt = new Date();

        const myDb = doc(db, "restaurants", newData.id);
        await setDoc(myDb, newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageRestaurant formik={formik} />
      <InfoForm formik={formik} />
      <UploadImagesForm formik={formik} />
      <Button
        title="Crear Restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </ScrollView>
  );
}
