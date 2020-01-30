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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'GoStyle',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
        <Button
            title="Scanner un code"
            onPress={() => navigate('Scan')}
        />
    );
  }
}

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Scan: {screen: Scanner},
});

const App = createAppContainer(MainNavigator);

export default App;