import React, {useState, useEffect} from 'react';
import {
    Container,
    Content,
    Item,
    Input,
    Toast,
    Button,
    View,
    Text,
} from 'native-base';
import AwesomeLoading from 'react-native-awesome-loading';
import {useMutation} from 'react-query';
import {Formik} from 'formik';
import {Image, StyleSheet, TouchableOpacity,ImageBackground,Alert } from 'react-native';
//from "react-native-gesture-handler";
//import styles from "../styles/styles";
import * as Yup from 'yup';
import {authLogin} from '../../../config/api';
import Bg from '../../image/Background.png';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../config/api' ;
import Spinner from 'react-native-loading-spinner-overlay';

function Login(props) {
    const [loading, setLoading] = useState(false);

    const handleSubmitLogin = value => {
        console.log('here')
        setLoading(true)
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            email: value.email,
            password: value.password,
        };
        console.log(body)

        Axios.post(
            `${API}/user/login`,
            JSON.stringify(body),
            headers,
        )
            .then(r => {
                
                if (r.data.code == 200) {
                    setLoading(false)
                    console.log(r.data.data.KODEPENDONOR);
                    AsyncStorage.setItem('token', r.data.data.token);
                    AsyncStorage.setItem('role', r.data.data.role);
                    AsyncStorage.setItem('exp', r.data.data.exp);
                    AsyncStorage.setItem('ktp', r.data.data.ktp);
                    AsyncStorage.setItem('nama', r.data.data.nama);
                    AsyncStorage.setItem('alamat', r.data.data.alamat);
                    AsyncStorage.setItem('kecamatan', r.data.data.kecamatan);
                    AsyncStorage.setItem('kelurahan', r.data.data.kelurahan);
                    AsyncStorage.setItem('wilayah', r.data.data.wilayah);
                    AsyncStorage.setItem('kartudonor', r.data.data.KODEPENDONOR);
                    AsyncStorage.setItem(
                        'tempat_lahir',
                        r.data.data.tempat_lahir,
                    );
                    AsyncStorage.setItem(
                        'tanggal_lahir',
                        r.data.data.tanggal_lahir,
                    );
                    AsyncStorage.setItem(
                        'status_menikah',
                        r.data.data.status_menikah,
                    );
                    AsyncStorage.setItem(
                        'jenis_kelamin',
                        r.data.data.jenis_kelamin,
                    );
                    AsyncStorage.setItem(
                        'nomor_telepon',
                        r.data.data.nomor_telepon,
                    );
                    AsyncStorage.setItem('email', r.data.data.email);
                    AsyncStorage.setItem('gambar', r.data.data.gambar);

                    // AsyncStorage.setItem('golongan_darah',r.data.data.golongan_darah);
                    switch (r.data.data.role) {
                        case 'pendonor':
                            props.navigation.replace('Dashboard');
                            break;
                        case 'admin':
                            props.navigation.replace('DashboardAdmin');
                            break;
                    }
                } else {
                    setLoading(false)
                    Alert.alert("Gagal","Email Atau Password Tidak Cocok",
                    [{ text: "Coba Lagi", onPress: () => console.log("OK Pressed") }]
                   )
                }
            })
            .catch(err => {
                setLoading(false)
                Alert.alert("Error","Silahkan Coba Lagi",
                    [{ text: "Coba Lagi", onPress: () => console.log("OK Pressed") }]
                   )
                console.log('error : ', err);
            });
    };

    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                source={Bg}
                resizeMode="cover"
                style={styles.image}>
                <AwesomeLoading indicatorId={18} size={50} isActive={loading} text="loading" />
        
                <Content contentContainerStyle={styles.container}>
                    <View style={styles.logo}>
                        <Image
                            source={require('../../image/logo.png')}
                            style={{
                                justifyContent: 'center',
                                width: 138,
                                height: 150,
                                bottom: '5%',
                                alignItems: 'center',
                                alignSelf: 'flex-start',
                            }}></Image>
                        <Text style={{fontWeight: 'bold', fontSize: 40}}>
                            LOGIN
                        </Text>
                    </View>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        validationSchema={Yup.object({
                            email: Yup.string().email('Invalid email address').required('Required'),
                            password: Yup.string().max(
                                20,
                                'Must be 5 characters or less',
                            ).required('Required'),
                        })}
                        onSubmit={value => {
                            handleSubmitLogin(value);
                        }}>
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
                                        value={values.email}
                                        placeholder="Email"
                                        underlineColorAndroid="transparent"
                                    />
                                </Item>
                                {errors.email && (
                                    <View>
                                        <Text style={styles.errMsg}>
                                            {errors.email}
                                        </Text>
                                    </View>
                                )}
                                <Item style={styles.inputView} regular>
                                    <Input
                                        style={styles.inputText}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        underlineColorAndroid="transparent"
                                    />
                                </Item>
                                {errors.password && (
                                    <View>
                                        <Text style={styles.errMsg}>
                                            {errors.password}
                                        </Text>
                                    </View>
                                )}
                                <Button
                                    onPress={handleSubmit}
                                    full
                                    style={styles.loginBtn}>
                                    <Text>Login</Text>
                                </Button>
                            </View>
                        )}
                    </Formik>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'GantiPasword')}>
                        <Text
                            style={{
                                marginTop: 10,
                                fontSize: 12,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'normal',
                            }}>
                            Lupa Password ?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Register')}>
                        <Text
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'normal',
                            }}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </Content>
            </ImageBackground>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent: 'center',
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
    loginBtn: {
        width: '70%',
        borderRadius: 25,
        height: 50,
        marginTop: 10,
        alignSelf: 'center',
    },
    errMsg: {
        color: 'black',
        marginBottom: 10,
        marginTop: -10,
        fontSize: 12,
        paddingLeft: 10,
    },spinnerTextStyle: {
        color: '#FFF',
    },
});
