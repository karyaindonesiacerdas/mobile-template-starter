import React from 'react';
import {
    Container,
    Content,
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
    Card,
} from 'native-base';
import {useMutation} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {Image, StyleSheet, } from 'react-native';
import {TouchableOpacity} from 'react-native'
import * as Yup from 'yup';
//from "react-native-gesture-handler";
//import styles from "../styles/styles";
// import {authRegister} from '../../../config/api';
import Bg from '../../image/Baground2.jpg'
import { ScrollView } from 'react-native-gesture-handler';


function DonorBiasa(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };

    return (
        <Container >
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
            <Content contentContainerStyle={styles.container}>
                <View style={styles.logo}>
                    <Text style={{fontWeight: 'bold', fontSize: 25}}>
                       DAFTAR DONOR DARAH BIASA
                    </Text>
                </View>
                <ScrollView>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .max(20, 'Must be 5 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={goNextPage.bind(this, 'Data')}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (
                        <View>
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('Text')}
                                    onBlur={handleBlur('Text')}
                                    value={values.Text}
                                    placeholder="NO KTP"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.Text && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.Text}
                                    </Text>
                                </View>
                            )}
                            
                        </View>
                    )}
                </Formik>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .max(20, 'Must be 5 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={goNextPage.bind(this, 'Data')}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (
                        <View>
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.username}
                                    placeholder="Nama Lengkap"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.username && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.username}
                                    </Text>
                                </View>
                            )}
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('alamat')}
                                    onBlur={handleBlur('alamat')}
                                    value={values.alamat}
                                    placeholder="Alamat Lengkap"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.alamat && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.alamat}
                                    </Text>
                                </View>
                            )}
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('kelurahan')}
                                    onBlur={handleBlur('kelurahan')}
                                    value={values.kelurahan}
                                    placeholder="Kelurahan"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.kelurahan && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.kelurahan}
                                    </Text>
                                </View>
                            )}
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('Kecamatan')}
                                    onBlur={handleBlur('kecamatan')}
                                    value={values.kecamatan}
                                    placeholder="Kecamatan"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.kecamatan && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.kecamatan}
                                    </Text>
                                </View>
                            )}
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('Kab/kota')}
                                    onBlur={handleBlur('kab/kota')}
                                    value={values.kabkota}
                                    placeholder="Kab/Kota"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.kabkota && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.kabkota}
                                    </Text>
                                </View>
                            )}
                            <Item style={styles.inputView} regular>
                                <Input
                                    style={styles.inputText}
                                    onChangeText={handleChange('No.Telp')}
                                    onBlur={handleBlur('No.Telp')}
                                    value={values.Notelp}
                                    placeholder="No.Telp"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
                            {errors.Notelp && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.Notelp}
                                    </Text>
                                </View>
                            )}
                            <View
          style={{
            alignContent: "center",

            flexDirection: "row",
            justifyContent: "center",
              alignContent: "center",
              marginTop:80,
            
          }}
        >
          <Card
            style={{
              backgroundColor: "#000",width: "40%", marginRight:"2%" }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'KegiatanDonor')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20,
             
                  color: "white",
                  fontWeight: "bold",textAlign:'center',
                }}
              >
                Kembali
              </Text>
            </TouchableOpacity>
          </Card>
          <Card
            style={{
              backgroundColor: "#000",width: "40%",marginLeft:"2%"
            }}
          >
            <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Data')} >
              <Text
                style={{
                  margin: 10,
                  fontSize: 20, textAlign:'center',

                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Selanjutnya
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
                            
                            {/* {mutation.isLoading && (
                                <Spinner size="small" color="black" />
                            )} */}
                        </View>
                    )}
                </Formik>
                </ScrollView>
            </Content>
        </Container>
    );
}

export default DonorBiasa;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: '10%',
    },
    logo: {
        marginBottom: 20,
        alignSelf: 'center',
    },
    inputView: {
        backgroundColor: 'white',
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: 'center',
        padding: 20,
    },
    inputText: {
        height: 50,
    },
    registerBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
    },
    errMsg: {
        color: 'red',
        marginBottom: 10,
        marginTop: -10,
        fontSize: 12,
        paddingLeft: 10,
    },
});
