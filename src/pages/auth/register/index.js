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
} from 'native-base';
import {useMutation} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import * as Yup from 'yup';
import qs from 'qs';
import Axios from 'axios';
import Bg from '../../image/Baground2.jpg';

function Register(props) {
    const handleSubmitRegister = value => {
        const url = 'http://sahabat-utd.id:6005';
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        const body = {
            role: 'pendonor',
            nama: value.nama,
            email: value.email,
            nomor_telepon: value.nomorTelepon,
        };
        Axios.post(`${url}/api/simaba/user/register`, qs.stringify(body), {
            headers,
        })
            .then(res => {
                if (res.data.code === 200) {
                    alert(
                        'anda telah terdaftar, silakan cek email untuk mendapatkan credential',
                    );
                    props.navigation.dispatch(StackActions.replace('Login'));
                } else {
                    console.log('Error', res.data.message);
                    alert('username sudah digunakan');
                    props.navigation.dispatch(StackActions.replace('Register'));
                }
            })
            .catch(err => {
                console.log('test : ', err);
            });
    };

    const goNextPage = page => {
        if (page) {
            props.navigation.replace(page);
        }
    };

    return (
        <Container>
            <Image
                source={Bg}
                style={{width: '100%', height: '100%', position: 'absolute'}}
            />
            <Image
                source={require('../../image/logo.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../image/Logo2.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
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
                                />
                            </Item>
                            {errors.password && (
                                <View>
                                    <Text style={styles.errMsg}>
                                        {errors.password}
                                    </Text>
                                </View>
                            )}
                            <ListItem>
                                <CheckBox checked={false} color="red" />
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
        color: 'red',
        marginBottom: 10,
        marginTop: -10,
        fontSize: 12,
        paddingLeft: 10,
    },
});
