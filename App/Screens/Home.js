import React from "react";
import {Button, View, Text, FlatList} from "react-native";
import films from '../../filmsData';

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
                <Button
                    title="Promos"
                    onPress={() => navigate('Promo')}
                />
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            </View>
        );
    }
}

export default Home;