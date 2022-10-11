import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const TelaScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>

            <View style={styles.left}>
            
            </View>

            <View style={styles.right}>
            
            </View>

            <View style={styles.center}>
            
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    left: {
        width: 10,
        height: 13,
        backgroundcolor: 'red'
        
    },

    right: {
        width: 10,
        height: 13,
        backgroundcolor: 'yellow'
    },
    center:{
        width: 10,
        height: 13,
        backgroundcolor: 'purple'
    }
})

export default TelaScreen