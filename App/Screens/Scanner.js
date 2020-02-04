import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button, AsyncStorage} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';

// Appel API
import {addPromoToUserList} from "../API/PromoAPI";

export default function App(userId) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        let userid = userId.navigation.state.params;
        if (userid.indexOf('/')){
            alert('Le QR code n\'est pas un code promo valide')
        } else {
            addPromoToUserList(userid, data).then(response => {
                if (response.error) {
                    alert(response.error);
                } else {
                    alert(response.data);
                }
            });
        }
    };
    if (hasPermission === null) {
        return <Text>Demande d'autorisation pour l'utilisation de la caméra</Text>;
    }
    if (!hasPermission) {
        return <Text>Pas d'accès à la caméra</Text>;
    }

    return (
        <View style={styles.view}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />

            {scanned && <Button title={'Scanner à nouveau'} onPress={() => setScanned(false)}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
});