import { View, Button, Text, Image, ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = { uri: "https://github.com/J-odion/jafaru-emmanuel/blob/main/assets/img/gb-girl.png" };

const Select = () => {
    const Navigation = useNavigation();

  useLayoutEffect(
    () => {
      Navigation.setOptions({
        headerShown: false,
    })
    }, []
  );
  return (
      <View className="flex-1 align-middle">
          <ImageBackground
              class="object-fill"
              source={require('../assets/gb-girl.png')} resizeMode="stretch"
          >
    
          <View>
              <Image
          className="top-0 w-[392px] h-[460.68px] object-fit"
        source={require('..')}
              />
              <View
                  className="bg-[#e8eaf1]  items-center mt-[-60px] h-[366px] rounded-t-[20px] pt-5 px-0"
              >

                  <Text
                      className="text-[28px]  pt-2 w-[288px]  font-extrabold  text-[#070606] text-left justify-start left-[-40px]"
                  >
                      Shopping just got easier
                  </Text>
                  
                      <Text
                      className="text-[17px]  p-2 w-[288px]  font-bold text-[#130c0c] mb-[50px] left-[-40px] "
                  >
                      We make it easier to buy and make payment from the comfort of your phone
                  </Text>
                  <Text
                      className="text-[15.62px] rounded-md py-[18px] w-[335px] bg-[#0c101a] font-bold text-[#fff] align-middle justify-center mt-5 text-center"
                  >
                      Sign Up
                  </Text>
                  <Text
                      className="text-[15.62px] rounded-md py-[18px]  bg-[#070b15] font-bold text-[#fff] align-middle justify-center mt-5 text-center"
                  >
                      Login
                  </Text>

          </View>
              </View>
        </ImageBackground>
      </View>
  )
}

export default Select;