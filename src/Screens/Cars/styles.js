import { StyleSheet } from "react-native";
import color from "../../styels/color";
import { moderateScale } from "react-native-size-matters";
export default StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: color.backgroundSellColor,
    },
    gobackViewStyle: {
        backgroundColor: color.realBlack,
        flexDirection: 'row',
    },
    includeTextStyle: {
        color: color.white,
        fontSize: moderateScale(15),
        fontWeight: '600',
        alignSelf: 'center',
        marginLeft: moderateScale(70),
        marginVertical: moderateScale(8)
    },
    allItemView: {
        marginTop: moderateScale(18)

    },
    brandTextStyle: {
        color: color.white,
        fontSize: moderateScale(16),
        marginHorizontal: moderateScale(5),
        marginTop: moderateScale(25),
        marginVertical: moderateScale(5),
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    textInput: {
        borderWidth: 1,
    },
    textInputStyleView: {
        flexDirection: 'row',
        borderRadius: moderateScale(8),
    },
    textInputImage: {
        height: 16,
        width: 16,
        alignSelf: 'center',
    },
    textInputDownImage: {
        height: 12,
        width: 12,
        marginLeft:moderateScale(2),
        alignSelf: 'center',
    },
    countingText: {
        color: color.white,
        textAlign: 'right',
        marginRight: moderateScale(5),
        fontWeight: '700'
    },
    suggestionView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: moderateScale(2)
    },
    flatlistTextStyle:{
        marginTop:moderateScale(2),
        color:color.white,
        fontWeight:'bold',
        alignSelf:'center',
        paddingHorizontal:moderateScale(25),
        paddingVertical:moderateScale(12)
    },
    flatListView:{
        borderWidth:1,
        marginHorizontal:moderateScale(3),
        borderColor:color.white,
        borderRadius:moderateScale(5)
    }
})