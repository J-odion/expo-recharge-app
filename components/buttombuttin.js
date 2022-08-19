import { View, Text } from 'react-native'
import React from 'react'
import Buttin from './button'

const Buttombuttin = ({name}) => {
  return (
    <View className='justify-center items-center '>
          <Buttin name={name} />
        <Text className='pt-4 text-[#F1D330]'>Already have an account? <Text className='text-[#f7d203] text-bold text-black'>Login</Text></Text>
      </View>
  )
}

export default Buttombuttin