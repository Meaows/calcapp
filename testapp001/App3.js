

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Item2 from "./components/Item2"

export default class App extends React.Component {
  render() {
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>
          {
              kolory.map(function(kolor, i){
                console.log('test');
                b = "item " + (i+1)
                return <Item2 key={i} color = {kolor} text = {b}/>
              })
          }
      </View>
      
    );
  }
}

const kolory = ["#FF0000", "#00FF00", "#0000FF", "#ffa600", "#c46dc4", "#565656"]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',   
  }, 
 
});