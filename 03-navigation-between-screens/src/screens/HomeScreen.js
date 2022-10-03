import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
 
const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation
 
    return (
        <View>
            <Text style={styles.text}>Welcome Anna to our first project.</Text>
            <Text style={styles.text}>Now we can navigate between screens!</Text>
            <Text style={styles.text}>How are you feeling?</Text>
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('User')
                }}
                color="#841584"
                title="User Details" />
                {() => Alert.alert('Button with adjusted color pressed')}
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('About')
                }}
                color="#841584"
                title="About" />
                {() => Alert.alert('Button with adjusted color pressed')}
        </View>
    )
}
 
const styles = StyleSheet.create({
    text: {
        fontSize: 20,
 
      },
})
 
export default HomeScreen