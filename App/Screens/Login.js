import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';


//Appel API
import {login} from "../API/PromoAPI";
import md5 from 'md5';

//Images
import bgImage from '../Image/background.jpg'
import logo from '../Image/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window')


export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {mail: '',password:''};
    }
    _storeData = async (id) => {
        try {
            await AsyncStorage.setItem('user', id);
        } catch (error) {
            // Error saving data
        }
    }
    connection(){
        const {navigate} = this.props.navigation;
        login(this.state.mail,md5(this.state.password)).then(data => {
            if(data.error){
              alert("Login ou mot de passe Incorrect !")
            }
            else{
                this._storeData(data.data.id)
                navigate('Home')
            }
        });
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo}/>
                    <Text style={styles.logoText}>GoStyle</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Icon name={'md-mail'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                        placeholder={'Mail'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({mail: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-lock'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Mot de passe'}
                               secureTextEntry={true}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.setState({password: text})}
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin}
                                  onPress={() => {this.connection()}}>
                    <Text style={styles.text}>Connexion</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSignup} onPress={() => navigate('Signup')}>
                    <Text style={styles.text}>Inscription</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
      flex:1,
      width:null,
        height:null,
        alignItems:'center'
    },
    logoContainer:{
        alignItems: 'center',
        marginBottom:50
    },
    logo:{
        width:120,
        height:120
    },
    logoText:{
        color:'black',
        fontSize:20,
        fontWeight:'500',
        marginTop:10,
        opacity: 0.5
    },
    inputContainer:{
        marginTop: 10
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        paddingLeft: 45,
        marginHorizontal: 25,
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37
    },
    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop:20
    },
    btnSignup:{
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop:20
    },
    text:{
        color: 'white',
        fontSize:16,
        textAlign:'center'
    }
});