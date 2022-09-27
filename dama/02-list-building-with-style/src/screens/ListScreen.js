import React from 'react'
// IMPORT FlatList
import { Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    // CREATE AN ARRAY OF OBJECTS
    const friends = [
        { name: '1° Lysandre  '  ,    idade: ' 20' },
        { name: '2° Castiel  '   ,     idade: ' 45'},
        { name: '3° Evangeline ' ,     idade: ' 32'},
        { name: '4° Anna  '      ,     idade: ' 27'},
        { name: '5° Agatha  '    ,     idade: ' 53'},
        { name: '6° Edward  '    ,     idade: ' 30'}
        
        
    ]

    return (
        <FlatList
            data={friends} // THIS FlatList WILL INTERATE ALL ELEMENTS OF friends
            renderItem={(element) => {
                // element === { item: { name: 'Friend #1' }, index: 0 }
                return <Text>{element.item.name}-  {element.item.idade}</Text>
                
            }} />
    )
}

const styles = StyleSheet.create({})

export default ListScreen