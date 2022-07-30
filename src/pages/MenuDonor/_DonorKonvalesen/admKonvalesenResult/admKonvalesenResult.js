import React, {useEffect, useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
    Container,
    Header,
    Title,
    Left,
    Right,
    Button,
    Body,
    Content,
    Card,
    CardItem,
    Footer,
    FooterTab,
    Icon,
} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import Bg from '../../../image/baground3.jpeg';
import {API} from '../../../../config/api';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
function admKonvalesenResult(props) {
    const [res, setRes] = useState({});
    const [komponent, setKomponen] = useState(null);
    const [buttons, setButton] = useState(null);
    useEffect(() => {
        async function getData() {
            const token = await AsyncStorage.getItem('token');
            const kode_calon_pendonor = await AsyncStorage.getItem(
                'kode_pendonor',
            );
            const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };
            const body = {
                kode_calon_pendonor: kode_calon_pendonor,
            };
            console.log(body);
            Axios.post(
                `${API}/pendonor/calon-pendonor`,
                JSON.stringify(body),
                headers,
            )
                .then(r => {
                    if (r.data.code == 200) {
                        setRes(r.data);
                        if (r.data.data[0].status === 'lolos admin') {
                            setKomponen(
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginRight: 30,

                                            marginTop: 20,
                                            marginBottom: 20,
                                            fontSize: 20,
                                            fontWeight: 'bold',

                                            textAlign: 'center',
                                            color: 'white',
                                        }}>
                                        ANDA LULUS DALAM TAHAP ADMINISTRASI DAN
                                        {'\n'}MASUK KE TAHAP PENGAMBILAN{'\n'}
                                        CONTOH DARAH
                                    </Text>
                                </View>,
                            );
                            setButton(
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                    }}>
                                    <Card style={styles.cardStyle}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={goNextPage.bind(
                                                this,
                                                'lokasiSampel',
                                            )}>
                                            <Text
                                                style={{
                                                    margin: 10,
                                                    fontSize: 15,
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                }}>
                                                Selanjutnya
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>
                                </View>,
                            );
                        } else {
                            setKomponen(
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginRight: 30,

                                            marginTop: 20,
                                            marginBottom: 20,
                                            fontSize: 20,
                                            fontWeight: 'bold',

                                            textAlign: 'center',
                                            color: 'white',
                                        }}>
                                        MAAF{'\n'}ANDA TIDAK MEMENUHI{'\n'}
                                        KRITERIA CALON DONOR
                                    </Text>
                                    {/* <Text>Alasan tidak memenuhi kriteria : </Text>
                        <Text>1. Berat badan kurang dari 45 kg </Text>
                        <Text>2. Usia kurang dari 17 tahun </Text>
                        <Text>3. Jawaban kuesioner yang tidak sesuai</Text> */}
                                </View>,
                            );
                            setButton(
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                    }}>
                                    <Card style={styles.cardStyle}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={goNextPage.bind(
                                                this,
                                                'Dashboard',
                                            )}>
                                            <Text
                                                style={{
                                                    margin: 10,
                                                    fontSize: 15,
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                }}>
                                                Kembali
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>
                                </View>,
                            );
                        }
                    } else {
                        console.log('Error', r.data.message);
                    }
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
        setTimeout(() => {
            getData();
        }, 3000);
    }, []);
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
            <Image
                source={require('../../../image/logo.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../../image/Logo2.png')}
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
                        marginTop: 25,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Daftar
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    Donor Konvalesen
                </Text>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        marginTop: 50,
                        marginBottom: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    {komponent}
                </Card>

                <Card
                    style={{
                        backgroundColor: '#000',
                        marginTop: 30,
                        marginBottom: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}></Card>
                {buttons}
            </ScrollView>
        </Container>
    );
}

export default admKonvalesenResult;

