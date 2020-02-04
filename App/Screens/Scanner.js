import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code de type ${type} et les données ${data} ont été scanné!`);
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

            {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
    }
});