import { View, Button, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  ArrowLeftIcon, CheckIcon
} from "react-native-heroicons/solid";
import Inpute from '../components/inpute';
import Select from '../components/select';
import Checkbox from '../components/checkboxss';
import Buttin from '../components/button';
import Buttombuttin from '../components/buttombuttin';

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
    <SafeAreaView className="flex-1 bg-[#060E29] ">
      {/* Tag section */}
      <View className='p-4 flex-row justify-start gap-4'>
        <Text className='bg-[#F1D330] justify-center align-middle text-center rounded-md p-2 w-10'>
          <ArrowLeftIcon color="#000" />
        </Text>
          <Text className='text-[28px] text-[#F1D330] font-black'>Sign Up</Text>
      </View>
      {/* selectButton section */}
      <Select name='Business' names='Cody'/>
      {/* form field */}
      <View className='p-4'>
        <Inpute value='Business Name'/>
        <Inpute value='Email Address'/>
        <Inpute value='Password' />
        <Checkbox />
      </View>

      <Buttombuttin name='continue'/>
    </SafeAreaView>
  )
}

export default Shopping;