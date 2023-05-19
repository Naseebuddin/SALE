import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import styles from './styles';
import GoBackToScreen from '../../Components/GoBackToScreen';
import imagePath from '../../constant/imagePath';
import eng from '../../constant/lang/eng';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import color from '../../styels/color';
import ButtonWithLabel from '../../Components/ButtonWithLabel';
import auth from '@react-native-firebase/auth';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import navigationString from '../../constant/navigationString';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StateSet from '../../redux/action/action';
import { useSelector } from 'react-redux';
import action from '../../redux/action';
export const storeData = async (value) => {
  try {
    const data = JSON.stringify(value)
    await AsyncStorage.setItem('email', data)
    console.log(value, 'this value>>>')
  } catch (e) {
    // saving error
    console.log('error', e)
  }
}
function LoginThroughEmail({ navigation }) {
  const [textInputEmial, setTextInputEmail] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmailValidation = (val) => {
    setTextInputEmail(val)
    setEmail(val)
  }
  const data = useSelector(state => state)
  console.log(data, 'reducer state')
  const userSignin = () => {
    auth().signInWithEmailAndPassword(email, password).
      then((res) => {
        console.log(res.user.email, "this is response>>>??")
        // StateSet(res.user.email)
        action.StateSet(res?.user?.email)
        alert('user Login ');
      }).catch(error => {
        alert(error)
      })
    {
    }
  }
  // console.log(email, password, '>>>>>>>>>')
  const onSubmit = async () => {
    var emailFormatCheckr = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!textInputEmial.match(emailFormatCheckr)) {
      alert("Please enter your emial properly");
    }
    else

      userSignin();
  }
  return (
    <SafeAreaView style={styles.saveStyle}>
      <View style={styles.mainView}>
        <View style={{ flex: 0.9 }}>
          <KeyboardAwareScrollView>
            <GoBackToScreen onButtonClick={() => navigation.goBack()} />
            <View style={styles.imageView}>
              <Image style={styles.imageIconeStyle} source={imagePath.girl} />
            </View>
            <View>
              <Text style={styles.enterEmailTextStyle}>{eng.EnterEMAIL}</Text>
            </View>
            <View>
              <Text style={styles.emialStyle}>{eng.Email}</Text>
              <View style={styles.inputStyle}>
                <TextInputWithLabel
                  width={320}
                  place={'Email'}
                  textColor={color.white}
                  myValue={(email, textInputEmial)}
                  onChangeTextInput={inputEmailValidation}
                  placeholderColor={color.btndarkColor}
                />
              </View>
              <View style={styles.inputStyle}>
                <TextInputWithLabel
                  width={320}
                secureTextEntry={true}
                  place={'Password'}
                  textColor={color.white}
                  myValue={(password)}
                  onChangeTextInput={val => setPassword(val)}
                  placeholderColor={color.btndarkColor}
                />
              </View>
              <Text onPress={() => navigation.navigate(navigationString.CREATELOGINEMAIL)} style={styles.noteTextStyle}>{eng.NEWUSERNOTES}</Text>
            </View>
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.btnStyle}>
          <ButtonWithLabel
            onpressButton={() => onSubmit()}
            text={eng.NEXT}
            fontWeight={'bold'}
            txtColor={color.black}
            btnColor={color.btndarkColor}
            width={370}
            height={48}
            marginLeftCus={-32}
          />
        </View>
      </View>
    </SafeAreaView>

  );
}
export default LoginThroughEmail;
