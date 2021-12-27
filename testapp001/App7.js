

import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Item4 from "./components/Item4"

export default class App extends React.Component {


    render() {
        console.log("App") // tą konsolę zobacz w przeglądarce
        var myloop = [];
        let insideloop1 = kolory.map(function (kolor, i) {
            console.log('test');
            b = (i + 1)
            return <Item4 key={i} color={kolor} text={b} font="#FFFFFF" />
        })
        // let insideloop2 = kolory.map(function (kolor, i) {
        //   console.log('test');
        //   b = (i + 1)
        //   return <Item3 key={i} color={kolor} text={b} font="#000000" />
        // })
        for (let i = 0; i < 3; i++) {
            myloop.push(
                <View key={i} style={styles.container}>
                    <View style={styles.container2}>
                        {insideloop1}


                    </View>
                    <View flex={1}>
                        {insideloop1}
                    </View>
                </View>
            );
        }

        return (
            <View style={styles.container}>
                {myloop}
            </View>

        );
    }
}

const kolory = ["#FF0000", "#00FF00", "#0000FF", "#ffa600", "#c46dc4", "#565656"]
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff00',
        flexDirection: 'row'
    },
    container2: {
        flex: 1,
        flexDirection: 'column-reverse'
    },

});