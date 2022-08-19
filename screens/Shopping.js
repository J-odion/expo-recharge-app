import { View, Button,TouchableOpacity, ScrollView, Text, Image, TextInput } from 'react-native'
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
import Nametag from '../components/name';
import Menus from '../components/menus';
import Productcard from '../components/productcard';
import Categorycard from '../components/categorycard';
import Welcomenav from '../components/welcomenav';

const Shopping = () => {
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
        <Welcomenav />
        {/* Category  */}
        <View>
          <Text className='flex-row text-left text-lg px-4 font-bold  text-[#F1D330]'>
              Category
            </Text>
          <ScrollView horizontal className='px-4' showHorizontalScrollIndicator={false}>
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
          </ScrollView>
          <TouchableOpacity
            onpress={
              ()=>{Navigation.navigate('Product')}
            }
          >
            <Text className='flex-row text-right text-sm px-4   text-[#F1D330]'>
              view all
            </Text>
          </TouchableOpacity>
        </View>
        {/* Available products */}
        <ScrollView>
            <Text className='flex-row text-left text-lg pl-4 font-bold  text-[#F1D330]'>
              Available Product
            </Text>
          <View className='flex-row w-[] justify-between'>
          <Productcard/>
          <Productcard/>
        </View>
          <View className='flex-row w-[] justify-between'>
          <Productcard/>
          <Productcard/>
          </View>
          <View className='flex-row w-[] justify-between'>
          <Productcard/>
          <Productcard/>
        </View>
        </ScrollView>

          <View className='flex-1 justify-between top-16'>
            <View  className='justify-center p-2 items-center'>
              
            </View>
        </View>
        
        <Menus />

          <StatusBar backgroundColor="#060E29" style="dark-content" />

      </View>
    </SafeAreaView>
  )
}

export default Shopping;