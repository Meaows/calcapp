import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import Item5 from "./components/Item5"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numerki: "",
            wynik: ""
        };
        this.handleCallback = this.handleCallback.bind(this)

    };
    handleCallback(childData) {
        if (childData == "C") {
            this.setState({ numerki: "", wynik: "" })
        }
        else if (childData == "=") {
            this.setState({ wynik: eval(this.state.numerki) })
        }
        else {
            if (childData == "/" || childData == "*" || childData == "-" || childData == "+") {
                if (this.state.numerki.includes("/") == false && this.state.numerki != ""
                && this.state.numerki.includes("*") == false && this.state.numerki.includes("-") == false
                && this.state.numerki.includes("+") == false) {
                    this.setState({ numerki: this.state.numerki + childData })
                }
            }
            // else if (childData == "*") {
            //     if (this.state.numerki.includes("*") == false && this.state.numerki != "") {
            //         this.setState({ numerki: this.state.numerki + childData })
            //     }
            // }
            // else if (childData == "-") {
            //     if (this.state.numerki.includes("-") == false && this.state.numerki != "") {
            //         this.setState({ numerki: this.state.numerki + childData })
            //     }
            // }
            // else if (childData == "+") {
            //     if (this.state.numerki.includes("+") == false && this.state.numerki != "") {
            //         this.setState({ numerki: this.state.numerki + childData })
            //     }
            // }
            else if (childData == ".") {
                if (this.state.numerki.includes(".") == false && this.state.numerki != "") {
                    this.setState({ numerki: this.state.numerki + childData })
                }
            }
            else {
                this.setState({ numerki: this.state.numerki + childData })
            };
        };

    };


    render() {
        var myloop = [];
        let numbers1 = ["1", "4", "7", "."]
        let numbers2 = ["2", "5", "8", "0"]
        let numbers3 = ["3", "6", "9", "="]
        let dzialania = ["C", "/", "*", "-", "+"]
        this.handleCallback
        let insideloop1 = numbers1.map((param) => {
            return <Item5 key={param} parentCallback={this.handleCallback} color="#666699" text={param} font="#FFFFFF" />
        })
        let insideloop2 = numbers2.map((param, i) => {
            return <Item5 key={param} parentCallback={this.handleCallback} color="#666699" text={param} font="#FFFFFF" />
        })
        let insideloop3 = numbers3.map((param, i) => {
            return <Item5 key={param} parentCallback={this.handleCallback} color="#666699" text={param} font="#FFFFFF" />
        })
        let insideloop4 = dzialania.map((param, i) => {
            return <Item5 key={param} parentCallback={this.handleCallback} color="#47476b" text={param} font="#FFFFFF" />
        })

        myloop.push(
            <View style={styles.container2} key="kluczyk">
                <View flex={1} key="ananas">
                    {insideloop1}
                </View>
                <View flex={1} key="japko">
                    {insideloop2}
                </View>
                <View flex={1} key="pizza">
                    {insideloop3}
                </View>
                <View flex={1} key="bebok">
                    {insideloop4}
                </View>
            </View>
        );

        let numerki = this.state.numerki
        return (

            <View style={styles.container}>
                <View style={styles.container3}>
                    <Text style={styles.textbox}>{numerki}</Text>
                </View>
                <View style={styles.container4}>
                    <Text style={styles.textbox2}>{this.state.wynik}</Text>
                </View>
                {myloop}
            </View>

        );
    };
}

    const kolory = ["#FF0000", "#00FF00", "#0000FF", "#ffa600"]
    const styles = StyleSheet.create({
        container: {
            flex: 1,

        },
        container2: {
            flex: 4,
            flexDirection: 'row'
        },
        container3: {
            justifyContent: "center",
            alignItems: "flex-end",
            flex: 2,
        },
        container4: {
            justifyContent: "center",
            alignItems: "flex-end",
            flex: 1,
        },
        textbox: {
            fontSize: 50,
        },
        textbox2: {
            fontSize: 40,
        }


    });