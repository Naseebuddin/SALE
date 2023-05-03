import { StyleSheet } from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import color from './../../styels/color'
export default StyleSheet.create({
  saveStyle: {
    backgroundColor: color.realBlack,
    flex: 1
  },
  mainView: {
    backgroundColor: color.black,
    flex: 1,
  }, viewOne: {
    backgroundColor: color.black,
    flex: 0.9,
  },
  ViewInputAndText: {
    backgroundColor: color.black,
    
  },
  enterTextStyle: {
    fontSize: 22,
    color: color.white,
    fontWeight: 'bold',
  },
  itemView: {
    backgroundColor: color.black,
    marginTop: hp(12),
    marginHorizontal: wp(5),
  },
  weWillTextstyle: {
    color: color.white,
    marginTop: hp(1.5),
    fontSize: moderateScale(14),
  },
  inputStyle: {
    height: hp(6),
    width: wp(85),
    borderWidth: 1,
    borderColor: color.white,
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  textStyle: {
    fontSize: 18,
    color: color.white,
    marginLeft: moderateScale(12),
    color: color.darkBlack,
    borderRightWidth: 1,
    borderRightColor: color.white,
    marginRight: moderateScale(12),
  },
  
  btnStyle: {
  
  flex:0.1,
    justifyContent:'flex-end',
   marginHorizontal:wp(3),

  },
});
