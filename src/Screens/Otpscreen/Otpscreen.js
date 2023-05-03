import React, { useState, useEffect} from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLabel from '../../Components/ButtonWithLabel';
import GoBackToScreen from '../../Components/GoBackToScreen';
import OtpTextInput from '../../Components/OtpTextInput';
import imagePath from '../../constant/imagePath';
import eng from '../../constant/lang/eng';
import color from './../../styels/color';
import styles from './styles';
import auth from '@react-native-firebase/auth';
function OtpScreen({ navigation,route }) {
const [code, setCode] = useState('');
// const [confirm, setConfrim] = useState(null)
function onAuthStateChanged(user) {
  // console.log(user)
}

const confirm = route?.params.confrim
console.log(confirm,"confirm>>>>>>>>>>>>><>>????")
useEffect(() => {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber; // unsubscribe on unmount
}, []);
  const signIn = async () => {
      try {
        await confirm.confrim.confirm(code);
        console.log('update>>>>',code)
      } catch (error) {
        console.log('Invalid code.',error);
      } 
  }
  return (
    <SafeAreaView style={styles.saveStyle}>
      <View style={{ ...styles.mainView }}>
        <GoBackToScreen onButtonClick={() => navigation.goBack()} />
        <View style={styles.mainViewItemView}>
          <View style={styles.inputView}>
            <Text style={styles.WelcomBackTextStyle}>{eng.WELCOMEBACK}</Text>
            <View style={styles.clickTextView}>
              <Text style={styles.weWillTextstyle}>{eng.WESENT4}</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageIconeStyle}
                  source={imagePath.edit}
                />
              </TouchableOpacity>
            </View>
            <View>
              <OtpTextInput 
              inputvalue={code}
              inputOnChangeText={setCode}
              />
              <TouchableOpacity>
                <Text d style={styles.resendTextStyle}>
                  {eng.RESEND}
                </Text>
              </TouchableOpacity>


            </View>
          </View>
        </View>
        <View style={styles.btnStyle}>
          <ButtonWithLabel
            btnColor={color.btndarkColor}
            text={eng.NEXT}
            marginLeftCus={-30}
            height={48}
            txtColor={color.darkBlack}
            marginHorizontal={10}
            fontWeight={'bold'}
            onpressButton={()=>signIn()}
          />
        </View>


      </View>
    </SafeAreaView>
  );
}
export default OtpScreen;
