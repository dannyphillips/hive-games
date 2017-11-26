import React from "react";
import { StyleSheet } from "react-native";
import {
  Body,
  Button,
  Left,
  Right,
  ListItem,
  Icon,
  Text,
  Thumbnail
} from "native-base";
import player from "../assets/images/robot-dev.png";

export default class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, battleCry, thumbnail } = this.props;
    return (
      <ListItem avatar>
        <Left>
          <Thumbnail size={80} source={thumbnail} />
        </Left>
        <Body>
          <Text>{name}</Text>
          <Text note>{battleCry}</Text>
        </Body>
        <Right>
          <Button transparent>
            <Icon active name="information-circle" />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

PlayerCard.defaultProps = {
  name: "Danny Phillips",
  battleCry: "This is a battleCry",
  thumbnail: player
};

const styles = StyleSheet.create({});
