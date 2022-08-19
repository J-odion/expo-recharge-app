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

const Additionalsecurity = () => {
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
          <Nametag Name='Set up additional security'/>

        {/* personal info */}
        <View className="justify-center align-middle p-4">
          <Text className="text-center text-[16px] text-[#F1D330]">
            Add a fingerprint or Face recognition to make your account more secure
          </Text>
        </View>
        {/* form field */}
        <View className='top-4 p-4 flex-row gap-4'>
            <View className="text-[15.62px] items-center rounded-md flex-1 py-5  font-[14px] bg-none border-2 border-[#F1D330] font-bold text-[#F1D330] align-middle justify-center  text-center">
              <FingerPrintIcon
                className='text-center'
                size='36px'
                color="#F1D330" />
              <Text className="text-[#F1D330] mt-4">
                Fingerprint
              </Text>
          </View>
          <View className="text-[15.62px] items-center rounded-md flex-1 py-5 font-[14px] border-2 bg-[#F1D330] font-bold text-[#000] align-middle justify-center  text-center">
            <Image
              className='w-9 object-fill h-9 '
              source={require('../assets/faceid.png')}
            />
              <Text className="mt-4 text-[#000]">
                Face Id
              </Text>
          </View>
         
        </View>
      </View>
      <View  >
        <Select name='skip' names="Continue"/>
      </View>
      <StatusBar backgroundColor="#060E29" style="dark-content" />
    </SafeAreaView>
  )
}

export default Additionalsecurity;