import React, {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import ReadMore from '@fawazahmed/react-native-read-more';
import GoBackToScreen from '../../Components/GoBackToScreen';
import Share from 'react-native-share';
import imagePath from '../../constant/imagePath';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import color from '../../styels/color';
import eng from '../../constant/lang/eng';
import {moderateScale} from 'react-native-size-matters';
import ButtonWithLabel from '../../Components/ButtonWithLabel';
export const slider_Width = Dimensions.get('window').width + 5;
export const ITEM_Width = Math.round(slider_Width * 1);
const Details = ({route, navigation}) => {
  const [heart, setHeart] = useState(false);
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);
  const stateChange = () => {
    if (heart == false) {
      setHeart(true);
      return;
    }
    if (heart == true) {
      setHeart(false);
      return;
    }
  };
  const myCustomShare = async () => {
    const shareOption = {
      message: 'this is a test massege',
    };
    try {
      const shareRespose = await Share.open(shareOption);
    } catch (error) {
      console.log('Eroor =>', error);
    }
  };
  const data = route?.params.item;
  const myimages = data.carImage;
  let {image1, image2, image3, image4, image5, image6} = myimages;

  const myPromsImages = [
    {
      id: 1,
      url: image1,
    },
    {
      id: 2,
      url: image2,
    },
    {
      id: 3,
      url: image3,
    },
    {
      id: 4,
      url: image4,
    },
    {
      id: 5,
      url: image5,
    },
    {
      id: 6,
      url: image6,
    },
  ];
  console.log(data, '>>>>>>>');
  const renderItem = ({item}) => {
    return (
      <View style={styles.carsoulViewStyle}>
        <ImageBackground
          source={item.url}
          style={styles.carsouleImagesStyle}
          resizeMode="stretch">
          <Pagination
            dotsLength={myPromsImages.length}
            activeDotIndex={index}
            carouselRef={isCarousel}
            dotStyle={{
              marginTop: 280,
              width: 10,
              borderRadius: 5,
              marginHorizontal: 1,
              backgroundColor: color.white,
            }}
            tappableDots={true}
            inactiveDotStyle={{
              backgroundColor: color.btndarkColor,
              // Define styles for inactive dots here
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={0.6}
          />
          <View style={styles.txtView}>
            <Text style={styles.indexCoubnt}>{index + 1}/6</Text>
          </View>
        </ImageBackground>

        <View></View>
      </View>
    );
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.topView}>
        <GoBackToScreen onButtonClick={() => navigation.goBack()} />
        <TouchableOpacity
          style={styles.sharebtn}
          onPress={() => myCustomShare()}>
          <Image style={styles.imageStyle} source={imagePath.share} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => stateChange()}>
          <Image
            style={styles.imageStyle}
            source={heart ? imagePath.whiteHeart : imagePath.blackHeart}
          />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{paddingBottom: moderateScale(60)}}>
        <View>
          <Carousel
            layout={'default'}
            ref={isCarousel}
            data={myPromsImages}
            renderItem={renderItem}
            sliderWidth={slider_Width}
            itemWidth={ITEM_Width}
            onSnapToItem={index => setIndex(index)}
          />
        </View>
        <View>
          <Text style={styles.nameofCarTextSTyle}>{data.name}</Text>
          <Text style={styles.nameofCarTextSTyle}>{data.price}</Text>
        </View>
        <View style={styles.fuelMainView}>
          <View style={styles.fuelView}>
            <Image
              resizeMode="stretch"
              style={styles.fuelImagesStyle}
              source={imagePath.fuel}
            />
            <Text style={styles.carInfoTextStyle}>{data.petrol}</Text>
          </View>
          <View style={styles.fuelView}>
            <Image
              resizeMode="stretch"
              style={styles.fuelImagesStyle}
              source={imagePath.meter}
            />
            <Text style={styles.carInfoTextStyle}>{data.km}</Text>
          </View>
          <View style={styles.fuelView}>
            <Image
              resizeMode="stretch"
              style={styles.fuelImagesStyle}
              source={imagePath.gear}
            />
            <Text style={styles.carInfoTextStyle}>{data.carType}</Text>
          </View>
        </View>
        <View style={styles.ownerShipViewStyle}>
          <View style={styles.fuelView}>
            <Image
              style={styles.ownershipImagesStyle}
              source={imagePath.user}
            />
            <Text style={styles.ownershipInfoTextStyle}>{eng.OWNER}</Text>
          </View>
          <View style={styles.fuelView}>
            <Image
              style={styles.ownershipImagesStyle}
              source={imagePath.mark}
            />
            <Text style={styles.ownershipInfoTextStyle}>{data.location}</Text>
          </View>
          <View style={styles.fuelView}>
            <Image
              style={styles.ownershipImagesStyle}
              source={imagePath.mark}
            />
            <Text style={styles.ownershipInfoTextStyle}>{eng.POSTINGDATE}</Text>
          </View>
        </View>
        <View>
          <View style={styles.ownershipPostDetailsView}>
            <Text style={styles.ownershipDetailsStyle}>{data.ownership}</Text>
            <Text style={styles.ownershipDetailsStyle}>{data.location}</Text>
            <Text style={styles.ownershipDetailsStyle}>{data.postData}</Text>
          </View>
        </View>
        <View style={styles.descriptionViewStyle}>
          <Text style={styles.descriptionStyle}>{eng.DESCRIPTION}</Text>
          <ReadMore
            numberOfLines={3}
            seeMoreText="Read more"
            seeLessText="Read less"
            seeLessStyle={{
              color: color.white,
              fontWeight: 'bold',
              fontSize: moderateScale(14),
              margin: -5,
            }}
            seeMoreStyle={{
              color: color.white,
              fontSize: moderateScale(14),
              margin: -5,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
            }}
            style={styles.descriptionNoteStyle}>
            {eng.DESCRIPTIONNOTE}
          </ReadMore>
        </View>
      </ScrollView>
      <View style={styles.btnViewStyle}>
        <ButtonWithLabel
          width={170}
          height={50}
          fontWeight={'bold'}
          image={imagePath.chat1}
          text={eng.CHAT}
          btnColor={color.white}
        />
        <ButtonWithLabel
          width={170}
          height={50}
          fontWeight={'bold'}
          image={imagePath.phoneCalling}
          text={eng.CALL}
          btnColor={color.white}
        />
      </View>
    </View>
  );
};

export default Details;
