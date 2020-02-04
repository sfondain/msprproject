import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';

//Appel API
import {signup} from "../API/PromoAPI";

import bgImage from '../Image/background.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
import {login} from "../API/PromoAPI";
import md5 from "md5";

const {width: WIDTH} = Dimensions.get('window')
export default class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {firstname: '',lastname:'',mail:'',password:'',passwordV:'',hidePassword:true,hidePasswordV:true};
    }
    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    setPasswordVisibilityV = () => {
        this.setState({ hidePasswordV: !this.state.hidePasswordV });
    }
    signup(){
        const {navigate} = this.props.navigation;
        if(this.state.firstname == '' || this.state.lastname == '' || this.state.mail == '' || this.state.password == '' || this.state.passwordV == ''){
            alert("Veuillez renseigner tout les champs")
        }
        else {
            if (this.state.password != this.state.passwordV) {
                alert("Veuillez saisir deux fois le même mot de passe")
            } else {
                signup(this.state.mail, md5(this.state.password), this.state.firstname, this.state.lastname).then(data => {
                    if (data.error) {
                        alert(data.error)
                    } else {
                        alert(data.data)
                        navigate('Login')
                    }
                });
            }
        }
    }
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Inscription</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-person'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Nom'}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.setState({lastname: text})}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-person'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Prénom'}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.setState({firstname: text})}
                    />
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
                               secureTextEntry={this.state.hidePassword}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.setState({password: text})}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={this.setPasswordVisibility}>
                        <Icon name={'md-eye'} size={26} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-lock'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Validation mot de passe'}
                               secureTextEntry={this.state.hidePasswordV}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                               onChangeText={(text) => this.setState({passwordV: text})}
                    />
                    <TouchableOpacity style={styles.btnEye} onPress={this.setPasswordVisibilityV}>
                        <Icon name={'md-eye'} size={26} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.btnSignup}>
                    <Text style={styles.text} onPress={() => {this.signup()}}>Création du compte</Text>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center'
    },
    header: {
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    inputContainer: {
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
    btnSignup: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center'
    },
    btnEye:{
        position:'absolute',
        top:8,
        right:37
    }
});