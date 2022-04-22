import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { HomeScreen } from '../Components/Home/HomeScreen';
import { CategoryScreen } from '../Components/Category/Category';
import ExploreScreen from '../Components/Explore/ExploreScreen'
import { ProfileScreen } from '../Components/Profile/Profile';
import Notification from '../Components/Notification';
import Wishlist from '../Components/Wishlist';
import ShoppingBag from '../Components/ShoppingBag';

const HomeStack = createNativeStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Notification" component={Notification} />
      <HomeStack.Screen name="Wish" component={Wishlist} />
      <HomeStack.Screen name="Bag" component={ShoppingBag} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

export function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}

export function ExploreStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}
export function ProfileStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}