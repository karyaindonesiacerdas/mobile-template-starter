import React, {useState} from 'react';
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
} from 'native-base';
import {useMutation} from 'react-query';
import {Formik} from 'formik';
import {Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import * as Yup from 'yup';
import Bg from '../../image/Baground2.jpg';
import qs from 'qs';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import {API} from '../../../config/api';
import AwesomeLoading from 'react-native-awesome-loading';

function Register(props) {
    const [check1, setCheck1] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmitRegister = value => {
        if (check1) {
            setLoading(true);
            const headers = {
                'Content-Type': 'application/x-www-form-urlencoded',
            };
            const body = {
                role: 'pendonor',
                nama: value.nama,
                email: value.email,
                nomor_telepon: value.nomorTelepon,
            };
            Axios.post(`${API}/user/register`, qs.stringify(body), headers)
                .then(res => {
                    setLoading(false);
                    if (res.data.code === 200) {
                        Alert.alert(
                            'Berhasil',
                            'Anda Telah Terdaftar, Silakan Cek Email Untuk Mendapatkan Credential',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => console.log('OK Pressed'),
                                },
                            ],
                        );
                        props.navigation.navigate('Login');
                    } else {
                        console.log('Error', res.data.message);
                        Alert.alert(
                            'Gagal',
                            'Email Sudah Digunakan , Silahkan Gunakan Email Lain Atau Login',
                            [
                                {
                                    text: 'OK',
                                    onPress: () => console.log('OK Pressed'),
                                },
                            ],
                        );
                        props.navigation.dispatch(
                            StackActions.replace('Register'),
                        );
                    }
                })
                .catch(err => {
                    setLoading(false);
                    console.log('test : ', err);
                });
        } else {
            Alert.alert('Warning', 'Check Term Of Service', [
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    return (
        <Container>
            <Image
                source={Bg}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <AwesomeLoading
                indicatorId={18}
                size={50}
                isActive={loading}
                text="loading.."
            />

            <Image
                source={require('../../image/logo.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}
            />
            <Image
                source={require('../../image/Logo2.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}
            />
            <Content contentContainerStyle={styles.container}>
                <View style={styles.logo}>
                    <Text style={{fontWeight: 'bold', fontSize: 50}}>
                        Register
                    </Text>
                </View>
                <Formik
                    initialValues={{
                        email: '',
                        nama: '',
                        nomorTelepon: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        nomorTelepon: Yup.string()
                            .max(20, 'Must be 5 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={value => {
                        handleSubmitRegister(value);
                        goNextPage.bind(this, 'Login');
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
                                    onChangeText={handleChange('nama')}
                                    onBlur={handleBlur('nama')}
                                    value={values.nama}
                                    placeholder="Nama lengkap"
                                    underlineColorAndroid="transparent"
                                />
                            </Item>
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
                                    onChangeText={handleChange('nomorTelepon')}
                                    onBlur={handleBlur('nomorTelepon')}
                                    value={values.password}
                                    placeholder="No.Telp"
                                    underlineColorAndroid="transparent"
                                    keyboardType="numeric"
                                />
                            </Item>
                            {errors.nomorTelepon && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.nomorTelepon}
                                    </Text>
                                </View>
                            )}
                            <ListItem>
                                <CheckBox
                                    color=""
                                    checked={check1}
                                    onPress={() => setCheck1(!check1)}
                                />
                                <Body>
                                    <Text>
                                        I Agree All the statements in Terms of
                                        Service
                                    </Text>
                                </Body>
                            </ListItem>
                            <Button
                                onPress={handleSubmit}
                                full
                                style={styles.registerBtn}>
                                <Text>Register</Text>
                            </Button>
                        </View>
                    )}
                </Formik>
                <TouchableOpacity onPress={goNextPage.bind(this, 'Login')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
                        }}>
                        Login
                    </Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
}

export default Register;

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
        color: 'black',
        marginBottom: 10,
        marginTop: -10,
        fontSize: 12,
        paddingLeft: 10,
    },
});

