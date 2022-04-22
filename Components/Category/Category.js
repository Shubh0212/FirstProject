import * as React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../../src/assets/StyleSheet';

export function CategoryScreen({navigation}) {
    return (
      <View style={{flex:1,backgroundColor:'#dddddd'}}>
      <View style={styles.ExploreScreenStyle}>
        <Text style={styles.ExploreMyntraTextStyle}>Category</Text>
      </View>
      <Text>Hello</Text>
      </View>
    );
  }