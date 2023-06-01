import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, FlatList, ScrollView } from 'react-native';
import styles from './styles';
import GoBackToScreen from '../../Components/GoBackToScreen';
import eng from '../../constant/lang/eng';
import TextInputForSellingItem from '../../Components/TextInputForSellingItem';
import color from '../../styels/color';
import { moderateScale } from 'react-native-size-matters';
import imagePath from '../../constant/imagePath';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const Cars = ({ navigation }) => {
    const [firstInput, setFirstInput] = useState('');
    const [secondInput, setSecondInput] = useState('');
    const [thiredInput, setThiredInput] = useState('');
    const [fourthInput, setFourthInput] = useState('');
    const [fifthInput, setFifithInput] = useState('');

    const myFuelData = [
        {
            id: 1,
            type: eng.CNGHYBRIDS,
        },
        {
            id: 2,
            type: eng.DIESEL,
        },
        {
            id: 3,
            type: eng.ELECTRIC,
        },
        {
            id: 4,
            type: eng.LPG,
        },
        {
            id: 5,
            type: eng.PETROL,
        },
    ];
    const myTransmission = [{
        id: 1,
        type: eng.AUTOMATICE,
    },
    {
        id: 2,
        type: eng.MANUAL
    }];
    const myNoOwner = [{
        id: 1,
        type: eng.First
    },
    {
        id: 2,
        type: eng.SECOND
    },
    {
        id: 3,
        type: eng.THIREDNO
    }, {
        id: 4,
        type: eng.FOURTH
    },
    {
        id: 5,
        type: eng.FOURTHPLUS
    }
    ]

    return (
        <View style={styles.mainView}>
            <View style={styles.gobackViewStyle}>
                <GoBackToScreen onButtonClick={() => navigation.goBack()} />
                <Text style={styles.includeTextStyle}>{eng.INCLUDE}</Text>
            </View>
            <ScrollView>
            <KeyboardAwareScrollView>
                <View style={styles.allItemView}>
                    <Text
                        style={{
                            ...styles.brandTextStyle,
                            marginTop: moderateScale(10),
                            color: !firstInput ? color.white : color.boderSky,
                        }}>
                        {eng.BRAND}*
                    </Text>
                    <View
                        style={{
                            ...styles.textInputStyleView,
                            borderWidth: 1,
                            borderColor: !firstInput ? color.white : color.boderSky,
                        }}>
                        <TextInputForSellingItem
                            placeholder={eng.BRAND}
                            onChangeText={text => setFirstInput(text)}
                            value={firstInput}
                            width={325}
                        />
                        {firstInput ? (
                            <Image style={styles.textInputImage} source={imagePath.check} />
                        ) : null}
                        <Image style={styles.textInputDownImage} source={imagePath.down}/>
                    </View>
                    <Text
                        style={{
                            ...styles.brandTextStyle,
                            color: !secondInput ? color.white : color.boderSky,
                        }}>
                        {eng.YEAR}*
                    </Text>
                    <View
                        style={{
                            ...styles.textInputStyleView,
                            borderWidth: 1,
                            borderColor: !secondInput ? color.white : color.boderSky,
                        }}>
                        <TextInputForSellingItem
                            placeholder={eng.YEAR}
                            onChangeText={setSecondInput}
                            value={secondInput}
                            width={325}
                            maxLength={4}
                            keyboardType={'decimal-pad'}
                            borderColor={!secondInput ? color.white : color.boderSky}
                        />
                        {secondInput ? (
                            <Image style={styles.textInputImage} source={imagePath.check} />
                        ) : null}
                    </View>
                    <Text style={styles.countingText}>{secondInput.length}/4</Text>
                    <Text style={styles.brandTextStyle}>{eng.FUEL}*</Text>
                    <FlatList
                        horizontal
                        data={myFuelData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={styles.flatListView}>
                                    <Text style={styles.flatlistTextStyle}>{item.type}</Text>
                                </View>
                            )
                        }}
                    />
                    <Text style={{ ...styles.brandTextStyle }}>{eng.TRANSMISSION}</Text>
                    <FlatList
                        horizontal
                        data={myTransmission}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ ...styles.flatListView, marginTop: moderateScale(2) }}>
                                    <Text style={styles.flatlistTextStyle}>{item.type}</Text>
                                </View>
                            )
                        }}
                    />
                    <Text
                        style={{
                            ...styles.brandTextStyle,
                            color: !thiredInput ? color.white : color.boderSky,
                        }}>
                        {eng.KMDriven}*
                    </Text>
                    <View
                        style={{
                            ...styles.textInputStyleView,
                            borderWidth: 1,
                            borderColor: !thiredInput ? color.white : color.boderSky,
                        }}>
                        <TextInputForSellingItem
                            onChangeText={setThiredInput}
                            value={thiredInput}
                            width={325}
                            maxLength={6}
                            borderColor={!thiredInput ? color.white : color.boderSky}
                            placeholder={eng.KMDriven}
                        />
                        {thiredInput ? (
                            <Image style={styles.textInputImage} source={imagePath.check} />
                        ) : null}
                    </View>
                    <Text style={styles.countingText}>{thiredInput.length}/6</Text>
                    <Text style={styles.brandTextStyle}>{eng.NOOFOWNER}</Text>
                    <FlatList
                        horizontal
                        data={myNoOwner}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ ...styles.flatListView, marginTop: moderateScale(2) }}>
                                    <Text style={styles.flatlistTextStyle}>{item.type}</Text>
                                </View>
                            )
                        }}
                    />
                    <View style={styles.suggestionView}>
                        <Text
                            style={{
                                ...styles.brandTextStyle,
                                color: !fourthInput ? color.white : color.boderSky,
                            }}>
                            {eng.ADTITLE}*
                        </Text>
                        <Text style={styles.brandTextStyle}>{eng.SUGGESTIONS}</Text>
                    </View>
                    <View
                        style={{
                            ...styles.textInputStyleView,
                            borderWidth: 1,
                            borderColor: !fourthInput ? color.white : color.boderSky,
                        }}>
                        <TextInputForSellingItem
                            placeholder={eng.KEYFEATURES}
                            onChangeText={setFourthInput}
                            maxLength={70}
                            value={fourthInput}
                            width={325}
                            borderColor={!fourthInput ? color.white : color.boderSky}
                        />
                        {fourthInput ? (
                            <Image style={styles.textInputImage} source={imagePath.check} />
                        ) : null}
                    </View>
                    <Text style={styles.countingText}>{fourthInput.length}/70</Text>
                    <Text
                        style={{
                            ...styles.brandTextStyle,
                            color: !fifthInput ? color.white : color.boderSky,
                        }}>
                        {eng.ADDITIONALINFORMATION}*
                    </Text>
                    <View
                        style={{
                            ...styles.textInputStyleView,
                            borderWidth: 1,
                            borderColor: !fifthInput ? color.white : color.boderSky,
                        }}>
                        <TextInputForSellingItem
                            placeholder={eng.INCLUDECONDITIONS}
                            onChangeText={setFifithInput}
                            value={fifthInput}
                            multiline={true}
                            height={120}
                            maxLength={4096}
                            width={325}
                            borderColor={!fifthInput ? color.white : color.boderSky}
                        />
                    </View>
                    <Text style={styles.countingText}>{fifthInput.length}/4098</Text>
                </View>
            </KeyboardAwareScrollView>
            </ScrollView>
        </View>
    );
};
export default Cars;
