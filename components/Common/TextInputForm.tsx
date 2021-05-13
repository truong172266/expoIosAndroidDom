import React from 'react';
import {View,Text, StyleSheet, TextInput} from 'react-native';
import {MaterialCommunityIcons } from "@expo/vector-icons";
// @ts-ignore
export default function TextInputForm({labelValue, placeholderValue,actions,showPass, iconName, iconColor,iconSize, ...rest}){
    return(
        <View style={styles.container}>
                <View  style={styles.input}>
                    <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} />
                </View>

                <TextInput
                    value={labelValue}
                    style={styles.input}
                    numberOfLines={1}
                    onChangeText={actions}
                    placeholder={placeholderValue}
                    placeholderTextColor="#666"
                    returnKeyType='done'
                    secureTextEntry={showPass}
                    {...rest}
                />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        flexDirection: 'row',
        marginVertical:10,
        borderRadius:20,
        backgroundColor:'white',
    },
    input:{
        marginStart:10,
        alignSelf:'center',
        paddingVertical:10,
    }
})
