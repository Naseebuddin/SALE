import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import imagePath from '../../constant/imagePath';
import eng from '../../constant/lang/eng';
import navigationString from '../../constant/navigationString';
export default function Sell({ navigation }) {
  return (
    <View style={styles.mainView}>
      <View style={styles.OfferringView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image resizeMode='stretch' style={styles.closeStyling} source={imagePath.close} />
        </TouchableOpacity>
        <Text style={styles.offerringTextStyle}>{eng.OFFERING}</Text>
      </View>
      <View style={styles.blockView}>
        <ScrollView>
          <View style={styles.flatListViewStyle}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate(navigationString.CARS)}
                style={styles.itemStyling}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.car}
                />
                <Text style={styles.textStyling}>{eng.CAR}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyling}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.phone}
                />
                <Text style={styles.textStyling}>{eng.MOBILESEN}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyling}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.two}
                />
                <Text style={styles.textStyling}>{eng.BIKESSEN}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyling}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.fuel}
                />
                <Text style={styles.textStyling}>{eng.COMMERCIAL}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.itemStyling, borderBottomWidth: 0 }}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.car}
                />
                <Text style={styles.textStyling}>{eng.CAR}</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/* 2nd column  */}
              <TouchableOpacity style={styles.itemStyle2ndCOlumn}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.home}
                />
                <Text style={styles.textStyling}>{eng.PROPERTIESSEN}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyle2ndCOlumn}>
                <Image style={styles.imageStyle} source={imagePath.work} />
                <Text style={styles.textStyling}>{eng.JOBSSEN}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyle2ndCOlumn}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.computer}
                />
                <Text style={styles.textStyling}>
                  {eng.ELECTRONICSAPPLICATION}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.itemStyle2ndCOlumn}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.home}
                />
                <Text style={styles.textStyling}>{eng.PROPERTIESSEN}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ ...styles.itemStyle2ndCOlumn, borderBottomWidth: 0 }}>
                <Image
                  resizeMode="stretch"
                  style={styles.imageStyle}
                  source={imagePath.search}
                />
                <Text style={styles.textStyling}>{eng.SEEALLCATEGORIES}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
