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
import hive from "../assets/images/hive.png";
import drone from "../assets/images/drone.png";

export default class GameCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filled, max, name, description, thumbnail, image } = this.props;
    return (
      <Card>
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
        <CardItem>
          <Left>
            <Button transparent>
              <Icon active name="people" />
              <Text>
                {filled} / {max} Players
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

GameCard.defaultProps = {
  name: "DefaultName",
  description: "This is a description",
  thumbnail: hive,
  image: drone,
  max: 5,
  filled: 7
};

const styles = StyleSheet.create({
  logo: {
    height: 400,
    width: null,
    flex: 1
  }
});
