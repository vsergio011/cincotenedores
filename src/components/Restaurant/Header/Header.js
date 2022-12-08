import { View } from "react-native";
import React from "react";
import { Text, Rating } from "@rneui/base";
import { styles } from "./Header.styles";
export function Header(props) {
  const { restaurant } = props;
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Rating imageSize={20} showRating />
      </View>
      <Text style={styles.description}>{restaurant.description}</Text>
    </View>
  );
}
