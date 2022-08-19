import { View, Button, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon, CheckIcon, DownloadIcon, FingerPrintIcon, StarIcon
} from "react-native-heroicons/solid";
import { StatusBar } from 'react-native'
import Nametag from '../components/name';

const Product = () => {
  const Navigation = useNavigation();

  useLayoutEffect(
    () => {
      Navigation.setOptions({
        headerShown: false,
    })
    }, []
  );
  return (
    <SafeAreaView className="flex-1 justify-between bg-[#060E29] ">
      {/* Tag section */}
      <View className='flex-1 '>
        <Nametag Name='Product Details' />
        <View className='p-4'>
          <Image className="" source={require('../assets/apples.png')}/>
            <Text className="text-left pt-4 text-lg text-[#F1D330]">
              Fresh Apple (Dozen)
          </Text>
          <View >
            <Text className="text-left text-lg pb-6 text-[#F1D330]">
              $250.00
            </Text>
            <StarIcon color='#F1D330'/>
          </View>
          <Text className="text-left text-lg font-bold  pb-4  text-[#F1D330]">
              Description
          </Text>
          <Text className="text-left text-sm text-[#F1D330]">
              Lorem Ipsum product description Lorem Ipsum product description Lorem Ipsum product descriptionLorem Ipsum product description Lorem Ipsum product descriptionLorem Ipsum product description Lorem Ipsum product description
            </Text>
          </View>
        <View className='flex-1 justify-between'>
          <View className="justify-around  flex-1 items-center align-middle p-4">

            <View className="top-4 justify-center items-center">
          </View>
          </View>

          <View  className='py-10 items-center'>
            <Buttin name="Finish"/>
          </View>
        </View>

          <StatusBar backgroundColor="#060E29" style="dark-content" />

      </View>
    </SafeAreaView>
  )
}

export default Product;