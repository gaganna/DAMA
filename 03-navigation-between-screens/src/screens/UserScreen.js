import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
 
const UserScreen = () => {
    const name = 'Anna'
    const age = '17'
    const email = 'anna@gmail.com'
 
    return (
        <View>
            <Text style={styles.textStyle}>Name</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.textStyle}>Age</Text>
            <Text style={styles.text}>{age}</Text>
            <Text style={styles.textStyle}>Email</Text>
            <Text style={styles.text}>{email}</Text>
           
        </View>
    )
}
 
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 26,
        color: 'black'
    },
    text: {
        fontSize: 18,
        color: 'black'
    }
})
 
export default UserScreen
