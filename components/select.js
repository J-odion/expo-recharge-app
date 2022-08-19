import { View,TouchableOpacity ,Text } from 'react-native'
import React from 'react'

const Select = ({name, names, style}) => {
  return (
    <View className='flex-row flex-1 justify-center items-center gap-2 p-4'>
      <TouchableOpacity>
        <Text
            className="text-[15.62px] rounded-md py-[18px] w-[186px] bg-[#F1D330]   font-[14px] font-bold text-[#00] align-middle justify-center  text-center"
        >
            {name}
        </Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text
              className=" text-[15.62px] rounded-md py-[18px]  w-[166px] font-[14px] bg-none border-2 border-[#F1D330] font-bold text-[#F1D330] align-middle justify-center mt-5 text-center "
        >
            {names}
        </Text>
      </TouchableOpacity>
                  
    </View>
  )
}

export default Select
