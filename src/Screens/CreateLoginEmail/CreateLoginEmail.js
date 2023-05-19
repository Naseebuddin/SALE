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
function CreateLoginEmail({ navigation }) {
  const [textInputEmial, setTextInputEmail] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputEmailValidation = (val) => {
    setTextInputEmail(val)
    setEmail(val)
  }
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }
  const onSubmit = () => {
    var emailFormatCheckr = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!textInputEmial.match(emailFormatCheckr)) {
      alert("Please enter your emial properly");
    }
    if (email) {
      createUser()
      navigation.goBack()
    }
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
              <Text style={styles.enterEmailTextStyle}>{eng.ENTEREMAILTOCREATEACCOUNT}</Text>
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
              <Text style={styles.passwordStyle}>{eng.PASSWORD}</Text>
              <View style={styles.inputStyle}>
                <TextInputWithLabel
                  width={320}
                  place={'Password'}
                  textColor={color.white}
                  myValue={(password)}
                  onChangeTextInput={val => setPassword(val)}
                  placeholderColor={color.btndarkColor}
                />
              </View>

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
export default CreateLoginEmail;

