import React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text } from "native-base";

export default class GameScreen extends React.Component {
  static navigationOptions = { title: "Game" };

  render() {
    const { navigation } = this.props;
    return (
      <Content>
        <Content style={styles.container} />
        <Text>{navigation.state.routeName}</Text>
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
