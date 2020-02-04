import React, {useState, useEffect} from 'react';
import {View, FlatList, AsyncStorage} from 'react-native';
import PromoItem from "../Components/PromoItem";

// Appel API
import {getPromoFromApi} from "../API/PromoAPI";

class ListePromo extends React.Component {

    constructor(props) {
        super(props)
        const {navigation} = this.props;
        this._promos = []
        this._loadPromo(this.props.navigation.state.params)
    }

    _loadPromo(userId) {
        getPromoFromApi(userId).then(data => {
            this._promos = data.data
            this.forceUpdate()
        });
    }

    render() {
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