import React, {useState, useEffect} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeLoading from 'react-native-awesome-loading';
import moment from 'moment';
import {API} from '../../config/api';

function KebutuhanDarahDetail(props) {
    const [loading, setLoading] = useState(false);
    const [detail, SetDetail] = useState({
        ditambahkan: '',
        diupdate: '',
        golda: '',
        jumlah_permintaan: '',
        jumlah_terpenuhi: '',
        keterangan: '',
        berat_badan: '',
        noform: '',
        produk: '',
        rhesus: '',
        rumah_sakit: '',
        waktu: '',
    });
    const [action, setAction] = useState();
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const B = props => (
        <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    );
    useEffect(() => {
        async function getDetail() {
            const token = await AsyncStorage.getItem('token');
            setLoading(true);

            const body = {
                noform: props.route.params.noform,
            };
            Axios.post(
                `${API}/kebutuhandarah/list/kebutuhandarah/detail`,
                body,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then(r => {
                    var data = r.data.data;
                    if (data.keterangan == '') {
                        console.log('here');
                        if (data.jumlah_permintaan > data.jumlah_terpenuhi) {
                            data.keterangan = 'Belum Terpenuhi';
                        } else {
                            data.keterangan = 'Terpenuhi';
                        }
                    }
                    if (data.ditambahkan.length > 0) {
                        var di_tambahkan = new Date(data.ditambahkan);
                        console.log(di_tambahkan);
                        data.ditambahkan =
                            di_tambahkan.toLocaleDateString() +
                            ' ' +
                            di_tambahkan.toLocaleTimeString();
                    }
                    // if (data.diupdate.length > 0) {
                    //     var waktu = new Date(data.diupdate);
                    //     console.log(waktu);
                    //     data.diupdate = waktu.toLocaleDateString();
                    //     //     ' ' +
                    //     //     di_update.toLocaleTimeString();
                    // }
                    SetDetail(data);
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
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
        getDetail();
    }, []);

    return (
        <Container>
            <Image
                source={require('../../asset/logoUDD.png')}
                style={styles.logoUDD}
            />
            <Image
                source={require('../../asset/logoSehat.png')}
                style={styles.logoSehat}
            />
            <AwesomeLoading
                indicatorId={18}
                size={50}
                isActive={loading}
                text="loading.."
            />
            <Card
                style={{
                    backgroundColor: '#70282b',
                    width: '90%',
                    alignSelf: 'center',
                    marginTop: 30,
                }}>
                <TouchableOpacity>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 15,
                            borderRadius: 10,
                            textAlign: 'center',
                            fontWeight: 'bold',

                            color: 'white',
                        }}>
                        Kebutuhan Darah Detail
                        {'\n No Form : ' + detail.noform}
                    </Text>
                </TouchableOpacity>
            </Card>
            <ScrollView>
                <View style={styles.viewContainer}>
                    <Card style={styles.flowCardPeach}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Rumah Sakit{'  '}:{'  '}
                                    {detail.rumah_sakit}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Waktu Permintaan{'  '}:{'  '}
                                    {detail.ditambahkan}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Golongan Darah{'  '}:{'  '}
                                    {detail.golda}
                                    {detail.rhesus}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Product{'  '}:{'  '}
                                    {detail.produk}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Jumlah Permintaan{'  '}:{'  '}
                                    {' ' + detail.jumlah_permintaan}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Jumlah Terpenuhi{'  '}:{'  '}
                                    {' ' + detail.jumlah_terpenuhi}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Keterangan{'  '}:{'  '}
                                    {detail.keterangan}
                                </B>
                            </Text>
                            <Text
                                style={{
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>
                                    Latest Update{'  '}:{'  '}
                                    {' ' + detail.diupdate}
                                </B>
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    {action}
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity
                            onPress={() => goNextPage('KebutuhanDarah')}>
                            <Text style={styles.textInCard}>Kembali</Text>
                        </TouchableOpacity>
                    </Card>
                </View>
            </ScrollView>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../asset/footer.png')}
                style={styles.imageBackgroundStyle}
                imageStyle={{resizeMode: 'cover', alignSelf: 'flex-end'}}
            />
        </Container>
    );
}

export default KebutuhanDarahDetail;

const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'red',
        marginTop: 10,
        borderRadius: 10,
        width: '40%',
        marginLeft: '3%',
        marginRight: '3%',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    headerText1: {
        marginLeft: 30,
        marginTop: 25,
        fontSize: 35,
        fontWeight: 'bold',
    },
    logoUDD: {
        width: 54,
        height: 60,
        top: 10,
        margin: 20,
        left: 10,
    },
    logoSehat: {
        position: 'absolute',
        width: 54,
        height: 60,
        margin: 20,
        right: 10,
        top: 10,
    },
    textInCard: {
        margin: 10,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    imageBackgroundStyle: {
        width: '100%',
        zIndex: -1,
        backgroundColor: '#fff',
        padding: 0,
        paddingVertical: 90,
        position: 'absolute',
        bottom: 0,
    },
    viewContainer: {
        alignContent: 'center',
        marginRight: '2%',
        marginLeft: '2%',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: '5%',
    },

    flowCardMarroon: {
        backgroundColor: '#6e6562',
        borderRadius: 10,
        zIndex: 1,
        marginTop: 10,
    },
    flowCardPeach: {
        backgroundColor: 'rgba(112,40,43,0.2)',
        borderRadius: -2,
        marginTop: 0,
        padding: 10,
    },
});

