import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'

const Buttin = ({ name, bg }) => {
  return (
    <TouchableOpacity>
      <View>
      <Text
                      className="text-[15.62px] items-center  rounded-md py-2 w-[335px] bg-[#F1D330] font-bold text-[#000] align-middle justify-center mt-5 text-center"
                  >
                      {name}
                  </Text>
    </View>
    </TouchableOpacity>
  )
}

export default Buttin