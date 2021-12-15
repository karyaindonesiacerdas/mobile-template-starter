import React, {useState, useEffect} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import {RIWAYAT} from '../../config/api';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function RiwayatDetail(props) {
    const [detail, SetDetail] = useState({
        kuesioner_id: '',
        jadwal_donor: '',
        jenis_donor: '',
        status: '',
        golongan_darah: '',
        rhesus: '',
        berat_badan: '',
        kode_calon_pendonor: '',
    });
    const [action, setAction] = useState();
    const goNextPage = page => {
        if (page) {
            AsyncStorage.setItem('kode_pendonor', detail.kode_calon_pendonor);
            props.navigation.navigate(page);
        }
    };
    const B = props => (
        <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    );
    useEffect(() => {
        async function getRiwayat() {
            const token = await AsyncStorage.getItem('token');
            var t = new Date().toISOString().slice(0, 10);
            const ktp = await AsyncStorage.getItem('ktp');
            const url = RIWAYAT;

            const body = {
                ktp: ktp,
                kuesioner_id: props.route.params.data.kuesioner_id,
            };
            console.log(body);
            const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };

            Axios.post(`${url}/api/simaba/riwayat-donor/detail`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
                .then(r => {
                    if (r.data.code == 200) {
                        console.log(r.data);
                        SetDetail(r.data.data[0]);
                        if (r.data.data[0].jenis_donor === 'biasa') {
                            if (r.data.data[0].status === 'lolos admin') {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() => goNextPage('Pilih')}>
                                            <Text style={styles.textInCard}>
                                                Pilih Lokasi Donor
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else if (
                                r.data.data[0].status === 'location_set'
                            ) {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('Barcode')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Tampilkan Barcode
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage.bind(this, 'Home')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Daftar Donor Baru
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            }
                        } else {
                            if (r.data.data[0].status === 'lolos admin') {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('Konvalesen10')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Pilih Lokasi Pengambilan Sampel
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else if (
                                r.data.data[0].status === 'location_sample_set'
                            ) {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('Konvalesen10')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Tampilkan Barcode
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else if (
                                r.data.data[0].status === 'lolos sample'
                            ) {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('Konvalesen16')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Pilih Lokasi Donor
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else if (
                                r.data.data[0].status === 'location_set'
                            ) {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('Konvalesen10')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Tampilkan Barcode
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage.bind(this, 'Home')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Daftar Donor Baru
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            }
                        }
                    } else {
                        console.log('Error', r.data.message);
                    }
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
        getRiwayat();
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

            <ScrollView>
                <Text style={styles.headerText1}>Donor Details</Text>
                <View style={styles.viewContainer}>
                    <Card style={styles.flowCardPeach}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    marginTop: 20,
                                    marginBottom: 10,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                <B>Transaksi ID : {detail.kuesioner_id}</B>
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
                                    Jenis Donor :{' '}
                                    {detail.jenis_donor.toUpperCase()}
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
                                <B>Status : {detail.status.toUpperCase()}</B>
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
                                    Jadwal Donor :
                                    {detail.jadwal_donor.toUpperCase()}
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
                                    Golongan Darah :{' '}
                                    {detail.golongan_darah.toUpperCase()}
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
                                <B>Rhesus :{detail.rhesus.toUpperCase()}</B>
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
                                    Berat Badan :
                                    {detail.berat_badan.toUpperCase()}
                                </B>
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    {action}
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity onPress={() => goNextPage('Riwayat')}>
                            <Text style={styles.textInCard}>Riwayat Donor</Text>
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

export default RiwayatDetail;
