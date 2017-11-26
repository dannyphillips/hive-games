import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default class PlayersScreen extends React.Component {
  static navigationOptions = {
    title: "Players"
  };

  render() {
    return <ScrollView style={styles.container} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
