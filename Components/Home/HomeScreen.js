import * as React from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HomeScreenUpperView from '../HomeScreenUpperView';
import ItemSlider from '../ItemSlider';
import HomeScreenSecondadView from '../HomeScreenSecondadView';
import IntrestedItemfile from '../IntrestedItemfile';
import styles from '../../src/assets/StyleSheet';

export function HomeScreen({navigation}) {
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