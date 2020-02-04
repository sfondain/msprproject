import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import {getPromoFromApi} from "../API/PromoAPI";
import PromoItem from "../Components/PromoItem";

class ListePromo extends React.Component {
    constructor(props) {
        super(props)
        this._promos = []
        this._loadPromo()
    }
    _loadPromo() {
        getPromoFromApi().then(data => {
            this._promos = data.data
            this.forceUpdate()
        });
    }
    render() {
        const { promo, displayDetailForPromo } = this.props
        return (
            <View>
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