import React, {useState, useEffect} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';
import Bg from '../../../image/baground3.jpeg';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../../config/api';
import Axios from 'axios';
function agrementPlace(props) {
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [jadwal, setJadwal] = useState(Date.now());
    const lokasi = props.route.params;

    const goNextPage = page => {
        if (page == 'barcodeSampel') {
            submit();
        } else {
            props.navigation.navigate(page);
        }
    };

    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        console.log(lokasi);
        if (month < 10) {
            month = '0' + month;
        }
        if (date < 10) {
            date = '0' + date;
        }
        setJadwal(year + '-' + month + '-' + date);
        console.log(jadwal);
    }, []);
    const onDateChange = date => {
        date = moment(date).format('YYYY-MM-DD');
        setJadwal(date);
        console.log(date);
    };

    async function submit() {
        const token = await AsyncStorage.getItem('token');
        const ktp = await AsyncStorage.getItem('ktp');
        const lokasi = props.route.params.location;
        const body = {
            ktp: ktp,
            lokasi: lokasi,
            jadwal: jadwal,
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
                    props.navigation.navigate('barcodeSampel', {
                        jadwal: jadwal,
                        lokasi: lokasi,
                    });
                } else {
                    console.log('Error', res.data.message);
                }
            })
            .catch(err => {
                console.log('test : ', err.response);
                props.navigation.navigate('barcodeSampel', {jadwal: jadwal});
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
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Gdeung UDD
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        marginBottom: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PMI Kota Semarang
                </Text>

                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <CalendarPicker onDateChange={onDateChange} />
                </View>
                <View style={{}}>
                    <CheckBox
                        title="Saya setuju untuk malakukan donor darah di gedung UDD pada tanggal yang telah di Tentukan"
                        style={{width: '70%'}}
                        checked={check1}
                        onPress={() => setCheck1(!check1)}
                    />
                </View>
                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 400,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(
                                this,
                                'gedungUddKonvalesen',
                            )}>
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
            </ScrollView>
        </Container>
    );
}

export default agrementPlace;

