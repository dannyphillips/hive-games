import React from 'react';
import { StyleSheet, Text, Image, TextInput, Button, Switch, Alert, View } from 'react-native';
import { Container, Content } from 'native-base';
import Hive from './components/Hive';
import { Google } from "expo";

export default class App extends React.Component {
  state = {
    switchValue: false
  };
  _handleGoogleLogin = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email']
      });

      switch (type) {
        case 'success': {
          this.setState(()=> ({ switchValue: true}));
          Alert.alert(
            'Logged in!',
            `Hi ${user.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };
  _handleToggleSwitch = () => this.setState(state => ({
    switchValue: !state.switchValue
  }));
  render() {
    return (
      <Content>
        <Content style={styles.container}>
          <Button 
            title="Login with Google"
            onPress={this._handleGoogleLogin}
          />
          <Text>Logged In?</Text>
          <Switch
            onValueChange={this._handleToggleSwitch}
            value={this.state.switchValue}
          />
          <Hive />
          <Hive />
          <Hive />
          <Text>Open up App.js to start working on your app!</Text>
        </Content>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 157, 220)',
  },
});
