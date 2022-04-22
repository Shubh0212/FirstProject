import {StyleSheet} from 'react-native';
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
    height: 27,
    padding: 3,
    fontSize: 12,
    backgroundColor: 'white',
    width: '90%',
    top:2
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
    width: 370,
    resizeMode:'center',
    height: 215,
    margin: 10,
  },
  homeScreenSafeAreaView: {
    flex: 1,
  },
  thirdMainView: {
    flex: 1,
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
    flex: 1,
    // marginTop: 5,
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
  wishlistScreen: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#f5f5f5',
    flex: 1,
  },
  ExploreScreenStyle: {
    flex: 0.12,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  ExploreViewStyle: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  ExploreinsiderViewStyle: {
    flexDirection: 'row',
    marginTop: 8,
    borderBottomWidth: 0.2,
    borderBottomColor: '#717079',
  },
  ExploreImageStyle: {height: 20, width: 20, margin: 15},
  ExploreTextStyle: {marginTop: 16, fontSize: 15, color: '#225e52', left: 6},
  ExploreNewImgStyle: {height: 25, width: 35, margin: 15, bottom: 6, right: 4},
  ExploreMyntraTextStyle: {
    flex: 1,
    marginTop: 50,
    marginLeft: 20,
    color: '#717079',
  },
  ExploreLastinsiderViewStyle: {
    flexDirection: 'row',
    marginTop: 8,
  },
});

export default styles;
