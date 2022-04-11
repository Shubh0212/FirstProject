import * as React from 'react';
import {
  Button,
  Text,
  View,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {TextInput} from 'react-native-paper';
import {useState} from 'react';

function Notification({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.NotificationScreen}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('./src/assets/back.png')}
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
  );
}

function WishList({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.NotificationScreen}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('./src/assets/back.png')}
            style={styles.menustyle}
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'column'}}>
          <Text style={{marginLeft: 10}}>𝐖𝐢𝐬𝐡𝐥𝐢𝐬𝐭</Text>
          <Text style={{fontSize: 10, marginLeft: 15, color: 'grey'}}>
            0 items
          </Text>
        </View>
      </View>
      <View style={styles.wishlistText}>
        <Text style={{marginBottom: 10, fontSize: 20}}>
          𝗬𝗼𝘂𝗿 𝘄𝗶𝘀𝗵𝗹𝗶𝘀𝘁 𝗶𝘀 𝗲𝗺𝗽𝘁𝘆
        </Text>
        <Text style={styles.notifyText}>
          Save items that you like in your wishlist
        </Text>
        <Text style={styles.notifyText}>
          Review them anytime and easily move
        </Text>
        <Text style={styles.notifyText}>them to the bag.</Text>
        <TouchableOpacity>
          <Text style={styles.wishlistShopNowText}>SHOP NOW</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 0.5}}>
        <Text style={styles.itemViewed}>ITEMS YOU HAVE VIEWED</Text>

        <View style={{flexDirection: 'row'}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.viewedItem}>
              <Image
                source={require('./src/assets/shoe.jpg')}
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
                source={require('./src/assets/watch.jpeg')}
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
                source={require('./src/assets/pant.jpeg')}
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
                source={require('./src/assets/woodland.jpeg')}
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
                source={require('./src/assets/wrogn.jpeg')}
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
    </SafeAreaView>
  );
}

function ShoppingBag({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.shoppingBagScreen}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('./src/assets/back.png')}
            style={styles.menustyle}
          />
        </TouchableOpacity>
        <Text style={{marginLeft: 10, marginTop: 12}}>SHOPPING BAG</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Wish');
          }}>
          <Image
            source={require('./src/assets/heart.png')}
            style={{height: 25, width: 25, marginLeft: 180, marginTop: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.shoppingBagText}>
        <Image
          source={require('./src/assets/empty_bag.gif')}
          style={{height: 100, width: 100}}
        />
        <Text style={{marginBottom: 5, fontSize: 20, marginTop: 30}}>
          𝐇𝐞𝐲, 𝐢𝐭 𝐟𝐞𝐞𝐥𝐬 𝐬𝐨 𝐥𝐢𝐠𝐡𝐭!
        </Text>
        <Text style={styles.notifyText}>
          There is nothing in your bag.Let's add some items
        </Text>
      </View>
      <View style={styles.shoppingBagIntrestedStyle}>
        <Text style={styles.intrestedTextInBagStyle}>
          𝐘𝐎𝐔 𝐌𝐀𝐘 𝐁𝐄 𝐈𝐍𝐓𝐄𝐑𝐄𝐒𝐓𝐄𝐃 𝐈𝐍
        </Text>
        <TouchableOpacity>
          <View style={styles.shoppingBagItemStyle}>
            <Image
              source={require('./src/assets/watch.jpeg')}
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
              source={require('./src/assets/shoe.jpg')}
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
              source={require('./src/assets/wrogn.jpeg')}
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
              source={require('./src/assets/pant.jpeg')}
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
    </SafeAreaView>
  );
}

function HomeScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.homeScreenSafeAreaView}>
      <View style={styles.upperContainer}>
        <View style={styles.upperview}>
          <View style={styles.myntraView}>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/menu.png')}
                style={styles.menustyle}
              />
            </TouchableOpacity>
            <Image
              source={require('./src/assets/myntra.png')}
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
                    source={require('./src/assets/micg.gif')}
                    style={{height: 70, width: 70, borderRadius: 90}}
                  />
                  <Text style={{marginTop: 20}}>Speak Now</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Image
                      style={styles.textStyle}
                      source={require('./src/assets/cancel.png')}
                    />
                  </Pressable>
                </View>
              </Modal>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image
                  source={require('./src/assets/mic.png')}
                  style={styles.micStyle}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Notification');
              }}>
              <Image
                source={require('./src/assets/noti.png')}
                style={styles.notiStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Wish');
              }}>
              <Image
                source={require('./src/assets/heart.png')}
                style={styles.heartStyle}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Bag');
              }}>
              <Image
                source={require('./src/assets/bag.png')}
                style={styles.bagStyle}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.searchView}>
          <Image
            source={require('./src/assets/search.png')}
            style={styles.searchStyle}
          />
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Search for brands and products"
            style={styles.searchProduct}
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.productStyle}>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/summer.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>SUMMER STORE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/men.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>MEN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/women.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>WOMEN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/kids.jpg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>KIDS</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/beuty.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>BEAUTY</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/home.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>HOME</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/jewel.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>JEWELLERY</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/foot.jpg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>FOOTWARE</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/access.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>ACCESSORIES</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./src/assets/style.jpeg')}
                style={styles.summerStyle}
              />
              <Text style={styles.summerText}>STYLECAST</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.secondUpperView}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Image
              source={require('./src/assets/ad3.gif')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/ad2.gif')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/moffer1.jpeg')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/moffer2.jpeg')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/moffer3.jpeg')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/moffer4.jpeg')}
              style={styles.secondContainerStyle}
            />
            <Image
              source={require('./src/assets/moffer5.jpeg')}
              style={styles.secondContainerStyle}
            />
          </ScrollView>
        </View>
        <View style={styles.thirdMainView}>
          <Text style={styles.itemViewed}>ITEMS YOU HAVE VIEWED</Text>

          <View style={{flexDirection: 'row'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.viewedItem}>
                <Image
                  source={require('./src/assets/shoe.jpg')}
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
                  source={require('./src/assets/watch.jpeg')}
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
                  source={require('./src/assets/pant.jpeg')}
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
                  source={require('./src/assets/woodland.jpeg')}
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
                  source={require('./src/assets/wrogn.jpeg')}
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
      </ScrollView>
    </SafeAreaView>
  );
}

function CategoryScreen({navigation}) {
  return (
    <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is Category</Text>
    </SafeAreaView>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Notification" component={Notification} />
      <HomeStack.Screen name="Wish" component={WishList} />
      <HomeStack.Screen name="Bag" component={ShoppingBag} />
    </HomeStack.Navigator>
  );
}

const CategoryStack = createNativeStackNavigator();

function CategoryStackScreen() {
  return (
    <CategoryStack.Navigator>
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
        options={{headerShown: false}}
      />
    </CategoryStack.Navigator>
  );
}

