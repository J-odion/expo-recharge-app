import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const Navigation = useNavigation();

  useLayoutEffect(
    () => {
      Navigation.setOptions({
        headerShown: false,
    })
    }, []
  );
  return (
    <SafeAreaView
      className="w-[100%] h-[100%] flex-col items-center justify-center content-center">
      <View className="flex items-center justify-center align-middle ">
        <Image
          className="items-center  align-middle justify-center"
        source={require('../assets/logoos.png')}
        />
        <Image
          className="content-center mt-4 align-middle"
        source={require('../assets/logoText.png')}
        />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen;