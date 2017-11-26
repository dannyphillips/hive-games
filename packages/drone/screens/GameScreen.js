import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";

export default class GameScreen extends React.Component {
  static navigationOptions = { title: "Game" };

  render() {
    return (
      <Content>
        <Content style={styles.container} />
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});
