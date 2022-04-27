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
import {API} from '../../../config/api';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeLoading from 'react-native-awesome-loading';

function ActiveDonorDetail(props) {
    const [loading, setLoading] = useState(false);
    const [kode_calon_pendonor, setKode] = useState()
    const [detail, SetDetail] = useState({
        kuesioner_id: '',
        jadwal_donor: '',
        jenis_donor: '',
        status: '',
        golongan_darah: '',
        rhesus: '',
        berat_badan: '',
        TGL : '',
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
        async function getRiwayat() {
            const token = await AsyncStorage.getItem('token');
            var t = new Date().toISOString().slice(0, 10);
            const ktp = await AsyncStorage.getItem('ktp');
            setLoading(true)
            
            const body = {
                ktp: ktp,
                kuesioner_id: props.route.params.data.kuesioner_id,
            };
            console.log(body);
            const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };

            Axios.post(`${API}/riwayat-donor/detail`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
                .then(r => {
                    setLoading(false)
                    if (r.data.code == 200) {
                        AsyncStorage.setItem('kode_pendonor',r.data.data[0].kode_calon_pendonor);
                        SetDetail(r.data.data[0]);
                        if (r.data.data[0].jenis_donor === 'biasa') {
                            if (r.data.data[0].status === 'lolos admin') {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() => goNextPage('lokasiDonor')}>
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
                                                goNextPage('BarcodeDonor')
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
                                                goNextPage('MenuDonor')
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
                                                goNextPage('lokasiSampel')
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
                                                goNextPage('barcodeSampel')
                                            }>
                                            <Text style={styles.textInCard}>
                                                Tampilkan Barcode
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>,
                                );
                            } else if (
                                r.data.data[0].status === 'pengambilan_darah'
                            ) {
                                setAction(
                                    <Card style={styles.flowCardMarroon}>
                                        <TouchableOpacity
                                            onPress={() =>
                                                goNextPage('lokasiDonor')
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
                                                goNextPage('lokasiSampel')
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
                                                goNextPage.bind(this, 'MenuDonor')
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
                    setLoading(false)
                    Alert.alert("Error","Session Berakhir Silahkan Login Kembali",
                    [{ text: "OK", onPress: () => props.navigation.navigate('Dashboard') }]
                    )
                });
        }
        getRiwayat();
    }, []);

    return (
        <Container>
            <Image
                source={require('../../../asset/logoUDD.png')}
                style={styles.logoUDD}
            />
            <Image
                source={require('../../../asset/logoSehat.png')}
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
                                    Jadwal Donor / Sampel : {' '}
                                    {detail.TGL.substring(0,10)}
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
                                <B>Rhesus :{' ' + detail.rhesus.toUpperCase()}</B>
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
                                    {' ' + detail.berat_badan.toUpperCase()}
                                </B>
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    {action}
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity onPress={() => goNextPage('ActiveDonor')}>
                            <Text style={styles.textInCard}>Active Donor</Text>
                        </TouchableOpacity>
                    </Card>
                </View>
            </ScrollView>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../asset/footer.png')}
                style={styles.imageBackgroundStyle}
                imageStyle={{resizeMode: 'cover', alignSelf: 'flex-end'}}
            />
        </Container>
    );
}

export default ActiveDonorDetail;
