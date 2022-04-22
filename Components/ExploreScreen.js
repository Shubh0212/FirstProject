import { View, Text ,TouchableOpacity,Image,ScrollView} from 'react-native'
import React from 'react'
import styles from '../src/assets/StyleSheet'


export default function ExploreScreen({navigation}) {
  return (
    <View style={{flex:1,backgroundColor:'#dddddd'}}>
    <View style={styles.ExploreScreenStyle}>
      <Text style={styles.ExploreMyntraTextStyle}>Explore on Myntra</Text>
    </View>
    <ScrollView style={{flex:1}} bounces={false}>
      <View style={styles.ExploreViewStyle}>
        <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/minsider.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra Insider</Text>
        <Image source={require('../src/assets/Images/new.png')} style={styles.ExploreNewImgStyle}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity  >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mlive.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra Live</Text>
        <Image source={require('../src/assets/Images/new.png')} style={styles.ExploreNewImgStyle}/>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mluxe.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra Luxe</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mgift.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Gift Cards</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreLastinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mbag.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra Mall</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View style={{marginTop:10,backgroundColor:'white'}}>
    <TouchableOpacity >
      <View style={styles.ExploreLastinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mearn.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Play & Earn</Text>
      </View>
      </TouchableOpacity>
    </View>
    <View style={{flex:0.35,marginTop:10,backgroundColor:'white'}}>
    <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mrefer.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Refer & Earn</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mscan.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Scan for Coupon</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreinsiderViewStyle}>
        <Image source={require('../src/assets/Images/msuperstar.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra Fashion Superstar</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity >
      <View style={styles.ExploreLastinsiderViewStyle}>
        <Image source={require('../src/assets/Images/mmaster.png')} style={styles.ExploreImageStyle}/>
        <Text style={styles.ExploreTextStyle}>Myntra MasterClass</Text>
      </View>
      </TouchableOpacity>    
    </View>
    </ScrollView>
  </View>
  )
}