import {Modal, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import color from './../../styels/color';
export default StyleSheet.create({
  mainView: {
    backgroundColor: color.black,
    flex: 1,
  },
  btnStyle: {
    flexDirection: 'row',
    marginLeft: moderateVerticalScale(10),
  },
  imageStyel: {
    marginTop: moderateScale(10),
    marginRight: moderateScale(6),
    height: scale(24),
    width: verticalScale(24),
  },
  searchIceon: {
    // marginLeft:moderateScale(5),
    marginRight: moderateScale(10),
  },
  iconNotifyStyel: {
    marginLeft: moderateScale(35),
    width: verticalScale(20),
    height: scale(20),
  },
  imageLocationStyel: {
    marginTop: moderateVerticalScale(15),
    marginLeft: moderateScale(10),
    height: scale(14),
    width: verticalScale(14),
  },
  textInputBoderStyle: {
    backgroundColor: color.inputDarBlack,
    borderTopWidth: moderateScale(1),
    borderBottomWidth: moderateScale(1),
    height: scale(65),
    width: '100%',
    marginTop: moderateVerticalScale(18),
  },
  textInputStyle: {
    marginVertical: moderateVerticalScale(9),
    height: moderateVerticalScale(44),
    width: moderateScale(345),
    flexDirection: 'row',
    marginHorizontal: moderateScale(12),
    borderWidth: moderateScale(1),
    borderColor: color.white,
    borderRadius: moderateScale(8),
    paddingVertical: moderateVerticalScale(12),
    paddingHorizontal: moderateScale(10),
  },
  LocationTextstyle: {
    color: color.white,
    alignSelf: 'center',
    marginTop: moderateScale(12),
    marginLeft: moderateScale(6),
    fontSize: moderateScale(18),
  },
  lottiStyle: {
    height: scale(190),
    width: verticalScale(175),
    paddingHorizontal: moderateScale(4),
    paddingVertical: moderateVerticalScale(3),
  },
  lottiViewStyle: {
    backgroundColor: color.black,
  },
  lottiBtnViewStyle: {
    flexDirection: 'row',
    marginTop: moderateScale(-38),
    justifyContent: 'space-between',
    marginHorizontal: moderateVerticalScale(30),
  },
  buttonInsideLottie: {
    backgroundColor: color.white,
    width: verticalScale(145),
    height: scale(32),
    borderRadius: moderateScale(5),
    justifyContent: 'center',
  },
  buttonTextStyle: {
    color: color.black,
    alignSelf: 'center',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  browseCategories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(25),
    marginHorizontal: moderateScale(15),
  },
  browsetextStyle: {
    color: color.white,
    fontSize: moderateScale(18),
  },
  OlxAutostextStyle: {
    color: color.white,
    fontSize: moderateScale(12),
    marginLeft:10,
    marginTop:moderateScale(10)
  },
  seeAlltextStyle: {
    color: color.white,
    textDecorationLine: 'underline',
    fontSize: moderateScale(18),
  },
  browseScrollView: {
    flexDirection: 'row',
    marginTop: moderateScale(20),
    marginLeft: moderateScale(5),
  },
  browseScrollIcon: {
    marginRight: moderateScale(10),
    justifyContent:'center',
    alignItems:'center'
  },
  iconeDesing: {
    marginLeft: moderateScale(15),
    height: scale(60),
    width: verticalScale(60),
  },
  freshTextStyle: {
    color: color.white,
    fontSize: moderateScale(18),
    marginTop: moderateScale(15),
    marginLeft: moderateScale(10),
  },
  flatlistViewStyle:{
    borderColor:color.btndarkColor,
    borderWidth:1,
    borderRadius:moderateScale(8),
    height:scale(240),
    width:verticalScale(180)
  },
  flatlistrowStyle:{
    justifyContent:'space-between',
    marginTop:moderateScale(5),
    marginHorizontal:moderateScale(4)
  },
  flatlistHeartIconeView:{
    flexDirection:'row',
    justifyContent:'center'
  },
  heartAdjus:{
    height:scale(20),
    width:verticalScale(20)
  },
  flatlistImageStyle:{
    height:scale(100),
    width:verticalScale(90),
    
  },
  textDesing:{
    marginTop:moderateScale(12),
    marginHorizontal:moderateScale(8),
    fontWeight:'bold',
    color:color.white,
    fontSize:moderateScale(18)
  },
  heartViewDesing:{
    marginTop:moderateScale(5),
    marginLeft:moderateScale(5),
    height:scale(28),
    width:moderateScale(26),
    backgroundColor:color.realBlack,
    borderRadius:100,
    alignItems:'center',
    justifyContent:'center'
  
  }
});
