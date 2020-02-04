import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from "react-native";

const {width: WIDTH} = Dimensions.get('window');

class Home extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.view}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('Scan')}>
                    <Text style={styles.text}>Scanner un code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('List')}>
                    <Text style={styles.text}>Liste des codes scannés</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    btn:{
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop:30,
        marginLeft:'auto',
        marginRight:'auto'
    },
    text:{
        color: 'white',
        fontSize:16,
        textAlign:'center'
    }
});
export default Home;