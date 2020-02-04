import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, AsyncStorage} from "react-native";

const {width: WIDTH} = Dimensions.get('window');

class Home extends React.Component {

    constructor() {
        super();
        this.state = {userId: this.getUserId()}
    }

    getUserId() {
        this._retrieveData()
    }

    _retrieveData = async () => {
        const value = await AsyncStorage.getItem('user')
        this.setState({userId:value})
            // console.log('value : ' + value);
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('Scan', this.state.userId)}>
                    <Text style={styles.text}>Scanner un code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('Promo', this.state.userId)}>
                    <Text style={styles.text}>Liste des codes scannés</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    }
});
export default Home;