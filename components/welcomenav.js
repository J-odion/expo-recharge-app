import { View,TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { BellIcon, MenuIcon } from 'react-native-heroicons/solid'

const Welcomenav = () => {
  return (
    <View className='p-4 flex-row justify-center align-middle '>
      <TouchableOpacity>
        <Text className='justify-center align-middle text-center rounded-md  w-10'>
            <MenuIcon color='#F1D330' />
        </Text>
        </TouchableOpacity>
          <Text className='text-[20px] flex-1 text-left align-middle text-[#F1D330] font-black'>
              Welcome back 👋🏽 
          </Text>
          <TouchableOpacity >
              <Text>
                  <BellIcon color='#F1D330'/>
              </Text>
          </TouchableOpacity>
      </View>
  )
}

export default Welcomenav