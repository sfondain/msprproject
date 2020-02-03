import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Page de l'appli
import Home from '../Screens/Home'
import Scanner from '../Screens/Scanner';
import ListePromo from '../Screens/ListePromo'

const HomeStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GoStyle'
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