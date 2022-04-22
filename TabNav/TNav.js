import { View, Text ,Image} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeStackScreen } from '../Stack/StackScreen';
import { CategoryStackScreen } from '../Stack/StackScreen';
import { ExploreStackScreen } from '../Stack/StackScreen';
import { ProfileStackScreen } from '../Stack/StackScreen';


const Tab = createBottomTabNavigator();
export default function TNav() {
  
    return (
        
          <Tab.Navigator
            screenOptions={{headerShown: false}}>
            <Tab.Screen
              name="Home"
              component={HomeStackScreen}
              options={{
                tabBarColor: 'red',
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={{
                          uri: !focused
                            ? 'https://cdn-icons-png.flaticon.com/512/7268/7268237.png'
                            : 'https://cdn-icons-png.flaticon.com/512/7268/7268199.png',
                        }}
                      />
                    </View>
                  );
                },
              }}
            />
    
            <Tab.Screen
              name="Categories"
              component={CategoryStackScreen}
              options={{
                tabBarColor: 'black',
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={{
                          uri: focused
                            ? 'https://cdn-icons.flaticon.com/png/512/3405/premium/3405818.png?token=exp=1649481800~hmac=edbae3dba1fc602a3b5bbc5fa34ab6e4'
                            : 'https://cdn-icons.flaticon.com/png/512/3405/premium/3405828.png?token=exp=1649481764~hmac=355893c667a5bf96e2fada0c150fdcb8',
                        }}
                      />
                    </View>
                  );
                },
              }}
            />
    
            <Tab.Screen
              name="Studio"
              component={CategoryStackScreen}
              options={{
                tabBarColor: 'black',
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={{
                          uri: !focused
                            ? 'https://cdn-icons.flaticon.com/png/512/942/premium/942151.png?token=exp=1649483034~hmac=c530cc82f792c931105e4e3d927a7b45'
                            : 'https://cdn-icons.flaticon.com/png/512/942/premium/942100.png?token=exp=1649483037~hmac=5c4ca1201a79728fa3460b796771b534',
                        }}
                      />
                    </View>
                  );
                },
              }}
            />
    
            <Tab.Screen
              name="Explore"
              component={ExploreStackScreen}
              options={{
                tabBarColor: 'black',
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={{
                          uri: focused
                            ? 'https://cdn-icons.flaticon.com/png/512/4671/premium/4671081.png?token=exp=1649483158~hmac=6d567606caed2c60fc583f00696d65b6'
                            : 'https://cdn-icons.flaticon.com/png/512/4229/premium/4229877.png?token=exp=1649483161~hmac=8184a9941b55aac65d8935c89b129c6f',
                        }}
                      />
                    </View>
                  );
                },
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileStackScreen}
              options={{
                tabBarColor: 'black',
                tabBarIcon: ({focused}) => {
                  return (
                    <View>
                      <Image
                        style={{height: 20, width: 20}}
                        source={{
                          uri: focused
                            ? 'https://cdn-icons-png.flaticon.com/512/456/456141.png'
                            : 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
                        }}
                      />
                    </View>
                  );
                },
              }}
            />
          </Tab.Navigator>
        
      );
    }