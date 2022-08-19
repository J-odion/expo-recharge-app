import { View,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'



const Nametag = ({Name}) => {
  return (
    <View className='p-4 flex-row justify-center align-middle gap-4'>
      <TouchableOpacity>
        <Text className='bg-[#F1D330] justify-center align-middle text-center rounded-md p-2 w-10'>
          <ArrowLeftIcon color='black' />
        </Text>
        </TouchableOpacity>
          <Text className='text-[20px] flex-1 text-center align-middle text-[#F1D330] font-black'>{Name}</Text>
      </View>
  )
}

export default Nametag