const Header = props => {
  return (
    <SafeAreaView style={{marginHorizontal: 10, marginTop: 5}}>
      <Text style={{fontSize: 25, alignSelf: 'center'}}>{props.Header}</Text>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        shifting={true}
        activeColor="black"
        tabBarColor="black"
        screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarColor: 'red',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: !focused
                        ? 'https://cdn-icons-png.flaticon.com/512/7268/7268237.png'
                        : 'https://cdn-icons-png.flaticon.com/512/7268/7268199.png',
                    }}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Categories"
          component={CategoryStackScreen}
          options={{
            tabBarColor: 'black',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: focused
                        ? 'https://cdn-icons.flaticon.com/png/512/3405/premium/3405818.png?token=exp=1649481800~hmac=edbae3dba1fc602a3b5bbc5fa34ab6e4'
                        : 'https://cdn-icons.flaticon.com/png/512/3405/premium/3405828.png?token=exp=1649481764~hmac=355893c667a5bf96e2fada0c150fdcb8',
                    }}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Studio"
          component={CategoryStackScreen}
          options={{
            tabBarColor: 'black',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: !focused
                        ? 'https://cdn-icons.flaticon.com/png/512/942/premium/942151.png?token=exp=1649483034~hmac=c530cc82f792c931105e4e3d927a7b45'
                        : 'https://cdn-icons.flaticon.com/png/512/942/premium/942100.png?token=exp=1649483037~hmac=5c4ca1201a79728fa3460b796771b534',
                    }}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Explore"
          component={CategoryStackScreen}
          options={{
            tabBarColor: 'black',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: focused
                        ? 'https://cdn-icons.flaticon.com/png/512/4671/premium/4671081.png?token=exp=1649483158~hmac=6d567606caed2c60fc583f00696d65b6'
                        : 'https://cdn-icons.flaticon.com/png/512/4229/premium/4229877.png?token=exp=1649483161~hmac=8184a9941b55aac65d8935c89b129c6f',
                    }}
                  />
                </View>
              );
            },
          }}
        />

        <Tab.Screen
          name="Profile"
          component={CategoryStackScreen}
          options={{
            tabBarColor: 'black',
            tabBarIcon: ({focused}) => {
              return (
                <View>
                  <Image
                    style={{height: 20, width: 20}}
                    source={{
                      uri: focused
                        ? 'https://cdn-icons-png.flaticon.com/512/456/456141.png'
                        : 'https://cdn-icons-png.flaticon.com/512/456/456283.png',
                    }}
                  />
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  upperContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  menustyle: {
    height: 20,
    width: 20,
    margin: 10,
  },
  upperview: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  upperText: {
    flexDirection: 'column',
  },
  myntraStyle: {
    height: 30,
    width: 30,
    margin: 5,
  },
  becomeText: {
    fontSize: 10,
    marginTop: 6,
  },
  insiderText: {
    fontSize: 12,
    color: 'brown',
  },
  upperImage: {
    flexDirection: 'row',
  },
  myntraView: {
    flexDirection: 'row',
  },
  micStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  notiStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  heartStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  bagStyle: {
    height: 22,
    width: 22,
    margin: 10,
  },
  searchProduct: {
    height: 28,
    padding: 5,
    fontSize: 12,
    backgroundColor: 'white',
    width: '80%',
  },
  searchView: {
    borderWidth: 0.5,
    marginHorizontal: 10,
    marginTop: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'grey',
  },
  searchStyle: {
    height: 15,
    width: 15,
    margin: 8,
    alignSelf: 'center',
  },
  summerStyle: {
    height: 60,
    width: 60,
    margin: 15,
    borderRadius: 90,
  },
  summerText: {
    fontSize: 11,
    alignSelf: 'center',
    bottom: 10,
    left: 2,
  },
  productStyle: {
    flexDirection: 'row',

  },
  NotificationScreen: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  secondUpperView: {
    flex: 0.35,
    backgroundColor: 'white',
    marginTop: 14,
  },
  secondContainerStyle: {
    width: 380,
    resizeMode: 'stretch',
    height: 215,
    margin: 10,
  },
  homeScreenSafeAreaView: {
    flex: 1,
  },
  thirdMainView: {
    flex: 0.4,
    // borderWidth:1,
    marginTop: 10,
    backgroundColor: 'white',
  },
  itemViewed: {
    margin: 10,
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 13,
    marginTop: 20,
  },
  shoeStyle: {
    height: 140,
    width: '100%',
    resizeMode: 'stretch',
  },
  viewedItem: {borderWidth: 1, width: 140, margin: 10, borderColor: 'grey'},
  notifyText: {
    fontSize: 12,
    color: 'grey',
  },
  wishlistText: {
    flex: 0.55,
    marginTop: 5,
    backgroundColor: '#e3e3e3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wishlistShopNowText: {
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    color: 'red',
    fontWeight: '600',
  },
  shoppingBagScreen: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
  },
  shoppingBagText: {
    flex: 0.48,
    marginTop: 5,
    backgroundColor: '#fbfbfb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shoppingBagIntrestedStyle: {
    flex: 0.5,
    backgroundColor: 'white',
    marginTop: 15,
  },
  intrestedTextInBagStyle: {
    margin: 10,
    fontWeight: '100',
    fontSize: 12,
    color: '#4b4b4d',
  },
  shoppingBagItemStyle: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey',
  },
  shoppingBagItemTextStyle: {marginTop: 20, marginLeft: 10},
  shoppinBagNameStyle: {color: 'grey', fontSize: 12, marginTop: 4},
  shoppingBagItemStyle4: {
    flexDirection: 'row',
  },
  modalView: {
    margin: 20,
    flex: 0.35,
    marginTop: 250,
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
    height: 40,
    width: 40,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'purple',
    fontSize: 35,
  },
});
