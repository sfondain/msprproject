import React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.test}>J'ai le pire groupe</Text>
      <Button
          title="SPOILER"
          onPress={() => alert('Pierre est le pire des 3')}
      />
      <ImageBackground style={ styles.imgBackground }
                       resizeMode='cover'
                       source={require('./assets/java.png')}>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  test: {
    fontSize:45,
    textAlign:'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
});
