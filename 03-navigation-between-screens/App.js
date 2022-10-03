import { StatusBar } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import UserScreen from './src/screens/UserScreen'
import AboutScreen from './src/screens/AboutScreen'
import LoginScreen from './src/screens/LoginScreen'
import { NavigationContainer } from '@react-navigation/native'
 
 
const Stack = createNativeStackNavigator()
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Email">
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="User" component={UserScreen}/>
        <Stack.Screen name="About" component={AboutScreen}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  )
}
