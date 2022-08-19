import { View, Button, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon, CheckIcon, DownloadIcon, FingerPrintIcon
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

const Detectingface = () => {
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
        <Nametag Name='Scan Code' />
        <View className='align-middle items-center justify-center text-center'>
            <Text className="text-center text-sm text-[#F1D330]">
              Place Code  in the area below
            </Text>
          </View>
        <View className='flex-1 justify-between'>
          <View className="justify-around  flex-1 items-center align-middle p-4">

          <View className="top-4 justify-center items-center">

            <Image className='w-[120px] h-[120px] ' source={require('../assets/scanning.png')}/>
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

export default Detectingface;