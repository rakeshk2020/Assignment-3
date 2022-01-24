import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  incrementValue = () => {
    this.setState({count: this.state.count + 1})
  }
  decrementValue = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <>
      <View style={styles.container}>
      <Image
              resizeMode="contain"
              resizeMethod="resize"
              source={require('./Images/photo.png')}
          />
        <Text style ={[styles.setFontSize,styles.setColorBlue]}> My Counter App </Text>
        <Text style={{fontSize: 40, fontWeight: 'bold'}}>{this.state.count}</Text>
        <Button
        title="Increase"
        onPress={this.incrementValue}
        />
        <View style={{padding: 30}} />
        <Button
        title="Decrease"
        onPress={this.decrementValue}
        />
      </View>
        </>
    );
  }
}

    

const styles = StyleSheet.create ({
  img: {
    width: '10%',
    position: 'absolute',
    alignItems: 'center',
    left: 5,
    right: 10,
    top: 0,
  },
  setFontSize: {
    fontSize: 25,
    fontWeight : 'bold', 
  },
  setColorBlue : {
    color: '#61dbfb'
  },
  container: {
    flex: 1,
    backgroundColor:'#F4F5FF',
    alignItems:'center',
    justifyContent:'center',
  }
  
});

