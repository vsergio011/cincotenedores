import react, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "@rneui/themed";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { screen, db } from "../../../utils";
import { styles } from "./RestaurantsScreen.styles";
import { LoadingModal } from "../../../components/Shared";
import { ListRestaurants } from "../../../components/Restaurants";
export function RestaurantsScreen(props) {
  const { navigation } = props;
  const [currentUser, setCurrentUser] = useState(null);
  const [restaurants, setRestaurants] = useState(null);
  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant);
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, "restaurants"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapShot) => {
      setRestaurants(snapShot.docs);
    });
  }, []);

  return (
    <View style={styles.content}>
      {!restaurants ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListRestaurants restaurants={restaurants}/>
      )}

      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="#00a680"
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
}
