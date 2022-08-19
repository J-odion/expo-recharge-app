import {StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from "tailwindcss-react-native";
import Selling from './screens/HomeScreen';
import Business from './screens/Business';
import Product from './screens/Product';
import Shopping from './screens/Shopping';
import Cody from './screens/Cody';
import Select from './screens/Select';
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  });
export default function App() {
  return (
    <NavigationContainer >
      <TailwindProvider>

        <Stack.Navigator initialRouteName="Shopping">
          <Stack.Screen  name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="Shopping" component={Shopping} />
          <Stack.Screen name="Business" component={Business} />
          <Stack.Screen name="Cody" component={Cody} />
          <Stack.Screen name="Select" component={Select} />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>

      </TailwindProvider>
      {/* <StatusBar backgroundColor="#060E29" style="dark-content" /> */}
      
    </NavigationContainer>
    
  );
};