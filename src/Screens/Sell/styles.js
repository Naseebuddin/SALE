import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import color from '../../styels/color';
import { StyleSheet } from 'react-native';
import Mobile from '../Mobile/Mobile';
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.realBlack,
    paddingVertical: moderateScale(10),
    // paddingTop:moderateScale(10)
  },
  blockView: {
    backgroundColor: color.btndarkColor,
    // padding:10
  },
  closeStyling: {
    width: scale(18),
    height: verticalScale(18),
    marginVertical: moderateScale(12),
    marginHorizontal: moderateScale(14),
    alignSelf: 'center'
  },
  OfferringView: {
    flexDirection: 'row',
  },
  offerringTextStyle: {
    color: color.white,
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: moderateScale(45),
  },
  flatListViewStyle: {
    flexDirection: 'row',
    borderColor: color.btndarkColor,
    backgroundColor: color.black,
  },
  imageStyle: {
    alignSelf: 'center',
    width: scale(40),
    height: verticalScale(40),
  },
  textStyling: {
    color: color.white,
    alignSelf: 'center',
    marginTop: moderateScale(10),
  },
  itemStyling: {
    borderBottomWidth: 1,
    borderBottomColor: color.btndarkColor,
    borderRightWidth: 1,
    borderRightColor: color.btndarkColor,
    marginLeft: moderateScale(10),
    height: scale(140),
    width: moderateScale(170),
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemStyle2ndCOlumn: {
    borderBottomWidth: 1,
    borderBottomColor: color.btndarkColor,
    padding: 15,
    height: scale(140),
    width: moderateScale(170),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: moderateScale(15),
  },
});
