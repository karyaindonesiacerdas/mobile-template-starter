import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from '../../../konvalesen/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../../config/api';
import Axios from 'axios';

function gedungUddKonvalesen(props) {
    const goNextPage = page => {
        if (page == 'barcodeSampel') {
            submit();
        } else {
            props.navigation.navigate(page);
        }
    };

    async function submit() {
        const token = await AsyncStorage.getItem('token');
        const ktp = await AsyncStorage.getItem('ktp');
        const lokasi = 'Gedung UDD';
        const body = {
            ktp: ktp,
            lokasi: lokasi,
        };
        console.log(body);
        Axios.put(`${API}/pendonor/update/lokasisample`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.info('res.data', res.data);
                console.log(res.data);
                if (res.data.code === 200) {
                    props.navigation.navigate('barcodeSampel');
                } else {
                    Alert.alert(
                        'Error',
                        +res.data.code + '  ' + res.data.message,
                        [
                            {
                                text: 'OK',
                                onPress: () =>
                                    props.navigation.navigate('Dashboard'),
                            },
                        ],
                    );
                }
            })
            .catch(err => {
                Alert.alert(
                    'Error',
                    'Session Berakhir Silahkan Login Kembali',
                    [
                        {
                            text: 'OK',
                            onPress: () =>
                                props.navigation.navigate('Dashboard'),
                        },
                    ],
                );
            });
    }
    return (
        <Container>
            <Image
                source={require('../../../../asset/logoUDD.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../../../asset/logoSehat.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
            <ScrollView>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gedung UDD
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        marginBottom: 10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>
                <Image
                    source={require('../../../../asset/imagePeta.png')}
                    style={{
                        width: 200,
                        height: 200,
                        margin: 20,
                        alignSelf: 'center',
                    }}></Image>

                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    UNIT DONOR DARAH PMI KOTA SEMARANG
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        fontSize: 15,

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    JL. MGR Soegiyopranoto No. 31 Semarang {'\n'}Telp. 024 351
                    5050
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Pelayanan Donor Darah
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        fontSize: 15,

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Setiap Hari Jam 07.39 s.d. 20.30 WIB
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Pelayanan Permintaan Darah
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        fontSize: 15,

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    24 Jam {'\n'} Hari Minggu dan Libur Nasional Tetap buka
                </Text>
            </ScrollView>
            <View
                style={{
                    alignContent: 'center',

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 30,
                    marginBottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'lokasiSampel')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,

                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginLeft: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'barcodeSampel')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',

                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Selanjutnya
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../../asset/footer.png')}
                style={{
                    width: '100%',

                    backgroundColor: '#fff',
                    padding: 0,
                    paddingVertical: 90,
                    position: 'absolute',
                    zIndex: -1,
                    bottom: 0,
                }}
                imageStyle={{
                    resizeMode: 'cover',
                    alignSelf: 'flex-end',
                }}></ImageBackground>
        </Container>
    );
}

export default gedungUddKonvalesen;

