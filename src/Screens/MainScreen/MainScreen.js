import React, {useContext, useEffect, useState} from 'react';
import {Linking, StatusBar} from 'react-native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';
import ButtonWithLabel from '../../Components/ButtonWithLabel';
import imagePath from '../../constant/imagePath';
import eng from './../../constant/lang/eng';
import navigationString from '../../constant/navigationString';
import color from './../../styels/color';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
function MainScreen({navigation}) {
  const [user, setUser] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '713669375181-8mmpqtr0hut4maro9lurqt3usjmufgjc.apps.googleusercontent.com',
    });
  });
  const googleSignIn = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    const res = await auth().signInWithCredential(googleCredential);
    setUser({res});
    console.log('res>>>', res);
  };
  SignOut = async () => {
    try {
      await GoogleSignin.signOut();
      this.setUser({user: null});
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <StatusBar />
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => navigation.navigate(navigationString.TABROUTES)}>
          <Image style={styles.xStyleing} source={imagePath.close} />
        </TouchableOpacity>
        <View style={styles.imageView}>
          <Image style={styles.imageStyel} source={imagePath.olxLog} />
          <Text style={styles.WelcomeTextStyle}>{eng.WELCOME}</Text>
          <Text style={styles.trustedTextstyle}>{eng.TheTRUSTED}</Text>
          <View style={styles.buttonView}>
            <ButtonWithLabel
              onpressButton={() =>
                navigation.navigate(navigationString.LOGINTHROUGPHONENO)
              }
              text={eng.CONTIPHONE}
              image={imagePath.iphone}
              txtColor={color.white}
              height={verticalScale(42)}
              marginHorizontal={20}
              borderWidth={1}
            />
            <ButtonWithLabel
              marginHorizontal={20}
              text={eng.CONTIGOOGLE}
              image={imagePath.google}
              txtColor={color.white}
              height={verticalScale(42)}
              borderWidth={1}
              onpressButton={googleSignIn}
            />
            <ButtonWithLabel
              borderWidth={1}
              text={eng.CONTIPHONE}
              image={imagePath.appleIcn}
              btnColor={color.white}
              height={verticalScale(42)}
              marginHorizontal={20}
              onpressButton={SignOut}
            />
          </View>
          <Text style={styles.oRTextstyle}>{eng.OR}</Text>
          <Text
            onPress={() =>
              navigation.navigate(navigationString.LOGINTHROUGHEMAIL)
            }
            style={styles.LoginTextstyle}>
            {eng.LOGINEMAIL}
          </Text>
          <Text style={styles.OlxTextstyle}>{eng.IFYOUCONTI}</Text>
          <Text
            onPress={() => Linking.openURL('https://help.olx.in/hc/en-us')}
            style={{...styles.OlxTextstyle, textDecorationLine: 'underline'}}>
            {eng.OLXTERM}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default MainScreen;
