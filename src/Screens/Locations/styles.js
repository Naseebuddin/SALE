import { StyleSheet } from "react-native";
import { moderateScale, moderateVerticalScale, s, scale, verticalScale } from "react-native-size-matters";
import eng from "../../constant/lang/eng";
import color from './../../styels/color';
export default StyleSheet.create({
    mainView:{
        backgroundColor:color.black,
        flex:1,
    },
    btnStyle:{
       flexDirection:'row'
    },
    imageStyel:{
        height:verticalScale(150),
        width:scale(200),
        alignSelf:'center',
        marginTop:moderateScale(105),
        
    },
    WelcomeTextStyle:{
        fontSize:22,
        color:color.white,
        alignSelf:'center',
    },
    LocationTextstyle:{
        color:color.white,
        alignSelf:'center',
        marginTop:moderateVerticalScale(10),
        fontSize:moderateScale(18)
    },
    buttonView:{
        marginTop:moderateVerticalScale(50)
    },
    oRTextstyle:{
        color:color.white,
        alignSelf:'center',
        marginTop:moderateVerticalScale(8),
        fontSize:moderateScale(16)
    },
    LoginTextstyle:{
        color:color.white,
        alignSelf:'center',
        marginTop:moderateVerticalScale(12),
        fontSize:moderateScale(16),
        fontWeight:'bold',
        textDecorationLine: 'underline',
        marginBottom:moderateVerticalScale(15)
    },
    OlxTextstyle:{
        color:color.white,
        alignSelf:'center',
        marginTop:moderateVerticalScale(1),
        fontSize:moderateScale(14)
    },
})