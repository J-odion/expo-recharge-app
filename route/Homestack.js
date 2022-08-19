import { createStackNavigator } from '@react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Projectdetails from '../screens/personaldetails';
import DashBoard from '../screens/dashboard';
import Product from '../screens/product';
import Business from '../screens/Business';



const MainStack = createStackNavigator();

export const Main = () => (
  <MainStack.Navigator>
    <MainStack.Screen name="List" component={List} />
    <MainStack.Screen
      name="TextDemo"
      component={TextDemo}
      options={{ headerTitle: 'Text Demo' }}
    />
    <MainStack.Screen
      name="FormDemo"
      component={FormDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
    <MainStack.Screen
      name="ButtonDemo"
      component={ButtonDemo}
      options={{ headerTitle: 'Button Demo' }}
    />
  </MainStack.Navigator>
);















const screens = {
    Home: { screen: HomeScreen},
    DashBoard: { screen: DashBoard },
    PersonalDetails: {screen: Projectdetails},
    Product: {screen: Product},
    Business: {screen: Business},
}