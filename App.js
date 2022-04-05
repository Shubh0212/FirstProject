// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'red'}}>
      <Text onPress={()=>navigation.navigate('Details')

      }>Home Screen</Text>
    </View>
  );
}

function DetailsScreen({navigation}) {
  console.log({navigation});
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={()=>navigation.navigate('Home')}>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{title:'Welcome'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;