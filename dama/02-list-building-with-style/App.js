import { View, Text, StatusBar, StyleSheet } from 'react-native'
import ListScreen from './src/screens/ListScreen';


export default function App() {
  return (
    <View>
      <Text style={styles.textStyle}>Lista de Contatos</Text>
      <ListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 5,
  
  }

})
