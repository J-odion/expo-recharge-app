import { View, Image, Text } from 'react-native'
import React from 'react'
import Sharelink from './sharelink'

const Share = () => {
  return (
    <View className="pt-2 px-4">
          <Text className="text-[#F1D330] pl-2">
            Share
          </Text>

          {/* share icons */}
          <View className="flex-row justify-between gap-4 p-2">
            <View className="justify-center  align-middle items-center">
              <Image source={require('../assets/whatsapp.png')} />
              <Text className="text-[#F1D330] "> Whatsapp</Text>
            </View>
            <View className="justify-center  align-middle items-center">
              <Image source={require('../assets/twitter.png')} />
              <Text className="text-[#F1D330] "> twitter</Text>
            </View>
            <View className="justify-center  align-middle items-center">
              <Image source={require('../assets/facebook.png')} />
              <Text className="text-[#F1D330] "> facebook</Text>
            </View>
            <View className="justify-center  align-middle items-center">
              <Image source={require('../assets/instagram.png')} />
              <Text className="text-[#F1D330] "> Instagram</Text>
            </View>
          </View>

          {/* share link */}
          <View className="p-4">
              <Sharelink />
          </View>
        </View>
  )
}

export default Share