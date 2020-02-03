import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class PromoItem extends React.Component {
    render() {
        const promo = this.props.promo
        return (
            <View style={styles.main_container}>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Text style={styles.title_text}>Code : {promo.code}</Text>
                        <Text style={styles.date_text}>Expire le : {promo.end_date}</Text>
                    </View>
                    <View style={styles.description_container}>
                        <Text style={styles.description_text} numberOfLines={6}>{promo.reduction}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 100,
        flexDirection: 'row'
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flex: 3,
        flexDirection: 'row'
    },
    title_text: {
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
    },
    description_container: {
        flex: 7
    },
    description_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    date_text: {
        textAlign: 'right',
        fontSize: 14
    }
})

export default PromoItem