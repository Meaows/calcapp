import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
class Item5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onPress = this.onPress.bind(this)
    }
    onPress() {
        this.props.parentCallback(this.props.text)
    };
    render() {

        return (
            <TouchableOpacity style={{ flex: 1, backgroundColor: this.props.color }} onPress={this.onPress}>
                <Text style={{ color: this.props.font, fontSize: 48 }}> {this.props.text} </Text>
            </TouchableOpacity>
        );
    }
}

export default Item5;