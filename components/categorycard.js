import { View, Image, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import {  } from 'react-native-web'

const Categorycard = () => {
  return (
      <TouchableOpacity>
          <View className='relative' >
              <Image className='absolute w-[90px] opacity-60 h-[90px] rounded-lg' source={require('../assets/apples.png')} />
              
          <Text className='flex-row bg-blend-darken text-left text-lg p-6 font-bold  text-[#edd70f] '>
              Fruits
          </Text>
        </View>
    </TouchableOpacity>
  )
}

export default Categorycard