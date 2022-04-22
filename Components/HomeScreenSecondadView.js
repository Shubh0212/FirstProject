import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {SliderBox} from 'react-native-image-slider-box';
import styles from '../src/assets/StyleSheet';

const image1 = require('../src/assets/ad1.gif');
const image2 = require('../src/assets/ad2.gif');
const image3 = require('../src/assets/moffer1.jpeg');
const image4 = require('../src/assets/moffer2.jpeg');
const image5 = require('../src/assets/moffer3.jpeg');
const image6 = require('../src/assets/moffer4.jpeg');
const image7 = require('../src/assets/moffer5.jpeg');

export default function HomeScreenSecondadView() {
  return (
    <View style={styles.secondUpperView}>
      <SliderBox images={[image1, image2,image3,image4,image5,image6,image7]} 
      autoplay={true} 
      circleLoop
      sliderBoxHeight={380}
      dotColor="white"
      inactiveDotColor="#969696"
      style={styles.secondContainerStyle}
      resizeMode='stretch'
      />
    </View>
  );
}

