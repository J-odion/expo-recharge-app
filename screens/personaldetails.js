import { View, Button, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon, CheckIcon, DownloadIcon, FingerPrintIcon, MinusIcon, PlusIcon, StarIcon
} from "react-native-heroicons/solid";
import Inpute from '../components/inpute';
import Select from '../components/select';
import Checkbox from '../components/checkboxss';
import Buttin from '../components/button';
import Buttombuttin from '../components/buttombuttin';
import { StatusBar } from 'react-native'
import Inputwithicons from '../components/inputwithicons';
import Nametag from '../components/name';
import Share from '../components/share';
import Menus from '../components/menus';

const Projectdetails = () => {
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
          <Image className="w-[auto] h-[180px] rounded-lg object-center" source={require('../assets/apples.png')}/>
            <Text className="text-left pt-4 text-lg text-[#F1D330]">
              Fresh Apple (Dozen)
          </Text>
          <View className='flex-row justify-between'>
            <Text className="className='flex-row' text-left text-lg pb-6 text-[#F1D330]">
              $250.00
            </Text>
            <View className='flex-row'>
              <StarIcon color='#F1D330' />
              <StarIcon color='#F1D330' />
              <StarIcon color='#F1D330' />
              <StarIcon color='#F1D330' />
              <StarIcon color='#F1D330' />
              <StarIcon color='#F1D330'/>
            </View>
          </View>
          <View>
            <Text className="text-left text-lg font-bold  pb-4  text-[#F1D330]">
              Description
          </Text>
          <Text className="text-left text-xs text-[#F1D330]">
              Lorem Ipsum product description Lorem Ipsum product description Lorem Ipsum product descriptionLorem Ipsum product description Lorem Ipsum product descriptionLorem Ipsum product description Lorem Ipsum product description
          </Text>

          <Text className="text-left text-[18px] font-bold  py-2  text-[#F1D330]">
              Quantity
          </Text>
          <View className='flex-row'>
            <View className='bg-[#F1D330] justify-center p-1 rounded-full '>
              <MinusIcon size='10px' color='#000'/>
            </View>
            <Text className='text-[#F1D330] px-4 font-bold text-xs'>
              2
            </Text>
            <View  className='bg-[#F1D330] justify-center p-1 rounded-full '>
              <PlusIcon size='10px' color='#000'/>
            </View>
          </View>
          </View>
        </View>

          <View className='flex-1 justify-between top-16'>
            <View  className='justify-center p-2 items-center'>
              <Select names="Checkout" name="Continue Shopping"/>
            </View>
        </View>
        
        <Menus />

          <StatusBar backgroundColor="#060E29" style="dark-content" />

      </View>
    </SafeAreaView>
  )
}

export default Projectdetails;