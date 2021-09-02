import React from 'react';
import {
    Container,
    Content,
    Item,
    Input,
    Spinner,
    Toast,
    Button,
    View,
    Text,
} from 'native-base';
import {useMutation} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
//from "react-native-gesture-handler";
//import styles from "../styles/styles";
import * as Yup from 'yup';
import {authLogin} from '../../../config/api';
import Bg from '../../image/Background.png';

function Login(props) {
    const handleSubmitLogin = value => {
        const url = 'http://sahabat-utd.id:6005';
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            email: value.email,
            password: value.password,
        };
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: qs.stringify({title: body}),
        };
        fetch(`${url}/api/simaba/user/register`, requestOptions)
            .then(res => {
                if (res.data.code === 200) {
                    alert('sukses login');
                    props.navigation.dispatch(StackActions.replace('Home'));
                } else {
                    console.log('Error', res.data.message);
                    alert('email atau password tidak cocok');
                    props.navigation.dispatch(StackActions.replace('Login'));
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
                    position: 'absolute',
                    width: 138,
                    height: 150,
                    margin: 10,
                    right: 126,
                    top: 130,
                }}></Image>
            <Content contentContainerStyle={styles.container}>
                <View style={styles.logo}>
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
                        email: Yup.string().email('Invalid email address'),
                        password: Yup.string().max(
                            20,
                            'Must be 5 characters or less',
                        ),
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
                                    style={styles.inputView}
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
                <TouchableOpacity onPress={goNextPage.bind(this, 'Register')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 20,
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'normal',
                        }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </Content>
        </Container>
    );
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: '10%',
    },
    logo: {
        marginBottom: 10,
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
    loginBtn: {
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
