import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>

      <View style={styles.imgContainer}>
        <Image style={styles.image} source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}/>
      </View>
        
      <View style={styles.textContainer}>
        <Text style={styles.text}> Hello World</Text>
        <Text style={styles.text}> ma name ernie</Text>
        <Text style={styles.text}> shakkabrah!</Text>
        <View style={styles.box}/>
      </View>
     
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  scrollView: {
    flex: 1
  },
    box: {
    justifyContent: "flex-end",
    width: 400,
    height: 200,
    backgroundColor: 'white',
    borderWidth: 4,
    borderColor: 'gray',
    borderRadius: 20,
    //position: 'absolute'
  },
    text: {
    backgroundColor: 'whitesmoke',
    justifyContent: "flex-end",
    color: '#4A90E2',
    fontSize: 24,
    padding: 10,

    },

    image: {
    width: 200,
    height: 200
    //position: "left",
  },
});
