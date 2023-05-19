import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import navigationString from '../../constant/navigationString';
import styles from './styles';
import imagePath from '../../constant/imagePath';
import TextInputWithLabel from '../../Components/TextInputWithLabel';
import eng from '../../constant/lang/eng';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import color from './../../styels/color';
import Lottie from 'lottie-react-native';
export default function Home({navigation}) {
  const DATA = [
    {
      id: 1,
      name: eng.CARNAME,
      carImage: {
        image1: imagePath.car1,
        image2: imagePath.car2,
        image3: imagePath.car3,
        image4: imagePath.car4,
        image5: imagePath.car5,
        image6: imagePath.car6,
      },

      heartImage: imagePath.blackHeart,
      model: '2022',
      location: 'sector 36c',
      price: '$1,5000',
      postData: '11/11/2023',
      ownership: eng.OWNERSHIP,
      petrol: eng.PETROL,
      description: eng.DESCRIPTIONNOTE,
      km: 76999333,
      carType: eng.AUTOMATICE,
    },

    {
      id: 2,
      name: 'Chevrolet Suburban',
      carImage: {
        image1: imagePath.car4,
        image2: imagePath.car2,
        image3: imagePath.car3,
        image4: imagePath.car1,
        image5: imagePath.car5,
        image6: imagePath.car6,
      },
      heartImage: imagePath.blackHeart,
      model: '2021',
      location: 'sector 36c',
      price: '&5,000',
      postData: '11/11/2023',
      ownership: eng.OWNERSHIP,
      petrol: eng.PETROL,
      description: eng.DESCRIPTIONNOTE,
      km: 76999333,
      carType: eng.AUTOMATICE,
    },
    {
      id: 3,
      name: 'Audi',
      carImage: {
        image1: imagePath.car2,
        image2: imagePath.car1,
        image3: imagePath.car3,
        image4: imagePath.car4,
        image5: imagePath.car5,
        image6: imagePath.car6,
      },
      heartImage: imagePath.blackHeart,
      model: '2022',
      location: 'sector 36c',
      price: '$7,5000',
      postData: '11/11/2023',
      ownership: eng.OWNERSHIP,
      petrol: eng.PETROL,
      description: eng.DESCRIPTIONNOTE,
      km: 76999333,
      carType: eng.AUTOMATICE,
    },
    {
      id: 4,
      name: 'Chevrolet Suburban',
      carImage: {
        image1: imagePath.car5,
        image2: imagePath.car2,
        image3: imagePath.car1,
        image4: imagePath.car4,
        image5: imagePath.car1,
        image6: imagePath.car6,
      },
      heartImage: imagePath.blackHeart,
      model: '2021',
      location: 'sector 36c',
      price: '$6,5000',
      postData: '11/11/2023',
      ownership: eng.OWNERSHIP,
      petrol: eng.PETROL,
      description: eng.DESCRIPTIONNOTE,
      km: 76999333,
      carType: eng.AUTOMATICE,
    },
  ];

  const [SelectHeart, setSelectHeart] = useState({DATA});
  const stateChanging = id => {
    let copyArray = DATA.map(value => {
      if (value.id == id) {
        return {...value, heartImage: imagePath.whiteHeart};
      } else {
        return value;
      }
    });
    setSelectHeart({DATA: copyArray});
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.mainView}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationString.LOCATIONS)}
            style={styles.btnStyle}>
            <Image source={imagePath.mark} style={styles.imageStyel} />
            <Text style={styles.LocationTextstyle}>locatons </Text>
            <Image source={imagePath.down} style={styles.imageLocationStyel} />
          </TouchableOpacity>
          <View style={styles.textInputBoderStyle}>
            <View style={styles.textInputStyle}>
              <Image source={imagePath.search} style={styles.searchIceon} />
              <TextInputWithLabel
                place={eng.SEARCHITEMNOTE}
                placeholderColor={color.darkBlack}
                width={moderateScale(242)}
                multipleLine={true}
                textColor={color.darkBlack}
              />
              <TouchableOpacity>
                <Image
                  source={imagePath.ic_notify}
                  style={styles.iconNotifyStyel}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <ScrollView contentContainerStyle={{marginBottom: 20}}>
            <View style={styles.lottiViewStyle}>
              <Lottie
                style={styles.lottiStyle}
                source={require('./../../assets/image/sale.json')}
                autoPlay
                loop
              />
              <View style={styles.lottiBtnViewStyle}>
                <TouchableOpacity
                  style={styles.buttonInsideLottie}
                  onPress={() => navigation.navigate(navigationString.BUYCAR)}>
                  <Text style={styles.buttonTextStyle}>{eng.BUYCAR}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate(navigationString.SELLCAR)}
                  style={styles.buttonInsideLottie}>
                  <Text style={styles.buttonTextStyle}>{eng.SELLCAR}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.browseCategories}>
              <Text style={styles.browsetextStyle}>{eng.BROWSECATEGORIES}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationString.SEEALL)}>
                <Text style={styles.seeAlltextStyle}>{eng.SEEALL}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView horizontal>
                <View style={styles.browseScrollView}>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(navigationString.OLXAUTOS)
                    }
                    style={styles.browseScrollIcon}>
                    <Image style={styles.iconeDesing} source={imagePath.car} />
                    <Text style={styles.OlxAutostextStyle}>{eng.OLXAUTOS}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate(navigationString.PROPERTIES)
                    }
                    style={styles.browseScrollIcon}>
                    <Image style={styles.iconeDesing} source={imagePath.real} />
                    <Text style={styles.OlxAutostextStyle}>
                      {eng.PROPERTIES}
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(navigationString.MOBILE)}
                    style={styles.browseScrollIcon}>
                    <Image
                      style={styles.iconeDesing}
                      source={imagePath.phone}
                    />
                    <Text style={styles.OlxAutostextStyle}>{eng.MOBILE}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(navigationString.JOBS)}
                    style={styles.browseScrollIcon}>
                    <Image style={styles.iconeDesing} source={imagePath.work} />
                    <Text style={styles.OlxAutostextStyle}>{eng.JOBS}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(navigationString.BIKES)}
                    style={styles.browseScrollIcon}>
                    <Image style={styles.iconeDesing} source={imagePath.two} />
                    <Text style={styles.OlxAutostextStyle}>{eng.BIKES}</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <Text style={styles.freshTextStyle}>
                {eng.FRESHRECOMMENDATIONS}
              </Text>
              <FlatList
                numColumns={2}
                columnWrapperStyle={styles.flatlistrowStyle}
                contentContainerStyle={{paddingBottom: 120}}
                scrollEnabled={false}
                data={SelectHeart.DATA}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => {
                  return (
                    <View style={styles.flatlistViewStyle}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(navigationString.DETAILS, {item})
                        }>
                        <View style={styles.flatlistHeartIconeView}>
                          <Image
                            resizeMode="stretch"
                            style={styles.flatlistImageStyle}
                            source={item.carImage.image1}
                          />
                          <TouchableOpacity
                            style={styles.heartViewDesing}
                            onPress={() => stateChanging(item.id)}>
                            <Image
                              style={styles.heartAdjus}
                              source={item.heartImage}
                            />
                          </TouchableOpacity>
                        </View>
                        <Text style={{...styles.textDesing}}>{item.price}</Text>
                        <Text
                          style={{
                            ...styles.textDesing,
                            fontWeight: '300',
                            marginTop: moderateScale(5),
                          }}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            ...styles.textDesing,
                            fontWeight: '200',
                            marginTop: moderateScale(2),
                          }}>
                          {item.model}
                        </Text>
                        <Text
                          style={{
                            ...styles.textDesing,
                            fontWeight: '200',
                            marginTop: moderateScale(8),
                          
                      
                          }}>
                          {item.location}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}
