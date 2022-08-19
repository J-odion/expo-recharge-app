import { View, Text } from 'react-native'
import React from 'react'
import SelectMultiple from 'react-native-select-multiple'

const fruits = ['Apples']

const Checkbox = () => {
  
  return (
    <View>
         <SelectMultiple
          items={fruits}
           />
    </View>
  )
}

export default Checkbox