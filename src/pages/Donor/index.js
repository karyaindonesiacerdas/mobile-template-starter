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
    Label,
} from 'native-base';
import {useMutation, useQuery} from 'react-query';
import {Formik} from 'formik';
import {Alert, Image, Keyboard, StyleSheet} from 'react-native';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';


function index(props) {
    const dataProfile = useQuery('my-profile', userProfile);
    const mutation = useMutation(updateProfile, {
        onSettled: (data, error, variables, context) => {
            Toast.show({
                text: data.message,
                type: data.type,
                duration: 2000,
                buttonText: 'Okay',
            });
            if (data?.code == 200) {
                setTimeout(() => {
                    AsyncStorage.clear();
                    props.navigation.replace('LoadingStart');
                }, 2000);
                return;
            }
        },
    });

    const confirmSubmit = _data => {
        Keyboard.dismiss();
        Alert.alert('Konfirmasi', 'Anda yakin memperbarui profil ?', [
            {
                text: 'Batal',
                onPress: () => {},
                style: 'cancel',
            },
            {
                text: 'Ok',
                onPress: () => {
                    delete _data.passwordConfirmation;
                    mutation.mutate(_data);
                },
            },
        ]);
    };

    return (
        <Container>
            <Content>
                
                <Formik
                    enableReinitialize
                    initialValues={{
                        email:
                            (dataProfile.data &&
                                dataProfile.data?.data?.email) ||
                            '-',
                        username:
                            (dataProfile.data &&
                                dataProfile.data?.data?.username) ||
                            '-',
                        phone_number:
                            (dataProfile.data &&
                                dataProfile.data?.data?.phone_number) ||
                            '-',
                        password: '',
                        passwordConfirmation: '',
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string().email().required('Required'),
                        username: Yup.string().required('Required'),
                        phone_number: Yup.string().required('Required'),
                        password: Yup.string(),
                        passwordConfirmation: Yup.string().oneOf(
                            [Yup.ref('password'), null],
                            'Passwords must match',
                        ),
                    })}
                    onSubmit={confirmSubmit}>
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        errors,
                    }) => (
                        <View
                            style={{
                                justifyContent: 'flex-end',
                                marginHorizontal: 20,
                                marginTop: 10,
                            }}>
                            <React.Fragment>
                                <Label>Email</Label>
                                <Item regular>
                                    <Input
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
                            </React.Fragment>
                            <React.Fragment>
                                <Label>Username</Label>
                                <Item regular>
                                    <Input
                                        onChangeText={handleChange('username')}
                                        onBlur={handleBlur('username')}
                                        value={values.username}
                                        placeholder="Username"
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
                            </React.Fragment>
                            <React.Fragment>
                                <Label>Kontak</Label>
                                <Item regular>
                                    <Input
                                        onChangeText={handleChange(
                                            'phone_number',
                                        )}
                                        onBlur={handleBlur('phone_number')}
                                        value={values.phone_number}
                                        placeholder="Kontak"
                                        keyboardType="numeric"
                                        underlineColorAndroid="transparent"
                                    />
                                </Item>
                                {errors.phone_number && (
                                    <View>
                                        <Text style={styles.errMsg}>
                                            {errors.phone_number}
                                        </Text>
                                    </View>
                                )}
                            </React.Fragment>
                            <React.Fragment>
                                <Label>Kata Sandi</Label>
                                <Item regular>
                                    <Input
                                        style={styles.inputText}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        secureTextEntry={true}
                                        placeholder="Kata Sandi"
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
                            </React.Fragment>
                            <React.Fragment>
                                <Label>Konfirmasi Kata Sandi</Label>
                                <Item regular>
                                    <Input
                                        style={styles.inputText}
                                        onChangeText={handleChange(
                                            'passwordConfirmation',
                                        )}
                                        onBlur={handleBlur(
                                            'passwordConfirmation',
                                        )}
                                        value={values.passwordConfirmation}
                                        secureTextEntry={true}
                                        placeholder="Konfirmasi Kata Sandi"
                                        underlineColorAndroid="transparent"
                                    />
                                </Item>
                                {errors.passwordConfirmation && (
                                    <View>
                                        <Text style={styles.errMsg}>
                                            {errors.passwordConfirmation}
                                        </Text>
                                    </View>
                                )}
                            </React.Fragment>
                            <React.Fragment>
                                <Button
                                    onPress={handleSubmit}
                                    full
                                    style={styles.loginBtn}>
                                    AA
                                </Button>
                                {mutation.isLoading && (
                                    <Spinner size="small" color={'black'} />
                                )}
                            </React.Fragment>
                        </View>
                    )}
                </Formik>
            </Content>
        </Container>
    );
}

export default index;

const styles = StyleSheet.create({
    inputView: {
        backgroundColor: 'white',
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 15,
    },
    loginBtn: {
        width: '70%',
        backgroundColor: 'black',
        borderRadius: 25,
        height: 50,
        alignSelf: 'center',
    },
    errMsg: {
        color: 'danger',
        marginTop: -5,
        marginBottom: 10,
        fontSize: 12,
    },
});
