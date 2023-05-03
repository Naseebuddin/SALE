import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import navigationString from '../../constant/navigationString';
import styles from './styles';
import imagePath from '../../constant/imagePath';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import eng from '../../constant/lang/eng';
import { moderateScale } from 'react-native-size-matters';
import color from './../../styels/color';
export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate(navigationString.LOCATIONS)}
            style={styles.btnStyle}>
            <Image source={imagePath.mark} style={styles.imageStyel} />
            <Text style={styles.LocationTextstyle}>locatons  </Text>
            <Image source={imagePath.down} style={styles.imageLocationStyel} />
          </TouchableOpacity>
          <View style={styles.textInputBoderStyle}>
            <View style={styles.textInputStyle}>
              <Image source={imagePath.search} style={styles.imageStyel}/>

              <TextInputWithLabel place={eng.SEARCHITEMNOTE}
                placeholderColor={color.darkBlack}
                width={moderateScale(242)}
                multipleLine={true}
                textColor={color.darkBlack}
                />
                <Image source={imagePath.ic_notify} style={styles.iconNotifyStyel}/>
            </View>
       
          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

