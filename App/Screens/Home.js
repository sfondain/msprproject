import React from "react";
import {Button, View, Text, FlatList} from "react-native";

class Home extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Scanner un code"
                    onPress={() => navigate('Scan')}
                />
                <Button
                    title="Liste des codes scannés"
                    onPress={() => navigate('List')}
                />
            </View>
        );
    }
}

export default Home;