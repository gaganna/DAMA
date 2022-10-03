import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
 
const AboutScreen = () => {
 
    return (
        <View>
            <Text style={styles.textStyle}>About</Text>
            <Text style={styles.text}>Developed by Anna Clara Sousa Mendonça</Text>
            <Text style={styles.textStyle}>Version</Text>
            <Text style={styles.text}>FirstApp version 1.0</Text>
        </View>
    )
}
 
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24,
        color: 'black'
    },
    text: {
        fontSize: 16,
        color: 'black'
    }
})
 
export default AboutScreen
