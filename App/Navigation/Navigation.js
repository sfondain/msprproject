import {createAppContainer,StackActions,NavigationActions} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Page de l'appli
import Home from '../Screens/Home'
import Scanner from '../Screens/Scanner';
import ListePromo from '../Screens/ListePromo'
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";


const HomeStackNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Connexion'
        }
    },
    Signup:{
        screen: Signup,
        navigationOptions: {
            title: 'Inscription'
        }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GoStyle',
            headerLeft: () => null,
        }
    },
    Scan: {
        screen: Scanner,
        navigationOptions: {
            title: 'Scan'
        }
    },
    Promo: {
        screen: ListePromo,
        navigationOptions: {
            title: 'Promo'
        }
    }
})





export default createAppContainer(HomeStackNavigator)