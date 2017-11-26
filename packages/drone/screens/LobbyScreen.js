import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  List,
  Text,
  CardItem,
  Left,
  Thumbnail,
  Body
} from "native-base";
import PlayerCard from "../components/PlayerCard";
import hive from "../assets/images/hive.png";
import drone from "../assets/images/drone.png";

export default class LobbyScreen extends React.Component {
  static navigationOptions = { title: "Lobby" };

  render() {
    const { players, size, name, description, thumbnail, image } = this.props;
    return (
      <Container>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{name}</Text>
              <Text note>{description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={image} style={styles.logo} />
        </CardItem>
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
  size: 7,
  name: "DefaultName",
  description: "This is a description",
  thumbnail: hive,
  image: drone
};

const styles = StyleSheet.create({
  logo: {
    height: 150,
    width: null,
    flex: 1
  }
});
