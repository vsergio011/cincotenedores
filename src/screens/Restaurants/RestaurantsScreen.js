import react from "react";
import { View,Text } from "react-native";
import { Button } from "@rneui/themed";
import{screen} from "../../utils"

export default function RestaurantsScreen(props){
    const {navigation} = props;
    const goToAddRestaurant = () => {
        navigation.navigate(screen.restaurant.addRestaurant)
    }

    const goToAccount = () => {
        //viajar a una pantalla en un stack distinto
        navigation.navigate(screen.account.tab,{screen:screen.account.account})
    }
    return(

        <View>
            <Text>Estamos en la screen de restaurantes</Text>
            <Button title="crear restaurante" onPress={goToAddRestaurant}/> 
            <Button title="ir a account" onPress={goToAccount}/>
        </View>
        
    )
}