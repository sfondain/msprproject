import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';
import {getPromoFromApi} from "../API/PromoAPI";
import PromoItem from "../Components/PromoItem";

class ListePromo extends React.Component {
    constructor(props) {
        super(props)
        this._data = []
    }
    _loadPromo() {
        getPromoFromApi().then(data => {
            this._data = data.results
            this.forceUpdate()
        });
    }
    render() {
        const { promo, displayDetailForPromo } = this.props
        return (
            <View>
                <Text>
                    { this._data }
                </Text>
                <Text>
                    Hello
                </Text>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PromoItem film={item}/>}
                />
            </View>
        )
    }
}

export default ListePromo