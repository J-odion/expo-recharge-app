import { View,Image,TouchableOpacity, Alert,Text } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'

const Productcard = () => {
  return (
    <View className='p-4'>
      <TouchableOpacity onPress ={() => Alert.alert('you pressed the default button')}>
        <Image className="w-[160px] h-[120px] rounded-lg object-center" source={require('../assets/apples.png')} />
        </TouchableOpacity>
            <Text className="text-left pt-4 text-sm text-[#F1D330]">
              Fresh Apple (Dozen)
            </Text>
            
            <View className='flex-row gap-12  align-middle   justify-between'>
              <Text className="className='flex-row' text-left text-sm  text-[#F1D330]">
                $250.00
              </Text>
              {/* rating  */}
              <View className='flex-row flex-1  items-center'>
                <StarIcon size='10px' color='#F1D330' />
                <StarIcon size='10px' color='#F1D330' />
                <StarIcon size='10px' color='#F1D330' />
                <StarIcon size='10px' color='#F1D330' />
                <StarIcon size='10px' color='#F1D330' />
                <StarIcon size='10px' color='#F1D330'/>
              </View>
            </View>
            <View>
        <TouchableOpacity onPress={() => Alert.alert('you pressed the default button')}>
          <Text
                className="text-[15.62px] rounded-md py-2 mt-2 bg-[#F1D330]   font-[14px] font-bold text-[#00] align-middle justify-center  text-center"
              >
                Add to Cart
              </Text>
              </TouchableOpacity>
            </View>
          </View>
  )
}

export default Productcard