import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TNav from './TabNav/TNav';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CategoryScreen } from './Components/Category/Category';
import { CategoryStackScreen } from './Stack/StackScreen';
import DrawerList from './src/DrawerList';

const Drawer=createDrawerNavigator();
const DrawerNav=()=>{
  return(
    <Drawer.Navigator intialRouteName="Home" screenOptions={{
      headerShown:false,
      DrawerType:'front'
    }}
    drawerContent={()=><DrawerList/>}>
      <Drawer.Screen name='Home' component={TNav} />
      </Drawer.Navigator>
    
  )
}

export default function App() {
  return(

    <NavigationContainer>
      <DrawerNav/>
    </NavigationContainer>
  )
}