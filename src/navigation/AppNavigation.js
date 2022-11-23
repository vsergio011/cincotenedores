import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import { FavoritesScreen } from "../screens/FavoritesScreen";
import { RankingScreen } from "../screens/RankingScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { AccountScreen } from "../screens/AccountsScreen";
const Tab = createBottomTabNavigator();
export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route,color,size),
      })}
    >
      <Tab.Screen name="Restaurant" component={RestaurantsScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Ranking" component={RankingScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

function screenOptions(route,color,size){
    let iconName;
    
    if(route.name === "Restaurant"){
        iconName = "devices";
    }

    if(route.name === "Favorites"){
        iconName = "heart";
    }

return (
    <Icon
      type="material"
      name={iconName}
      color={color}
      size={size}
    />
  );

}

