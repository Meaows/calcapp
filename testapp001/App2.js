

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


import Item1 from "./components/Item1"

export default class App extends React.Component {
  render() {
    console.log("App") // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>
          {/* <Item1 flex ={ananas.header.flex} color = {ananas.header.backgroundColor}/>
          <Item1 flex ={ananas.content.flex} color = {ananas.content.backgroundColor}/> */}
          <Item1 flex = {1} color = "#FF0000" text = "header"/>
          <Item1 flex = {2} color = "#00FF00" text = "content"/>
          <Item1 flex = {1} color = "#0000FF" text = "footer"/>
      </View>
      
    );
  }
}

// const ananas = {
//     header: {
//       flex: 1,
//       backgroundColor: "#FF0000"
//   },
//   content: {
//     flex: 2,
//     backgroundColor: "#00FF00"
//   },
//   footer: {
//     flex: 1,
//     backgroundColor: "#0000FF"
//   }
// }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff00',   
  }, 
 
});