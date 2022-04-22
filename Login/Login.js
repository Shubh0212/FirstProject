import {View, Text, SafeAreaView, StyleSheet, Image,TouchableOpacity,TextInput} from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <SafeAreaView style={styles.main}>
      <Image
        source={require('../src/assets/Images/myntra.png')}
        style={styles.logoImg}
      />
      <Text style={styles.logoTxt}>Log In to Myntra</Text>

      <Text style={styles.txtStyle}>EASILY USING</Text>

      <View style={styles.easyUsingStyle}>
        <TouchableOpacity style={styles.metaView}>
           
          <Image
            source={require('../src/assets/Images/facebook.png')}
            style={styles.facebookStyle}
          />
          <Text style={styles.metaTxtStyle}>FACEBOOK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metaView}>
          <Image
            source={require('../src/assets/Images/google.png')}
            style={styles.facebookStyle}
          />
          <Text style={styles.metaTxtStyle}>GOOGLE</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.emailTxt}>-OR USING EMAIL-</Text>

      <View style={{padding:12,borderWidth:1,marginHorizontal:12,marginTop:15,borderColor:'#dfdfe2',borderRadius:5}}>
          <TextInput placeholder='Enter Email' style={{fontSize:12}}/>
      </View>
      <View style={{padding:12,borderWidth:1,marginHorizontal:12,marginTop:15,borderColor:'#dfdfe2',borderRadius:5}}>
          <TextInput placeholder='Password' style={{fontSize:12}}/>
      </View>
      <TouchableOpacity>
      <View style={{padding:18,borderWidth:1,marginHorizontal:12,marginTop:15,borderColor:'#dfdfe2',borderRadius:5,backgroundColor:'#07c6a0'}}>
          <Text style={{alignSelf:'center',fontSize:14,fontWeight:'600',color:'white'}}>LOG IN</Text>
      </View>
      </TouchableOpacity>
      <Text></Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  logoImg: {
    height: 65,
    width: 65,
    marginTop: 50,
    alignSelf: 'center',
  },
  logoTxt: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#7f848c',
  },
  txtStyle: {
    color: '#bcbfc3',
    alignSelf: 'center',
    marginTop: 35,
    fontSize: 11,
  },
  easyUsingStyle: {
    flexDirection: 'row',
  },
  metaView: {
    borderWidth: 0.5,
    flexDirection: 'row',
    borderColor: '#d7d9db',
    borderRadius: 5,
    marginLeft: 20,
    top: 14,
    width: '40%',
  },
  facebookStyle: {
    height: 30,
    width: 30,
    margin: 10,
  },
  metaTxtStyle: {
    fontSize: 12,
    margin: 10,
    top: 8,
    color: '#757a84',
    fontWeight: '500',
  },
  emailTxt:{
      marginTop:40,
      fontSize:10,
      color:'#c2c4c8',
      alignSelf:'center'
  }
});
