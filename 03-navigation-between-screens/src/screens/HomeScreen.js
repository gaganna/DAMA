import React from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
 
const HomeScreen = (props) => {
    console.log(props)
    const navigation = props.navigation
    const name = 'Anna'
    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {name} to our first project.</Text>
            <Text style={styles.text}>Now we can navigate between screens!</Text>
            <Text style={styles.text}>How are you feeling?</Text>
            <View >

            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('User')
                }}
                color="#841584"
                title="User Details" />
                {() => Alert.alert('Button with adjusted color pressed')}
            <Separator />
            <Button
                onPress={() => {
                    console.log('button pressed')
                    navigation.navigate('About')
                }}
                color="#841584"
                title="About" />
                {() => Alert.alert('Button with adjusted color pressed')}
        </View>
        </View>
     )  
}
 
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    text: {
        fontSize: 18,
        margin: 10
 
      },
      separator: {
        marginVertical: 8,
      },
})
 
export default HomeScreen