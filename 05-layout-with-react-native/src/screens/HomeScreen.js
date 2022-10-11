import React from 'react'
import { StyleSheet, View, Button } from 'react-native'

const HomeScreen = (props) => {
    const navigation = props.navigation

    return (
        <View style={styles.mainView}>

            <View style={styles.button}>
            <Button
                onPress={() => { navigation.navigate('Tela') }}
                title="Go to Tela Screen" />
            </View>

            <View style={styles.button}>
            <Button
                onPress={() => { navigation.navigate('FlexBox') }}
                title="Go to FlexBox Screen" />
            </View>

            <View style={styles.button}>
            <Button
                onPress={() => { navigation.navigate('Position') }}
                title="Go to Position Screen" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainView: {
        justifyContent: 'center',
        padding: 10
    },
    button : {
        margin: 10
    }
})

export default HomeScreen