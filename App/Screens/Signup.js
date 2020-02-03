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

import bgImage from '../Image/background.jpg'
import Icon from 'react-native-vector-icons/Ionicons'
import logo from "../Image/logo.png";

const {width: WIDTH} = Dimensions.get('window')
export default class Example extends Component {
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
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-person'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Prénom'}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-mail'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Mail'}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-lock'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Mot de passe'}
                               secureTextEntry={true}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon name={'md-lock'} size={28} style={styles.inputIcon}/>
                    <TextInput style={styles.input}
                               placeholder={'Validation mot de passe'}
                               secureTextEntry={true}
                               placeholderTextColor={'white'}
                               underlineColorAndroid='transparent'
                    />
                </View>
                <TouchableOpacity style={styles.btnSignup}>
                    <Text style={styles.text}>Création du compte</Text>
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
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent: 'center',
        marginTop: 20
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
    }
});