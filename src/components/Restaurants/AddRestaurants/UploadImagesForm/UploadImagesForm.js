import { Alert, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./UploadImagesForm.styles";
import * as ImagePicker from "expo-image-picker";
import { getStorage, ref, uploadBytes, getDownloadURL,deleteObject } from "firebase/storage";
import { Icon, Avatar, Text } from "@rneui/base";
import { map, filter } from "lodash";
import { v4 as uuid } from "uuid";
import { LoadingModal } from "../../../Shared";
export function UploadImagesForm(props) {
  const { formik } = props;
  const [isLoading, setIsLoading] = useState(false);
  const openGallery = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setIsLoading(true);
      uploadImage(result.uri);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `restaurants/${uuid()}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoRestaurant(snapshot.metadata.fullPath);
    });
  };

  const updatePhotoRestaurant = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);
    const imageUrl = await getDownloadURL(imageRef);
    console.log("obtengo url" + imageRef);
    formik.setFieldValue("images", [...formik.values.images, imageUrl]);
    setIsLoading(false);
  };

  const removeImage = (img) => {
    Alert.alert(
      "Eliminar imagen",
      "¿Seguro que quieres eliminar esta imagen?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Eliminar",
          onPress: async () => {
            const result = filter(
              formik.values.images,
              (image) => image !== img
            );

            const storage = getStorage()
            const imageRef = ref(storage, img)
            deleteObject(imageRef).then(() => { 
              console.log("la imagen se elimino");
              formik.setFieldValue("images", result);
            }).catch((error) => {
              console.log("ocurrio un error: ", error)
            })
           
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <>
      <ScrollView
        style={styles.viewImage}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Icon
          type="material-community"
          name="camera"
          color="#a7a7a7"
          containerStyle={styles.containerIcon}
          onPress={openGallery}
        />
        {map(formik.values.images, (image) => (
          <Avatar
            key={image}
            source={{ uri: image }}
            containerStyle={styles.imageStyle}
            onPress={() => removeImage(image)}
          />
        ))}
        <Text style={styles.error}>{formik.errors.images}</Text>
        <LoadingModal show={isLoading} text="subiendo imagen" />
      </ScrollView>
    </>
  );
}
