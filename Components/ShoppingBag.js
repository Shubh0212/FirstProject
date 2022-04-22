import { View, Text ,TouchableOpacity,Image,SafeAreaView} from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet';
import IntrestedItemfile from './IntrestedItemfile';

export default function ShoppingBag({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.shoppingBagScreen}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../src/assets/back.png')}
            style={styles.menustyle}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 10, marginTop: 12}}>SHOPPING BAG</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wish');
          }}>
          <Image
            source={require('../src/assets/heart.png')}
            style={{height: 25, width: 25, marginLeft: 180, marginTop: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.shoppingBagText}>
        <Image
          source={require('../src/assets/empty_bag.gif')}
          style={{height: 100, width: 100}}
        />
        <Text style={{marginBottom: 5, fontSize: 20, marginTop: 30}}>
          𝐇𝐞𝐲, 𝐢𝐭 𝐟𝐞𝐞𝐥𝐬 𝐬𝐨 𝐥𝐢𝐠𝐡𝐭!
        </Text>
        <Text style={styles.notifyText}>
          There is nothing in your bag.Let's add some items
        </Text>
      </View>
      <IntrestedItemfile/>
    </SafeAreaView>
  )
}