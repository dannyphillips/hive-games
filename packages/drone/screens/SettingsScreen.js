import React from "react";
import { Switch } from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Settings"
  };

  render() {
    return <Switch />;
  }
}
