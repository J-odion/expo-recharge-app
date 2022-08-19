import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { HomeIcon, AvatarIcon, ShoppingCartIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';

const Navigation = useNavigation();
const Menus = () => {
  return (
    <View>
     

      <View  className='flex-row justify-around'>
        <Text  className='flex-row align-middle rounded-[20px] items-center '>
          <HomeIcon  className="h-6 w-6"  stroke="currentColor" strokeWidth={2} color='#F1D330' />
            {/* <Text className='text-[#000] display-none hover:display-block'>Home</Text>  */}
        </Text>
        
        <TouchableOpacity onPress={()=>{nai}}>
          <Text className='flex-row align-middle rounded-[20px] items-center '>
          <HomeIcon  className="h-6 w-6"  stroke="currentColor" strokeWidth={2} color='#F1D330' />
            {/* <Text className='text-[#000] display-none hover:display-block'>Home</Text>  */}
        </Text>
        </TouchableOpacity>
        <Text className='flex-row align-middle rounded-[20px] items-center '>
          <HomeIcon  className="h-6 w-6"  stroke="currentColor" strokeWidth={2} color='#F1D330' />
            {/* <Text className='text-[#000] display-none hover:display-block'>Home</Text>  */}
        </Text>
        <Text className='flex-row align-middle rounded-[20px] items-center '>
          <HomeIcon  className="h-6 w-6"  stroke="currentColor" strokeWidth={2} color='#F1D330' />
            {/* <Text className='text-[#000] display-none hover:display-block'>Home</Text>  */}
        </Text>
        
         
      </View>
    </View>
  )
}

export default Menus