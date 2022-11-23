import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { value, Icon } from "@rneui/base";
import { screen } from "../utils";

import { RestaurantStack } from "./RestaurantStack";
import { FavoriteStack } from "./FavoriteStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";

const Tab = createBottomTabNavigator();
export function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#00a680",
        tabBarInactiveTintColor: "#646464",
        tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
      })}
    >
      <Tab.Screen
        name={screen.restaurant.tab}
        component={RestaurantStack}
        options={{ title: "Restaurantes",headerShown: false, }}
        
      />
      <Tab.Screen
        name={screen.favorites.tab}
        component={FavoriteStack}
        options={{ title: "Favoritos" }}
      />
      <Tab.Screen
        name={screen.ranking.tab}
        component={RankingStack}
        options={{ title: "Ranking" }}
      />
      <Tab.Screen
        name={screen.search.tab}
        component={SearchStack}
        options={{ title: "Buscar" }}
      />
      <Tab.Screen
        name={screen.account.tab}
        component={AccountStack}
        options={{ title: "Cuenta" }}
      />
    </Tab.Navigator>
  );
}

function screenOptions(route, color, size) {
  let iconName;

  if (route.name === screen.restaurant.tab) {
    iconName = "silverware-fork-knife";
  }

  if (route.name === screen.favorites.tab) {
    iconName = "heart";
  }
  if (route.name === screen.ranking.tab) {
    iconName = "heart";
  }
  if (route.name === screen.search.tab) {
    iconName = "heart";
  }
  if (route.name === screen.account.tab) {
    iconName = "heart";
  }

  return (
    <Icon type="material-community" name={iconName} color={color} size={size} />
  );
}
