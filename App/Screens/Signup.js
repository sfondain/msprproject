//Import de React
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Dimensions,
    ImageBackground,
    TouchableOpacity,
    Alert
} from 'react-native';

//Appel API
import {signup} from "../API/PromoAPI";

//Images
import bgImage from '../Image/background.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

//Import MD5
import md5 from "md5";

//Récupération dimensions du téléphone
const {width: WIDTH} = Dimensions.get('window')
export default class Example extends Component {
    //Constructeur avec déclaration du state
    constructor(props) {
        super(props);
        this.state = {firstname: '',lastname:'',mail:'',password:'',passwordV:'',hidePassword:true,hidePasswordV:true};
    }

    //Fonction pour cacher/afficher le mot de passe
    setPasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
    //Fonction pour cacher/afficher la validation du mot de passe
    setPasswordVisibilityV = () => {
        this.setState({ hidePasswordV: !this.state.hidePasswordV });
    }
    //Fonction d'inscription
    signup(){
        const {navigate} = this.props.navigation;
        //Vérification si tous les champs sont renseignés
        if(this.state.firstname == '' || this.state.lastname == '' || this.state.mail == '' || this.state.password == '' || this.state.passwordV == ''){
            Alert.alert("Champ vide","Veuillez renseigner tout les champs")
        }
        else {
            //Vérif si mot de passe et validation mot de passe sont pareils
            if (this.state.password != this.state.passwordV) {
                Alert.alert("Mot de passe incorrect","Veuillez saisir deux fois le même mot de passe")
            } else {
                //Appel à l'API
                signup(this.state.mail, md5(this.state.password), this.state.firstname, this.state.lastname).then(data => {
                    //Si une erreur est retournée on l'affiche
                    if (data.error) {
                        Alert.alert("Inscription impossible" + data.error)
                    }
                    //Sinon création du compte et redirection vers login
                    else {
                        Alert.alert("Inscription réussie",data.data)
                        navigate('Login')
                    }
                });
            }
        }
    }
    render() {
        //Affichage de la page
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