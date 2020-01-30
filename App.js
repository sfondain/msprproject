import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Scanner from './Scanner';
import List from './List';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'GoStyle',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <View>
          <Button
              title="Scanner un code"
              onPress={() => navigate('Scan')}
              color="red"
          />
          <Button
              title="Liste des codes scannés"
              onPress={() => navigate('List')}
          />
        </View>
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Scan: {screen: Scanner},
  List: {screen: List},
});

const App = createAppContainer(MainNavigator);

export default App;

