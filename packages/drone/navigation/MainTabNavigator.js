import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TabNavigator, TabBarBottom } from "react-navigation";

import Colors from "../constants/Colors";

import JoinScreen from "../screens/JoinScreen";
import LobbyScreen from "../screens/LobbyScreen";
import GameScreen from "../screens/GameScreen";
import PlayersScreen from "../screens/PlayersScreen";
import SettingsScreen from "../screens/SettingsScreen";

export default TabNavigator(
  {
    Join: {
      screen: JoinScreen
    },
    Lobby: {
      screen: LobbyScreen
    },
    Game: {
      screen: GameScreen
    },
    Links: {
      screen: PlayersScreen
    },
    Settings: {
      screen: SettingsScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case "Join":
            iconName =
              Platform.OS === "ios"
                ? `ios-add-circle${focused ? "" : "-outline"}`
                : "md-add-circle";
            break;
          case "Lobby":
            iconName =
              Platform.OS === "ios"
                ? `ios-game-controller-b${focused ? "" : "-outline"}`
                : "md-game-controller-b";
            break;
          case "Game":
            iconName =
              Platform.OS === "ios"
                ? `ios-information-circle${focused ? "" : "-outline"}`
                : "md-information-circle";
            break;
          case "Links":
            iconName =
              Platform.OS === "ios"
                ? `ios-link${focused ? "" : "-outline"}`
                : "md-link";
            break;
          case "Settings":
            iconName =
              Platform.OS === "ios"
                ? `ios-options${focused ? "" : "-outline"}`
                : "md-options";
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);
