import { View, Text,SafeAreaView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet';

export default function Notification({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.NotificationScreen}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../src/assets/back.png')}
            style={styles.menustyle}
          />
        </TouchableOpacity>
        <Header Header="ɴᴏᴛɪꜰɪᴄᴀᴛɪᴏɴꜱ" />
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 5,
          backgroundColor: '#e3e3e3',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{marginBottom: 10}}>𝗡𝗢 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡𝗦</Text>
        <Text style={styles.notifyText}>We Will Notify You once we have</Text>
        <Text style={styles.notifyText}>something for you</Text>
      </View>
    </SafeAreaView>
  )
}
const Header = props => {
    return (
      <SafeAreaView style={{marginHorizontal: 10, marginTop: 5}}>
        <Text style={{fontSize: 25, alignSelf: 'center'}}>{props.Header}</Text>
      </SafeAreaView>
    );
  };