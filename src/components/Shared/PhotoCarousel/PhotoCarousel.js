import { View, Text } from "react-native";
import React,{useState} from "react";
import { styles } from "./PhotoCarousel.styles";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Image } from "@rneui/base";
import {size} from "lodash"
export function PhotoCarousel(props) {
  const { arrayImages, width, height, hideDots } = props;
  const [activeDotIndex, setActiveDotIndex] = useState(0)
  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={{ height, width }} />
  );

  function pagination(){
    return (
      <Pagination
        dotsLength={size(arrayImages)}
        activeDotIndex={activeDotIndex}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.dotsContainer}
        dotStyle={styles.dot}
      />
    );
  };

  return (
    <View style={styles.content}>
      <Carousel
        layout="default"
        data={arrayImages}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(Index)=>setActiveDotIndex(Index)}
      />
      {!hideDots && pagination()}
 
    </View>
  );
}
