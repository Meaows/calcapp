import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
class Item4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onPress = this.onPress.bind(this)
    }
    onPress() {
        alert("id: " + this.props.text + " bg: " + this.props.color);
    };
    render() {
        return (
            <TouchableOpacity style={{ flex: 1, backgroundColor: this.props.color }} onPress={this.onPress}>
                <Text style={{ color: this.props.font, fontSize: 48 }}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

export default Item4;