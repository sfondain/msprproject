import React from "react";
import {View, Text, StyleSheet, Dimensions, TouchableOpacity,BackHandler,AsyncStorage} from "react-native";

const {width: WIDTH} = Dimensions.get('window');

class Home extends React.Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {return true;});
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('user', '');
        } catch (error) {
            // Error saving data
        }
    };

    logout(){
        const {navigate} = this.props.navigation;
        this._storeData()
        navigate('Login')
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('Scan')}>
                    <Text style={styles.text}>Scanner un code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigate('Promo')}>
                    <Text style={styles.text}>Liste des codes scannés</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnDeco}
                    onPress={() => {this.logout()}}>
                    <Text style={styles.text}>Déconnexion</Text>
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
    },
    btnDeco:{
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        backgroundColor: 'red',
        justifyContent:'center',
        marginTop:30,
        marginLeft:'auto',
        marginRight:'auto'
    }
});
export default Home;