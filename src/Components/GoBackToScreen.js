import {Image, View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import imagePath from '../constant/imagePath';
import color from './../styels/color';
const GoBackToScreen = ({onButtonClick,
customWidth,
}) => {
  return (
    <SafeAreaView style={{backgroundColor:color.black}}>   
       <View style={{...styles.viewStyle,width:customWidth}}>
      <TouchableOpacity onPress={onButtonClick}>
        <Image style={styles.imageStyle} source={imagePath.back} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>

  );
};
export default GoBackToScreen;
const styles = StyleSheet.create({
  viewStyle: {
    marginLeft: 8,
    backgroundColor: color.realBlack,
  },
  imageStyle: {
    height: verticalScale(25),
    width: scale(24),
  },
});
