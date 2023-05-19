import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import color from '../../styels/color';
export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: color.black,
  },
  topView: {
    flexDirection: 'row',
    backgroundColor: color.realBlack,
  },
  imageStyle: {
    height: moderateScale(26),
    width: verticalScale(26),
    marginBottom: moderateVerticalScale(12),
    marginLeft: moderateVerticalScale(15),
  },
  sharebtn: {
    justifyContent: 'flex-end',
    marginLeft: moderateVerticalScale(250),
  },
  carsoulViewStyle: {
    alignItems: 'center',
    backgroundColor: color.btndarkColor,
  },
  carsouleImagesStyle: {
    width: 260,
    height: scale(320),
  },
  indexCoubnt: {
    color: color.realBlack,
    padding: moderateVerticalScale(5),
    alignSelf: 'center',
    fontSize: moderateScale(10),
  },
  txtView: {
    backgroundColor: color.sliver,
    width: scale(30),
    borderRadius: moderateScale(12),
    alignSelf: 'flex-end',
    marginRight: moderateVerticalScale(-50),
    marginTop: moderateScale(-35),
  },
  nameofCarTextSTyle: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginTop: moderateVerticalScale(22),
    marginLeft: moderateScale(10),
  },
  fuelMainView: {
    borderColor: color.darkBlack,
    borderBottomWidth: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateVerticalScale(8),
    marginTop: moderateVerticalScale(15),
    paddingHorizontal: moderateVerticalScale(10),
    paddingRight: moderateVerticalScale(22),
  },
  fuelView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(15),
    marginBottom: moderateVerticalScale(15),
  },
  fuelImagesStyle: {
    width: verticalScale(25),
    height: scale(25),
  },
  carInfoTextStyle: {
    color: color.white,
    fontWeight: '200',
    marginLeft: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(8),
  },
  ownerShipViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateVerticalScale(8),
    marginTop: moderateVerticalScale(5),
    paddingHorizontal: moderateVerticalScale(10),
    paddingRight: moderateVerticalScale(22),
  },
  ownershipImagesStyle: {
    width: verticalScale(16),
    height: scale(16),
  },
  ownershipInfoTextStyle: {
    color: color.white,
    fontWeight: '200',
    marginLeft: moderateVerticalScale(10),
    marginTop: moderateVerticalScale(1),
  },
  ownershipDetailsStyle: {
    color: color.white,
    fontWeight: 'bold',
    marginLeft: moderateVerticalScale(20),
  },
  ownershipPostDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(22),
  },
  descriptionViewStyle:{
    height:scale(220),
    width:verticalScale(320),
    backgroundColor:color.realBlack,
    marginHorizontal:moderateVerticalScale(15),
    marginTop:moderateScale(20),
  },
  descriptionStyle: {
    color: color.white,
    fontWeight: 'bold',
    margin:moderateScale(2),
    fontSize:moderateScale(22)
  },
  descriptionNoteStyle: {
    color: color.white,
    marginTop:moderateScale(22),
    margin:moderateScale(2),
    fontSize:moderateScale(12)
  },
  btnViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(8),
  },
});
