import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet';

export default function ItemSlider() {
  return (
   
        <View style={styles.thirdMainView}>
          <Text style={styles.itemViewed}>ITEMS YOU HAVE VIEWED</Text>

          <View style={{flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/shoe.jpg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text>Furo by Red Chief</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Sports Shoes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10}}>₹1005</Text>
                    <Text style={{color: 'red', fontSize: 12}}>52% off</Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/watch.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text>Daniel Klien</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Watches
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10}}>₹2040</Text>
                    <Text style={{color: 'red', fontSize: 12}}>60% off</Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/pant.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text>Roadster</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Trousers
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10}}>₹1154</Text>
                    <Text style={{color: 'red', fontSize: 12}}>45% off</Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/woodland.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text>Woodland</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Casual Shoes
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10}}>₹3395</Text>
                    <Text style={{color: 'red', fontSize: 12}}>15% off</Text>
                  </View>
                </View>
              </View>

              <View style={styles.viewedItem}>
                <Image
                  source={require('../src/assets/wrogn.jpeg')}
                  style={styles.shoeStyle}
                />
                <View style={{margin: 10, marginTop: 20}}>
                  <Text>WROGN</Text>
                  <Text style={{fontSize: 12, color: 'grey', marginTop: 4}}>
                    Shirts
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-around',
                    }}>
                    <Text style={{marginLeft: -10}}>₹1319</Text>
                    <Text style={{color: 'red', fontSize: 12}}>40% off</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
  )
}


  