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
import { StatusBar } from 'react-native'

const Login = () => {
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
          <View className='p-4 flex-row justify-start gap-4'>
          <Text className='bg-[#F1D330] justify-center align-middle text-center rounded-md p-2 w-10'>
            <ArrowLeftIcon color="#000" />
          </Text>
            <Text className='text-[28px] text-[#F1D330] font-black'>Login</Text>
        </View>
        {/* selectButton section */}
      
        {/* form field */}
        <View className='p-4'>
          <Inpute value='Email Address'/>
          <Inpute value='Password' />
          <Checkbox />
        </View>
      </View>
      <Buttombuttin name='continue'/>
      <StatusBar backgroundColor="#060E29" style="dark-content" />
    </SafeAreaView>
  )
}

export default Login;