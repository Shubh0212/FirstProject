import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreenSecondadView from './Components/HomeScreenSecondadView';
import HomeScreenUpperView from './Components/HomeScreenUpperView';
import styles from './src/assets/StyleSheet';
import ShoppingBag from './Components/ShoppingBag';
import Notification from './Components/Notification';
import Wishlist from './Components/Wishlist';
import ItemSlider from './Components/ItemSlider';
import ExploreScreen from './Components/ExploreScreen';
import IntrestedItemfile from './Components/IntrestedItemfile';




function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.homeScreenSafeAreaView}>
      <HomeScreenUpperView navigation={navigation}/>
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false} bounces={false}>
        <HomeScreenSecondadView/>
        <ItemSlider />
        <View style={{flex:1}}>
        <IntrestedItemfile/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#dddddd'}}>
    <View style={styles.ExploreScreenStyle}>
      <Text style={styles.ExploreMyntraTextStyle}>Category</Text>
    </View>
    <Text>Hello</Text>
    </View>
  );
}

function ProfileScreen({navigation}) {
  return (
   <View style={{flex:1,backgroundColor:'#dddddd'}}>
    <View style={styles.ExploreScreenStyle}>
      <Text style={styles.ExploreMyntraTextStyle}>Profile</Text>
    </View>
    </View>
  );
}



const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
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

function CategoryStackScreen() {
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

function ExploreStackScreen() {
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
function ProfileStackScreen() {
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

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        activeColor="black"
        tabBarColor="black"
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
    </NavigationContainer>
  );
}


