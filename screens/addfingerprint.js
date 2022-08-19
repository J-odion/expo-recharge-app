import { View, Button, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon, CheckIcon, FingerPrintIcon
} from "react-native-heroicons/solid";
import Inpute from '../components/inpute';
import Select from '../components/select';
import Checkbox from '../components/checkboxss';
import Buttin from '../components/button';
import Buttombuttin from '../components/buttombuttin';
import { StatusBar } from 'react-native'
import Inputwithicons from '../components/inputwithicons';
import Nametag from '../components/name';

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
          <Nametag Name=''/>

        <View className="justify-center align-middle p-4">
          <View className='align-middle items-center justify-center text-center'>
            <FingerPrintIcon
                size='16px'
            color="#F1D330"
          />
          </View>
          <Text className="text-center text-black text-lg text-[#F1D330]">
            Lift, then touch again
          </Text>
          <Text className="text-center text-[16px] text-[#F1D330]">
            Put your finger on the sensor and lift after you feel a vibration
          </Text>
        </View>


        
        <View className='flex-1 justify-center'>
           <View className='top-4 p-4 justify-center flex-row gap-4'>
            <View style="boder: 50%" className="text-[15.62px] items-center rounded-full  p-12  font-[14px] bg-none border-2 border-[#F1D330] font-bold text-[#F1D330] align-middle justify-center  text-center">
              <FingerPrintIcon
                className='text-center'
                size='36px'
                color="#F1D330" />
              
          </View>
         

        </View>
        <Text className="text-[#F1D330] text-center mt-4">
          0%
        </Text>
       </View>


      </View>



      <View  className='items-center'>
        <Buttin name="Continue"/>
      </View>
      <StatusBar backgroundColor="#060E29" style="dark-content" />
    </SafeAreaView>
  )
}

export default Shopping;