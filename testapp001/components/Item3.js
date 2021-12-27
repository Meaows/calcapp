import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
class Item3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{flex:1,backgroundColor:this.props.color}}>
        <Text style={{color:this.props.font, fontSize: 48}}> {this.props.text} </Text>
      </View>
    );
  }
}

export default Item3;