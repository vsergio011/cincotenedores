import { ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../utils";
import { styles } from "./RestaurantScreen.styles";
import { PhotoCarousel, Loading } from "../../../components/Shared";
import { Header,Info } from "../../../components/Restaurant";
const { width } = Dimensions.get("window");

export function RestaurantScreen(props) {
  const { route } = props;
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);
  console.log(route.params);
  if (!restaurant)
    return <Loading show text="Cargando restaurantes" hideDots/>;

  return (
    <ScrollView style={styles.content}>
      <PhotoCarousel
        arrayImages={restaurant.images}
        height={250}
        width={width}
      />
      <Header restaurant={restaurant} />
      <Info restaurant={restaurant}/>
    </ScrollView>
  );
}
