import { View, Button,TouchableOpacity, ScrollView, Text, Image, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Menus from '../components/menus';
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
        <Menus />
      </View>
    </SafeAreaView>
  )
}

export default Shopping;