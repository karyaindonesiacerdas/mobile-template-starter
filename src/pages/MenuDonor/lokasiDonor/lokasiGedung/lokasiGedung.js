import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import Bg from '../../../image/baground3.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PENDONOR} from '../../../../config/api';
import Axios from 'axios';

function lokasiGedung(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const goNextPage = page => {
        if (page == 'BarcodeDonor') {
            submit();
        } else {
            props.navigation.navigate(page);
        }
    };
    async function submit() {
        const token = await AsyncStorage.getItem('token');
        const ktp = await AsyncStorage.getItem('ktp');
        const lokasi = 'Gedung UDD';
        const url = PENDONOR;
        const body = {
            ktp: ktp,
            lokasi: lokasi,
        };
        console.log(body);
        Axios.put(`${PENDONOR}/simaba/update/lokasi`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.info('res.data', res.data);
                console.log(res.data);
                if (res.data.code === 200) {
                    props.navigation.navigate('BarcodeDonor');
                } else {
                    Alert.alert("Error", +res.data.code + '  ' + res.data.message,
                                [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
                                )
                }
            })
            .catch(err => {
                Alert.alert("Error","Session Berakhir Silahkan Login Kembali",
                                [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
                                )
            });
    }
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
                        marginTop: 0,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gedung UDD
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 0,
                        marginBottom: 10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>
                <Image
                    source={{
                        uri: 'https://www.howtogeek.com/wp-content/uploads/2021/01/google-maps-satellite.png?height=200p&trim=2,2,2,2',
                    }}
                    style={{
                        width: 200,
                        height: 100,
                        marginTop: 40,
                        marginBottom: 20,
                        alignSelf: 'center',
                    }}></Image>

                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 40,
                        fontSize: 20,
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

                        fontSize: 18,

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
                        fontSize: 20,
                        fontWeight: 'bold',

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Pelayanan Donor Setiap Hari
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,

                        fontSize: 18,

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Jam 07.39 s.d. 20.30 WIB
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 20,
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

                        fontSize: 18,

                        textAlign: 'justify',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    24 Jam{'\n'}
                    Hari Minggu dan Libur Nasional tetap buka
                </Text>

                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 210,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'lokasiDonor')}>
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
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'BarcodeDonor')}>
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
            </ScrollView>
        </Container>
    );
}

export default lokasiGedung;
