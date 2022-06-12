import React, {useEffect, useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    BackHandler,
} from 'react-native';
import { CheckBox } from 'react-native-elements';
import {
    Container,
    Header,
    Title,
    Left,
    HStack,
    Input,
    Picker,
    Card,
    Item,
    nama,
} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import styles from '../../../styles/styles';
import Bg from '../../../image/baground3.jpeg';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AwesomeLoading from 'react-native-awesome-loading';

function daftarDonorkonv(props) {
    const [ktp, setKTP] = useState();
    const [nama_pendonor, setNama] = useState();
    const [telepon, setTelepon] = useState();
    const [alamat, setAlamat] = useState();
    const [kelurahan, setKelurahan] = useState();
    const [kecamatan, setKecamatan] = useState();
    const [wilayah, setWilayah] = useState();
    const [token, setToken] = useState();
    const [tanggal_lahir, setTanggalLahir] = useState();
    const [tempat_lahir, setTempatLahir] = useState();
    const [status_menikah, setStatusMenikah] = useState();
    const [jenis_kelamin, setJniesKelamin] = useState();
    const [golongan_darah, setGolonganDarah] = useState();
    const [rhesus, setRhesus] = useState();
    const [pekerjaan, setPekerjaan] = useState();
    const [berat_badan, setBeratBadan] = React.useState('0');
    const [loading, setLoading] = useState(false);
    
    const refactorInput = value => {
        async function submit(){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 1000);
            console.log(loading)
            if (berat_badan <= 45){
                Alert.alert('Warning !', 'Berat Badan Harus Lebih Dari 45', [{
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
            ]);
            }
            else{
                value.ktp = ktp;
                value.jenis_donor = 'plasma konvalesen'
                value.nama = nama_pendonor;
                value.nomor_telepon = telepon;
                value.alamat = alamat
                value.kelurahan = kelurahan
                value.kecamatan = kecamatan
                value.wilayah = wilayah
                value.token = token
                value.tanggal_lahir = tanggal_lahir
                value.tempat_lahir = tempat_lahir
                value.status_menikah = status_menikah
                value.jenis_kelamin = jenis_kelamin
                value.pekerjaan = pekerjaan
                value.golongan_darah = golongan_darah
                value.rhesus = 'X'
                value.berat_badan = berat_badan
                props.navigation.navigate('infoCovidPendonor', { data_calon_donor: value });
            }
        }
        submit()
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const backAction = () => {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [{
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel',
            },
            { text: 'YES', onPress: () => BackHandler.goBack() },
        ]);
        return true;
    };

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000);
        update_field_data();
       
    }, []);

    async function update_field_data() {
        const valuektp = await AsyncStorage.getItem('ktp');
        const valuenama = await AsyncStorage.getItem('nama');
        const valuetelepon = await AsyncStorage.getItem('nomor_telepon');
        const valuealamat = await AsyncStorage.getItem('alamat');
        const valuekecamatan = await AsyncStorage.getItem('kecamatan');
        const valuekelurahan = await AsyncStorage.getItem('kelurahan');
        const valuewilayah = await AsyncStorage.getItem('wilayah');
        const token = await AsyncStorage.getItem('token');
        const tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir');
        const tempat_lahir = await AsyncStorage.getItem('tempat_lahir');
        const status_menikah = await AsyncStorage.getItem('status_menikah');
        const jenis_kelamin = await AsyncStorage.getItem('jenis_kelamin');
        const golongan_darah = await AsyncStorage.getItem('golongan_darah');
        const pekerjaan = await AsyncStorage.getItem('pekerjaan');
        const rhesus = await AsyncStorage.getItem('rhesus');
        
        setKTP(valuektp);
        setNama(valuenama);
        setTelepon(valuetelepon);
        setAlamat(valuealamat);
        setKecamatan(valuekecamatan);
        setKelurahan(valuekelurahan);
        setWilayah(valuewilayah);
        setToken(token)
        setTanggalLahir(tanggal_lahir)
        setTempatLahir(tempat_lahir)
        setStatusMenikah(status_menikah)
        setJniesKelamin(jenis_kelamin)
        setGolonganDarah(golongan_darah)
        setRhesus(rhesus)
        setPekerjaan(pekerjaan)
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
            <AwesomeLoading indicatorId={18} size={50} isActive={loading} text="loading.." />

                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 0,
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
                    Donor Darah Konvalesen
                </Text>
                <Formik
                    initialValues={{
                        ktp: '',
                        nama: '',
                        alamat: '',
                        kelurahan: '',
                        kecamatan: '',
                        wilayah: '',
                        nomor_telepon: '',
                    }}
                    onSubmit={value => {
                        refactorInput(value);
                    }}>
                    {({handleChange, handleBlur, handleSubmit, values}) => (
                        <View>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 20,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                No.KTP
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('ktp')}
                                    onBlur={handleBlur('ktp')}
                                    value={ktp}
                                    // defaultValue={valuektp}
                                    keyboardType="numeric"
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                Nama Lengkap
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('nama')}
                                    onBlur={handleBlur('nama')}
                                    value={nama_pendonor}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                Alamat Lengkap
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('alamat')}
                                    onBlur={handleBlur('alamat')}
                                    value={alamat}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                Kelurahan
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('kelurahan')}
                                    onBlur={handleBlur('kelurahan')}
                                    value={kelurahan}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                Kecamatan
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('kecamatan')}
                                    onBlur={handleBlur('kecamatan')}
                                    value={kecamatan}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 15,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                }}>
                                Kabupaten/Kota
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('wilayah')}
                                    onBlur={handleBlur('wilayah')}
                                    value={wilayah}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 10,
                                    fontSize: 16,
                                    fontWeight: 'normal',
                                    color: 'black',
                                    textShadowColor: '#fff',
                                    textShadowOffset: {width: 1, height: 1},
                                    textShadowRadius: 10,
                                    alignContent: 'space-around',
                                }}>
                                No.Telp
                            </Text>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    onChangeText={handleChange('nomor_telepon')}
                                    onBlur={handleBlur('nomor_telepon')}
                                    value={telepon}
                                    editable={false}
                                />
                            </Item>
                            <Text
                                style={{
                                    marginLeft: 30,
                                    marginTop: 20,
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "black",
                                    textShadowColor: "#fff",
                                    textShadowOffset: { width: 1, height: 1 },
                                    textShadowRadius: 10,
                                }}
                                >
                                Berat badan (Pilih)
                            </Text>
                            <Item style={styles.item}>
                                <Picker
                                    style={styles.input}
                                    selectedValue={berat_badan}
                                    onValueChange={(itemValue, itemIndex) =>
                                    setBeratBadan(itemValue)
                                    }>
                                    <Picker.Item label="0" value="0" />
                                    <Picker.Item label="25" value="25" />
                                    <Picker.Item label="26" value="26" />
                                    <Picker.Item label="27" value="27" />
                                    <Picker.Item label="28" value="28" />
                                    <Picker.Item label="29" value="29" />
                                    <Picker.Item label="30" value="30" />
                                    <Picker.Item label="31" value="31" />
                                    <Picker.Item label="32" value="32" />
                                    <Picker.Item label="33" value="33" />
                                    <Picker.Item label="34" value="34" />
                                    <Picker.Item label="35" value="35" />
                                    <Picker.Item label="36" value="36" />
                                    <Picker.Item label="37" value="37" />
                                    <Picker.Item label="38" value="38" />
                                    <Picker.Item label="39" value="39" />
                                    <Picker.Item label="40" value="40" />
                                    <Picker.Item label="41" value="41" />
                                    <Picker.Item label="42" value="42" />
                                    <Picker.Item label="43" value="43" />
                                    <Picker.Item label="44" value="44" />
                                    <Picker.Item label="45" value="45" />
                                    <Picker.Item label="46" value="46" />
                                    <Picker.Item label="47" value="47" />
                                    <Picker.Item label="48" value="48" />
                                    <Picker.Item label="49" value="49" />
                                    <Picker.Item label="50" value="50" />
                                    <Picker.Item label="51" value="51" />
                                    <Picker.Item label="52" value="52" />
                                    <Picker.Item label="53" value="53" />
                                    <Picker.Item label="54" value="54" />
                                    <Picker.Item label="55" value="55" />
                                    <Picker.Item label="56" value="56" />
                                    <Picker.Item label="57" value="57" />
                                    <Picker.Item label="58" value="58" />
                                    <Picker.Item label="59" value="59" />
                                    <Picker.Item label="60" value="60" />
                                    <Picker.Item label="61" value="61" />
                                    <Picker.Item label="62" value="62" />
                                    <Picker.Item label="63" value="63" />
                                    <Picker.Item label="64" value="64" />
                                    <Picker.Item label="65" value="65" />
                                    <Picker.Item label="66" value="66" />
                                    <Picker.Item label="67" value="67" />
                                    <Picker.Item label="68" value="68" />
                                    <Picker.Item label="69" value="69" />
                                    <Picker.Item label="70" value="70" />
                                    <Picker.Item label="71" value="71" />
                                    <Picker.Item label="72" value="72" />
                                    <Picker.Item label="73" value="73" />
                                    <Picker.Item label="74" value="74" />
                                    <Picker.Item label="75" value="75" />
                                    <Picker.Item label="76" value="76" />
                                    <Picker.Item label="77" value="77" />
                                    <Picker.Item label="78" value="78" />
                                    <Picker.Item label="79" value="79" />
                                    <Picker.Item label="80" value="80" />
                                    <Picker.Item label="81" value="81" />
                                    <Picker.Item label="82" value="82" />
                                    <Picker.Item label="83" value="83" />
                                    <Picker.Item label="84" value="84" />
                                    <Picker.Item label="85" value="85" />
                                    <Picker.Item label="86" value="86" />
                                    <Picker.Item label="87" value="87" />
                                    <Picker.Item label="88" value="88" />
                                    <Picker.Item label="89" value="89" />
                                    <Picker.Item label="90" value="90" />
                                    <Picker.Item label="91" value="91" />
                                    <Picker.Item label="92" value="92" />
                                    <Picker.Item label="93" value="93" />
                                    <Picker.Item label="94" value="94" />
                                    <Picker.Item label="95" value="95" />
                                    <Picker.Item label="96" value="96" />
                                </Picker>
                            </Item>
                            <Text
                            style={{
                                marginLeft: 30,
                                marginTop: 0,
                                fontSize: 15,
                                color: "black",
                                fontWeight: "bold",
                                textShadowColor: "#fff",
                                textShadowOffset: { width: 1, height: 1 },
                                textShadowRadius: 10,
                            }}
                            >
                            {''} ≥45 kg (Apabila kurang dari tidak lolos)
                            </Text>
                            <View
                                style={{
                                    alignContent: 'center',

                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    marginTop: 150,
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
                                            'persyaratanKonvalesen',
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
                                    <TouchableOpacity onPress={handleSubmit}>
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
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </Container>
    );
}

export default daftarDonorkonv;
