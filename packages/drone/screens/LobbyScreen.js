import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, List } from "native-base";
import PlayerCard from "../components/PlayerCard";

export default class LobbyScreen extends React.Component {
  static navigationOptions = { title: "Lobby" };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
            <PlayerCard />
          </List>
        </Content>
      </Container>
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
