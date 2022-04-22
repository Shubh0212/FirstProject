import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../src/assets/StyleSheet';

export default function HomeScreenUpperView({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.upperContainer}>
      <View style={styles.upperview}>
        <View style={styles.myntraView}>
          <TouchableOpacity onPress={()=>navigation.openDrawer()}>
            <Image
              source={require('../src/assets/menu.png')}
              style={styles.menustyle}
            />
          </TouchableOpacity>
          <Image
            source={require('../src/assets/myntra.png')}
            style={styles.myntraStyle}
          />
          <View style={styles.upperText}>
            <Text style={styles.becomeText}>Become</Text>
            <Text style={styles.insiderText}>INSIDER</Text>
          </View>
        </View>
        <View style={styles.upperImage}>
          <View>
            <Modal
              animationType="fade"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>𝗚𝗼𝗼𝗴𝗹𝗲</Text>
                <Image
                  source={require('../src/assets/micg.gif')}
                  style={{height: 70, width: 70, borderRadius: 90}}
                />
                <Text style={{marginTop: 20}}>Speak Now</Text>
                <Pressable
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Image
                    style={styles.textStyle}
                    source={require('../src/assets/cancel.png')}
                  />
                </Pressable>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                source={require('../src/assets/mic.png')}
                style={styles.micStyle}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Notification');
            }}>
            <Image
              source={require('../src/assets/noti.png')}
              style={styles.notiStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Wish');
            }}>
            <Image
              source={require('../src/assets/heart.png')}
              style={styles.heartStyle}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Bag');
            }}>
            <Image
              source={require('../src/assets/bag.png')}
              style={styles.bagStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchView}>
        <Image
          source={require('../src/assets/search.png')}
          style={styles.searchStyle}
        />
        <TextInput
         
          placeholder="Search for brands and products"
          style={styles.searchProduct}
        />
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.productStyle}>
          <TouchableOpacity activeOpacity={0.9}>
            <Image
              source={require('../src/assets/summer.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>SUMMER STORE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/men.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>MEN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/women.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>WOMEN</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/kids.jpg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>KIDS</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/beuty.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>BEAUTY</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/home.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>HOME</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/jewel.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>JEWELLERY</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/foot.jpg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>FOOTWARE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/access.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>ACCESSORIES</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../src/assets/style.jpeg')}
              style={styles.summerStyle}
            />
            <Text style={styles.summerText}>STYLECAST</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}


