import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base';
import {styles} from "./ImageRestaurant.styles"
export function ImageRestaurant(props) {
    const {formik} = props;

    const primaryImage = formik.values.images[0];

  return (
    <View style={styles.content}>
      <Image 
      source={primaryImage ? {uri:primaryImage}:require("../../../../../assets/img/imagen-no-found.png")}
      style={styles.image}/>
    </View>
  )
}