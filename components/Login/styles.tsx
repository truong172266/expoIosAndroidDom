import {StyleSheet} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        height:hp(100),
    },
    imageGif:{
        resizeMode:'cover',
        height:hp(20),
        marginTop: hp(5)
    },
    auth:{
        flexDirection:'row',
        marginHorizontal: wp(30),
        marginTop: hp(3),
        color:'white',
    },
    image:{
        resizeMode:'cover',
        height:hp(120),
        width:wp(100),
    },

    formLogin:{
        position:'relative',
        borderColor:'red',
        marginHorizontal: wp(15),
        marginTop: hp(2),
        padding: wp(5),
        elevation:5,
        shadowColor:'white'
    },
    containerLogin:{

    },
    typeLogin:{
        flexDirection:'row',
        justifyContent: 'space-around',
        marginTop:hp(3),
        marginHorizontal:wp(15)
    },
    text:{
        alignSelf:'center',
        marginTop: hp(5),
        color:'white',
        fontSize:25
    },
    iconLogin:{
        backgroundColor:'white', borderRadius:100
    }
})
export default styles;
