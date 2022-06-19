import React, {useState, useEffect} from 'react';
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
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from '../../konvalesen/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../config/api';
import Axios from 'axios';
import QRCode from 'react-qr-code';

function barcodeSampel(props) {
    const [qr, setQr] = useState(null);
    const [info_pendonor, setInfo] = useState({
        kuesioner_id: '',
        created_at: '',
    });

    useEffect(() => {
        async function getData() {
            const token = await AsyncStorage.getItem('token');
            const ktp = await AsyncStorage.getItem('ktp');
            const kode_pendonor = await AsyncStorage.getItem('kode_pendonor');
            const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };
            const body = {
                kode_calon_pendonor: kode_pendonor,
            };
            Axios.post(`${API}/pendonor/calon-pendonor`, body, headers)
                .then(res => {
                    console.log(res.data.data);
                    setInfo(res.data.data[0]);
                    const data = res.data.data[0].kuesioner_id;
                    console.log(data);
                    setQr(
                        <View
                            style={{
                                alignContent: 'center',

                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignContent: 'center',
                                marginTop: 30,
                                marginBottom: 15,
                            }}>
                            <QRCode size={200} value={data} />
                        </View>,
                    );
                })
                .catch(err => {
                    console.log('test : ', err.response);
                });
        }
        getData();
    }, []);
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    return (
        <Container>
            <Image
                source={require('../../../asset/logoUDD.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../../asset/logoSehat.png')}
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
                        marginTop: -5,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',

                        textAlign: 'center',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    ANDA TERDAFTAR SEBAGAI CALON DONOR KONVALESEN{'\n'} DI UDD
                    PMI KOTA SEMARANG{'\n'}SILAKAN KUNJUNGI UDD PMI KOTA
                    SEMARANG
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        fontSize: 15,

                        textAlign: 'center',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Scan barcode untuk cetak formulir pengambilan Sampel
                </Text>

                {qr}
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 5,
                        fontSize: 20,
                        fontWeight: 'bold',

                        textAlign: 'center',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    {info_pendonor.kuesioner_id}
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginRight: 30,
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 20,

                        textAlign: 'center',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Keterangan :{'\n'}Berlaku Hanya Pada Tanggal{'\n'}(
                    {info_pendonor.created_at.substring(0, 10)})
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
                        marginLeft: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Dashboard')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                textAlign: 'center',

                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Kembali
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../asset/footer.png')}
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

export default barcodeSampel;

