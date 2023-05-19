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
  imageView: {
    flexDirection: 'row',
    height: verticalScale(70),
    backgroundColor: color.darkgreen,
    width: scale(72),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(100),
    paddingTop: moderateScale(10),
    marginTop: moderateScale(30),
  },
  imageIconeStyle: {
    height: verticalScale(68),
    width: scale(48),
    resizeMode: 'stretch',
  },
  enterEmailTextStyle: {
    fontSize: 22,
    color: color.white,
    fontWeight: 'bold',
    marginTop: moderateVerticalScale(18),
    marginLeft: moderateScale(10),
  },
  btnStyle: {
    marginTop: moderateVerticalScale(340),
  },
  emialStyle: {
    fontSize: 18,
    color: color.lightGreen,
    marginTop: moderateVerticalScale(45),
    marginLeft: moderateScale(15),
  },
  inputStyle: {
    height: verticalScale(42),
    width: scale(330),
    borderWidth: 1,
    borderColor: color.lightGreen,
    marginTop: moderateScale(8),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(5),
    paddingLeft: moderateScale(15),
    marginHorizontal: moderateScale(10),
  },
  noteTextStyle: {
    fontSize: 16,
    height: verticalScale(65),
    marginHorizontal: moderateVerticalScale(20),
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(8),
    backgroundColor: color.ligthYellow,
    marginTop: moderateVerticalScale(15),
    borderRadius: 120,
    borderWidth: 1,
    borderColor: color.ligthYellow,
    fontWeight: '400',
  },
  btnStyle: {
    flex:0.1,
    justifyContent:'flex-end',
    marginHorizontal:moderateScale(5),
    alignItems:'center'

  },
});
