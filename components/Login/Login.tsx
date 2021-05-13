
import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import styles from './styles';
import { Container, Header, Content, Button, Tab, Tabs } from 'native-base';
import { Avatar , Divider} from 'react-native-elements';
import TextInputForm from "../Common/TextInputForm";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {BackgroundImage} from "react-native-elements/dist/config";

class Login extends React.Component{
    // @ts-ignore
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            user:'',
            password:'',
        };
    }

    render(){
        return(
            <View style={styles.container} >
                <ImageBackground
                    style={styles.image}
                    source={{uri:'https://static.wixstatic.com/media/5b44bf_317f722d308c4426a6ba01e3c61bf072~mv2_d_4206_2366_s_2.jpg/v1/fill/w_1000,h_563,al_c,q_90,usm_0.66_1.00_0.01/5b44bf_317f722d308c4426a6ba01e3c61bf072~mv2_d_4206_2366_s_2.jpg'}} >
                    <Image
                        style={styles.imageGif}
                        source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}} />
                    <View style={styles.auth}>
                        <Text style={{color:'white'}}>Login</Text>
                        <Text style={{marginLeft: 50, color:'white'}}>Register</Text>
                    </View>
                    <View style={styles.containerLogin} >

                        <View style={styles.formLogin}>
                            <Text style={{color:'white',}}>Email</Text>
                            <TextInputForm
                                iconSize={30}
                                iconName={'account-circle-outline'}
                                labelValue={this.state.user}
                                actions={(text)=> this.setState({user: text}) }
                                placeholderValue={'your account'}
                                showPass={false}
                            />
                            <Text style={{color:'white',}}>Password</Text>
                            <TextInputForm
                                iconSize={30}
                                iconName={'lock'}
                                labelValue={this.state.password}
                                actions={(text)=> this.setState({password: text}) }
                                placeholderValue={'your password'}
                                showPass={false}
                            />
                            <Avatar
                                containerStyle={{
                                    alignSelf:'center',
                                    flexDirection:'row',
                                    justifyContent:'center'
                                }}
                                rounded
                                source={{
                                    uri:
                                        'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-9/72781744_101016931327917_7371891113918988288_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=5BxkshA1FrIAX_j4rVv&_nc_ht=scontent-hkg4-1.xx&oh=d9880473b684a1a1a0872be2efc86616&oe=60C06087',
                                }}
                                size ={'medium'}
                                onPress={()=> this.props.navigation.navigate('Root')}
                            />

                        </View>
                        <Text style={styles.text}>-----OR-----</Text>
                        <View style={styles.typeLogin}>
                            <MaterialCommunityIcons name={'facebook'} size={50} color={'blue'} style={styles.iconLogin}/>
                            <MaterialCommunityIcons name={'head-lightbulb'} size={50} color={'#fcad03'} style={styles.iconLogin} />
                            <MaterialCommunityIcons name={'google'}  size={50} color={'red'} style={styles.iconLogin} />

                        </View>

                    </View>
                </ImageBackground>
            </View>
        )
    }
}


export default Login;
