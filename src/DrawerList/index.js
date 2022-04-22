import { View, Text } from 'react-native'
import React from 'react'
import { Link } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function DrawerList({navigation}) {
  return (
      <SafeAreaView>
     <View>
      <Link to={{screen: 'Explore'}}>Category</Link>
    </View>
      </SafeAreaView>
    
  )
}    