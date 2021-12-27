import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Item2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1,backgroundColor:this.props.color}}>
        <Text style={styles.text}> {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48, }
});
export default Item2;