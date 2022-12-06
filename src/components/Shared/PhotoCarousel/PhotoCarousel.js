import { View, Text } from 'react-native'
import React from 'react'
import {styles} from './PhotoCarousel.styles'
import Carousel from 'react-native-snap-carousel';
import { Image } from '@rneui/base';
export function PhotoCarousel(props) {
    const {arrayImages,width,height} = props;
    const renderItem = ({item}) =>(
        <Image source={{uri:item}} style={{height,width}}/>
    )
  return (
    <View style={styles.content}>
      <Carousel
        layout='default'
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
      />
    </View>
  )
}