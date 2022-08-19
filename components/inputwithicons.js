import { View, Text } from 'react-native'
import React from 'react'
import { SelectorIcon } from 'react-native-heroicons/solid'

const Inputwithicons = ({...props}) => {
  return (
      <View className='my-2'>
          <SelectorIcon/>
      <TextInput
        {...props}
        className='py-2 px-5  mt-2 border-2 text-[#F1D330] placeholder-gray-500   border-[#F1D330] rounded-md'
      />
    </View>
  )
}

export default Inputwithicons