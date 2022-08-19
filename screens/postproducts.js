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

const Postproduct = () => {
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
          <Nametag Name='Post Product'/>

        <View className="justify-center items-center align-middle p-4">
          <View className='align-middle items-center justify-center text-center'>
            <Image
              className=''
              source={require('../assets/Right.png')}
            />
            <Text className="text-center text-2xl  text- text-[#F1D330]">
              Successful!
              </Text>
            
            <Text className="text-center text-sm text-[#F1D330]">
              Your Product have been successfully posted
            </Text>
          </View>

          <View className="top-4 justify-center items-center">
            <Text className="text-center text-[16px] py-4 text-[#F1D330]">
              Product QR Code
            </Text>
            <Image className='w-[120px] h-[120px] ' source={require('../assets/barcode.png')}/>
          </View>
        </View>


        
        <View className='flex'>
           <View className='p-4 justify-center flex-row gap-4'>
            
            <View className="text-[15.62px] items-center rounded-md p-2  font-[14px] bg-none border-2 bg-[#F1D330] font-bold flex-row align-middle justify-between px-8  text-center">
              <Text className="text-[#000] pr-4">
                Download QR Code
              </Text>
              <DownloadIcon color={"#000"}/>
            </View>

            
          </View>

        </View>  

        <View className='p-4 top-6'>
          <Share />
        </View>
      </View>

      <View  className='items-center'>
        <Buttin name="Finish"/>
      </View>
      <StatusBar backgroundColor="#060E29" style="dark-content" />
    </SafeAreaView>
  )
}

export default Postproduct;