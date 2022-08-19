import { View, Text, TextInput } from 'react-native';
import React from 'react';

const Inpute = ({...props}) => {
  return (
    <View className='my-2'>
      <TextInput
        {...props}
        className='py-2 px-5  mt-2 border-2 text-[#F1D330] placeholder-gray-500   border-[#F1D330] rounded-md'
      />
    </View>
  )
}

export default Inpute;