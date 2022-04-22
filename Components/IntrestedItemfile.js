import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet'

export default function IntrestedItemfile() {
  return (
    <View style={styles.shoppingBagIntrestedStyle}>
        <Text style={styles.intrestedTextInBagStyle}>
          𝐘𝐎𝐔 𝐌𝐀𝐘 𝐁𝐄 𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐄𝐃 𝐈𝐍
        </Text>
        <TouchableOpacity>
          <View style={styles.shoppingBagItemStyle}>
            <Image
              source={require('../src/assets/watch.jpeg')}
              style={{
                height: 45,
                width: 45,
                borderRadius: 90,
                margin: 15,
                borderColor: 'grey',
              }}
            />
            <View style={styles.shoppingBagItemTextStyle}>
              <Text>Watches</Text>
              <Text style={styles.shoppinBagNameStyle}>Daniel Klien</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shoppingBagItemStyle}>
            <Image
              source={require('../src/assets/shoe.jpg')}
              style={{
                height: 45,
                width: 45,
                borderRadius: 90,
                margin: 15,
                borderColor: 'grey',
              }}
            />
            <View style={styles.shoppingBagItemTextStyle}>
              <Text>Sports Shoes</Text>
              <Text style={styles.shoppinBagNameStyle}>HRX</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shoppingBagItemStyle}>
            <Image
              source={require('../src/assets/wrogn.jpeg')}
              style={{
                height: 45,
                width: 45,
                borderRadius: 90,
                margin: 15,
                borderColor: 'grey',
              }}
            />
            <View style={styles.shoppingBagItemTextStyle}>
              <Text>Casual Shirts</Text>
              <Text style={styles.shoppinBagNameStyle}>WROGN</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.shoppingBagItemStyle4}>
            <Image
              source={require('../src/assets/pant.jpeg')}
              style={{
                height: 45,
                width: 45,
                borderRadius: 90,
                margin: 15,
                borderColor: 'grey',
              }}
            />
            <View style={styles.shoppingBagItemTextStyle}>
              <Text>Casual Trousers</Text>
              <Text style={styles.shoppinBagNameStyle}>Roadster</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
  )
}