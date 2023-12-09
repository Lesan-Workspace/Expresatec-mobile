import React from "react";

import HomeScreen from "../screens/Main/HomeScreen";
import GameScreen from "../screens/Main/GameScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";


const Drawer = createDrawerNavigator();

function MainStackNavigation() {

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default MainStackNavigation;
