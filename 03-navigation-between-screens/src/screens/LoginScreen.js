import React from 'react'
import { Text, TextInput, StyleSheet, View, Button, TouchableOpacity } from 'react-native'

const LoginScreen = (props) => {
    console.log(props)
    const navigation = props.navigation

    return (
        <View>
            <Text style={styles.text}>User</Text>
            <TextInput style={styles.input}/>
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input}/>


            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('Home')
                }}
                title="LOGIN" />
            <TouchableOpacity
                onPress={() => {
                    console.log('touchable opacity pressed')
                    navigation.navigate('List')
                }}>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
     input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderRadius: 8
        },   
})

export default LoginScreen