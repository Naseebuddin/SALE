import {Modal, StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import color from './../../styels/color';
export default StyleSheet.create({
  saveStyle: {
    backgroundColor: color.realBlack,
    flex: 1,
  },

  mainView: {
    backgroundColor: color.black,
    flex: 1,
  },
  mainViewItemView: {
    
    flex: 0.9,
  },
  inputView: {
    marginLeft: 12,
  },
  WelcomBackTextStyle: {
    fontSize: 30,
    color: color.white,
    fontWeight: 'bold',
    marginTop: moderateVerticalScale(22),
  },
  weWillTextstyle: {
    color: color.darkBlack,
    marginTop: moderateVerticalScale(12),
    fontSize: moderateScale(14),
  },
  clickTextView: {
    flexDirection: 'row',
  },
  imageIconeStyle: {
    height: verticalScale(20),
    width: scale(20),
    marginLeft: moderateScale(48),
    marginTop: moderateVerticalScale(10),
  },
  resendTextStyle: {
    fontSize: 16,
    color: color.white,
    fontWeight: 'bold',
    marginTop: moderateVerticalScale(45),
    textDecorationLine: 'underline',
    marginLeft: moderateScale(10),
  },
  btnStyle:{
    flex:0.1,
    justifyContent:'flex-end',
    // marginTop:moderateVerticalScale(340)
    
  }
});
