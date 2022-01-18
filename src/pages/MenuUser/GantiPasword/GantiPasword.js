import React, {useState} from 'react';
import {
    Container,
    Card,
    Item,
    Input,
    Spinner,
    Toast,
    ListItem,
    CheckBox,
    Body,
    Button,
    View,
    Text,
} from 'native-base';
import {useMutation} from 'react-query';
import {Formik} from 'formik';
import {Alert, Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import Bg from '../../image/Baground2.jpg';
import qs from 'qs';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from '../../styles/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_MANAGEMENT} from '../../../config/api';

function GantiPasword(props) {
  const submitData =(value) => {
    async function submit(){
      const token = await AsyncStorage.getItem('token')
      const url = USER_MANAGEMENT;
      const body = {
        email: value.email,
        new_password: value.new_password,
        nik : value.nik
      };
      console.log(body)
    
      Axios.put(`${USER_MANAGEMENT}/simaba/change-password`, body,
      {headers:{
        'Content-Type': 'application/json',
      }})
          .then(r => {
              if (r.data.code == 200) {
                Alert.alert("Berhasil","Password Berhasil Di Update",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }]
                )
                AsyncStorage.setItem('token', '');
                props.navigation.replace('Login')
              } else {
                Alert.alert("Gagal","Email & NIK Tidak Cocok",
                [{ text: "Coba Lagi", onPress: () => console.log("OK Pressed") }]
               )
               props.navigation.replace('GantiPasword')
              }
          })
          .catch(err => {
              console.log('error : ', err);
          });
    }
    if(value.new_password_confirm == value.new_password){
      submit()
    }
    else{
      Alert.alert("Gagal","Konfirmasi Password Harus Sama Dengan Password Baru",
       [{ text: "OK", onPress: () => console.log("OK Pressed") }]
      )
    }
  }
  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  return (
    <Container>
      <Image source={Bg} style={{width: '100%', height: '100%', position: 'absolute'}} />
      <Image
        source={require("../../image/logo.png")}
        style={{
          width: 54,
          height: 60,
          top:10,
          margin:20,
    
          left:10,
        }}
      ></Image>
      <Image
        source={require("../../image/Logo2.png")}
        style={{
          position:'absolute',
          width: 54,
          height: 60,
          margin:20,
       
          right:10,
          top:10,
        }}
      ></Image>
      <ScrollView>
        
  
     
        <Text style={{ textAlign:'center', marginTop:100,fontSize: 35,fontWeight: "bold",  color: "black" }}>
                Ganti Pasword
              </Text>                 
              <Formik
                    initialValues={{
                        email: '',
                        nik: '',
                        new_password: '',
                        new_password_confirm : '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        nik: Yup.string().required('Required'),
                    })}
                    onSubmit={value => {
                        submitData(value);
                        goNextPage.bind(this, 'Dashboard');
                    }}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (
                        <View>
                            <Text
                          style={{
                            marginLeft: 30,
                            marginTop: 70,
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "black",
                            textShadowColor: "#fff",
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 10,
                          }}
                        >
                          Email
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('email')}
                          onBlur={handleBlur('email')}
                          value={values.email}
                          underlineColorAndroid="transparent"
                        />
                        </Item>
                        <Text
                          style={{
                            marginLeft: 30,
                            marginTop: 20,
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "black",
                            textShadowColor: "#fff",
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 10,
                          }}
                        >
                          NIK
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('nik')}
                          onBlur={handleBlur('nik')}
                          value={values.nik}
                          underlineColorAndroid="transparent"
                        />
                        </Item>
                        <Text
                          style={{
                            marginLeft: 30,
                            marginTop: 20,
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "black",
                            textShadowColor: "#fff",
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 10,
                          }}
                        >
                          Password Baru
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('new_password')}
                          onBlur={handleBlur('new_password')}
                          value={values.new_password}
                          underlineColorAndroid="transparent"
                          secureTextEntry={true}
                  
                        />
                        </Item>
                        <Text
                          style={{
                            marginLeft: 30,
                            marginTop: 20,
                            fontSize: 15,
                            fontWeight: "normal",
                            color: "black",
                            textShadowColor: "#fff",
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 10,
                          }}
                        >
                          Konfirmasi Password Baru
                        </Text>
                        <Item style={styles.item}>
                        <Input
                          style={styles.input}
                          onChangeText={handleChange('new_password_confirm')}
                          onBlur={handleBlur('new_password_confirm')}
                          value={values.new_password_confirm}
                          underlineColorAndroid="transparent"
                          secureTextEntry={true}
                  
                        />
                        </Item>
                        <View
                          style={{
                            alignContent: "center",

                            flexDirection: "row",
                            justifyContent: "center",
                              alignContent: "center",
                              marginTop:65,
                            
                          }}
                        >
                        <Card
                            style={{
                                backgroundColor: '#000',
                                width: '40%',
                                marginLeft: '2%',
                            }}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={handleSubmit}>
                                <Text
                                    style={{
                                        margin: 10,
                                        fontSize: 20,
                                        textAlign: 'center',

                                        color: 'white',
                                        fontWeight: 'bold',
                                    }}>
                                    Submit
                                </Text>
                            </TouchableOpacity>
                          </Card>
                            </View>
                          </View>                    
                    )}
                </Formik>
            </ScrollView>
        </Container>
    );
}

export default GantiPasword;
