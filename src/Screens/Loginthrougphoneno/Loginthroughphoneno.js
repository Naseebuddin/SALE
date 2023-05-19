import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonWithLabel from '../../Components/ButtonWithLabel';
import GoBackToScreen from '../../Components/GoBackToScreen';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import eng from '../../constant/lang/eng';
import navigationString from '../../constant/navigationString';
import color from './../../styels/color';
import styles from './styles';
import auth from '@react-native-firebase/auth';
function Loginthroughphoneno({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [confrim, setConfrim] = useState(null);
  const [displayOTPInput, setDisplayOTPInput] = useState(false);
  const countryCode = '+91'
  // const [code, setCode] = useState('');
  function onAuthStateChanged(user) {
    console.log(user)
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  const phonNumberValidation = (val) => {
    if (val.match("^[0-9]*$")) {
      setPhoneNumber(val)
    }
  }
  const requestOTP = async () => {
    setDisplayOTPInput(true)
    const confirmation = await auth().signInWithPhoneNumber(countryCode + phoneNumber);
    console.log(confirmation, 'llll>>>')
    setConfrim(confirmation);
  }
  const onSubmit = () => {
    if (phoneNumber == "") {
      alert("Please enter your number")
    }
    else {
      requestOTP();
      navigation.navigate(navigationString.OTPSCREEN, { confrim })
    }
  }
  return (
    <SafeAreaView style={styles.saveStyle}>
      <View style={styles.mainView}>
        <View style={styles.viewOne}>
          <View style={styles.ViewInputAndText}>
            <GoBackToScreen onButtonClick={() => navigation.goBack()} />
            <View style={styles.itemView}>
              <Text style={styles.enterTextStyle}>{eng.ENTERYOUR}</Text>
              <Text style={styles.weWillTextstyle}>{eng.WEWILLSEND}</Text>
              <View style={styles.inputStyle}>
                <Text style={styles.textStyle}>{eng.CODE}</Text>
                <TextInputWithLabel
                  myValue={phoneNumber}
                  onChangeTextInput={phonNumberValidation}
                  KeyBoard={'phone-pad'}
                  textLength={10}
                  width={300}
                  text={eng.CODE}
                  autoFocusInput={true}
                  textColor={color.white}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnStyle}>
          <ButtonWithLabel
            text={eng.NEXT}
            fontWeight={'bold'}
            txtColor={color.black}
            btnColor={color.white}
            width={360}
            height={48}
            marginLeftCus={-32}
            onpressButton={() => onSubmit()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default Loginthroughphoneno;
