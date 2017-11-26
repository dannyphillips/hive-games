import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import Game from "../components/Game";

export default class JoinScreen extends React.Component {
  static navigationOptions = { title: "Join" };

  render() {
    return (
      <Content>
        <Content style={styles.container}>
          <Game />
          <Game />
          <Game />
        </Content>
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
