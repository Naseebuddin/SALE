import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, s, scale, verticalScale } from "react-native-size-matters";
import eng from "../../constant/lang/eng";
import color from "./../../styels/color";
export default StyleSheet.create({
    mainView:{
        backgroundColor:color.black,
        flex:1,
    },
    btnStyle:{
       flexDirection:'row',
       marginLeft:moderateVerticalScale(10)
    },
    imageStyel:{
        marginRight:moderateScale(8)
    },
    iconNotifyStyel:{
        marginLeft:moderateScale(35),
        width:moderateScale(20),
        height:moderateVerticalScale(20)
    },
    imageLocationStyel:{
        marginTop:moderateVerticalScale(15),
        marginLeft:moderateScale(10),
        height:moderateScale(14),
        width:moderateScale(14)
       
    },
    textInputBoderStyle:{

        backgroundColor:color.inputDarBlack,
        borderTopWidth:moderateScale(1),
        borderBottomWidth:moderateScale(1),
        height:moderateVerticalScale(65),
        width:('100%'),
        marginTop:moderateVerticalScale(18),   
    },
    textInputStyle:{
        marginVertical:moderateVerticalScale(9),
        height:moderateVerticalScale(44),
        width:moderateScale(345),
        flexDirection:'row',
        marginHorizontal:moderateScale(12),
        borderWidth:moderateScale(1),
        borderColor:color.white,
        borderRadius:moderateScale(8),
        paddingVertical:moderateVerticalScale(12),
        paddingHorizontal:moderateScale(10)
    },
    // WelcomeTextStyle:{
    //     fontSize:22,
    //     color:color.white,
    //     alignSelf:'center',
    // },
    LocationTextstyle:{
        color:color.white,
        alignSelf:'center',
        marginLeft:moderateScale(12),
        fontSize:moderateScale(18)
    },
    // buttonView:{
    //     marginTop:moderateVerticalScale(50)
    // },
    // oRTextstyle:{
    //     color:color.white,
    //     alignSelf:'center',
    //     marginTop:moderateVerticalScale(8),
    //     fontSize:moderateScale(16)
    // },
    // LoginTextstyle:{
    //     color:color.white,
    //     alignSelf:'center',
    //     marginTop:moderateVerticalScale(12),
    //     fontSize:moderateScale(16),
    //     fontWeight:'bold',
    //     textDecorationLine: 'underline',
    //     marginBottom:moderateVerticalScale(15)
    // },
    // OlxTextstyle:{
    //     color:color.white,
    //     alignSelf:'center',
    //     marginTop:moderateVerticalScale(1),
    //     fontSize:moderateScale(14)
    // },
})