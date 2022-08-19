import { View,Image ,Text } from 'react-native'
import React from 'react'
import { DocumentDuplicateIcon } from 'react-native-heroicons/solid'

const Sharelink = () => {
  return (
    <View className="flex-row border-2 justify-around items-center rounded-md p-1 border-[#F1D330]">
              <DocumentDuplicateIcon color="#F1D330"/>
              <Text className="text-xs  text-center text-[#F1D330] pl-2">
                  https//yenomcode.com/nikeshoe/MID643216
              </Text>
          </View>
  )
}

export default Sharelink