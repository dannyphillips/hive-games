import React from "react";
import { StyleSheet } from "react-native";
import { Container, Header, Content, List, Text } from "native-base";
import PlayerCard from "../components/PlayerCard";

export default class LobbyScreen extends React.Component {
  static navigationOptions = { title: "Lobby" };

  render() {
    const { players, size } = this.props;
    return (
      <Container>
        <Header>
          <Text>
            Active Players ({players.length}/{size})
          </Text>
        </Header>
        <Content>
          <List>
            {players.map((player, i) => {
              return <PlayerCard key={i} />;
            })}
          </List>
        </Content>
      </Container>
    );
  }
}

LobbyScreen.defaultProps = {
  players: [{}, {}, {}, {}, {}],
  size: 7
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff"
  }
});
