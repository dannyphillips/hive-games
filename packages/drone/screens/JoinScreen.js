import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content } from "native-base";
import Game from "../components/Game";

import catanLogo from "../assets/images/catan-logo.png";
import catan from "../assets/images/catan.png";
import applesLogo from "../assets/images/apples-logo.png";
import apples from "../assets/images/apples.png";
import quixxLogo from "../assets/images/quixx-logo.png";
import quixx from "../assets/images/quixx.png";

export default class JoinScreen extends React.Component {
  static navigationOptions = { title: "Join" };

  render() {
    return (
      <Content>
        <Content style={styles.container}>
          <Game
            name={"Apples to Apples"}
            description={"Win the game!"}
            max={5}
            filled={3}
            thumbnail={applesLogo}
            image={apples}
          />
          <Game
            name={"Settlers of Catan"}
            description={"Win the game!"}
            max={4}
            filled={2}
            thumbnail={catanLogo}
            image={catan}
          />
          <Game
            name={"Quixx"}
            description={"Win the game!"}
            max={8}
            filled={1}
            thumbnail={quixxLogo}
            image={quixx}
          />
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
