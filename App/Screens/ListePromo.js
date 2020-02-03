import React, { useState, useEffect } from 'react';
import { Text, View, Button, FlatList, TextInput } from 'react-native';
import {getPromoFromApi} from "../API/PromoAPI";
import PromoItem from "../Components/PromoItem";
import films from '../../filmsData';
import FilmItem from '../Components/FilmItem';

class ListePromo extends React.Component {
    constructor(props) {
        super(props)
        this._promos = []
    }
    _loadPromo() {
        getPromoFromApi().then(data => {
            this._promos = data.results
            this.forceUpdate()
        });
    }
    render() {
        const { promo, displayDetailForPromo } = this.props
        return (
            <View>
                <TextInput placeholder='Titre du film'/>
                <Button title='Rechercher' onPress={() => this._loadPromo()}/>
                <FlatList
                    data={this._promos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <PromoItem promo={item}/>}
                />
            </View>
        )
    }
}

export default ListePromo