import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Body,
  Button,
  Card,
  CardItem,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail
} from "native-base";
import thumbnail from "../assets/images/hive.png";
import image from "../assets/images/drone.png";

export default class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.description}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={image} style={styles.logo} />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="people" />
              <Text>
                {this.props.drones} / {this.props.honeycombs} Drones
              </Text>
            </Button>
          </Left>
          <Right>
            <Button bordered>
              <Text>+ Join</Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}

Game.defaultProps = {
  name: "DefaultName",
  description: "This is a description",
  thumbnail: "../assets/images/hive.png",
  image: "../assets/hive",
  drones: 5,
  honeycombs: 7,
  openings: 2
};

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: null,
    flex: 1
  }
});
