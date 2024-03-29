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
import {Container, Header, Title, Left, HStack, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../../../styles/styles';
import Bg from '../../../image/baground3.jpeg';
import {Button} from 'react-native-elements/dist/buttons/Button';

function infoPendonorKonv(props) {
    const [number, onChangeNumber] = React.useState(null);
    const [pekerjaan, setPekerjaan] = React.useState([
        {label: 'PNS', value: 'pns', checked: false},
        {label: 'Swasta', value: 'swasta', checked: false},
        {label: 'Polri', value: 'polri', checked: false},
        {label: 'Petani', value: 'petani', checked: false},
        {label: 'BUMN', value: 'bumn', checked: false},
        {label: 'Pelajar', value: 'pelajar', checked: false},
        {label: 'Wirausaha', value: 'wirausaha', checked: false},
        {label: 'Lain-lain', value: 'lain-lain', checked: false},
    ]);
    const [gologanDarah, setGolonganDarah] = React.useState([
        {label: 'A', value: 'A', checked: false},
        {label: 'B', value: 'B', checked: false},
        {label: 'O', value: 'O', checked: false},
        {label: 'AB', value: 'AB', checked: false},
        {label: 'Tidak Tahu', value: 'X', checked: false},
    ]);
    const [rhesus, setRhesus] = React.useState([
        {label: 'Positif', value: '+', checked: false},
        {label: 'Negatif', value: '-', checked: false},
        {label: 'Tidak Tahu', value: 'X', checked: false},
    ]);
    const [input] = useState({
        jenis_donor: '',
        ktp: '',
        nama: '',
        nomor_telepon: '',
        wilayah: '',
        kecamatan: '',
        kelurahan: '',
        alamat: '',
        pekerjaan: '',
        golongan_darah: '',
        rhesus: '',
        berat_badan: '',
        jenis_kelamin: '',
        tanggal_lahir: '',
    });
    const pekerjaanHandler = index => {
        const newValue = pekerjaan.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.pekerjaan = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setPekerjaan(newValue);
    };
    const golonganDarahHandler = index => {
        const newValue = gologanDarah.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.golongan_darah = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setGolonganDarah(newValue);
    };

    const rhesusHandler = index => {
        const newValue = rhesus.map((checkbox, i) => {
            if (i !== index)
                return {
                    ...checkbox,
                    checked: false,
                };
            if (i === index) {
                const item = {
                    ...checkbox,
                    checked: !checkbox.checked,
                };
                input.rhesus = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setRhesus(newValue);
    };

    const goNextPage = page => {
        if (page == 'infoCovidPendonor') {
            input.alamat = props.route.params.payload.alamat;
            input.jenis_donor = 'plasma konvalesen';
            input.ktp = props.route.params.payload.ktp;
            input.nama = props.route.params.payload.nama;
            input.nomor_telepon = props.route.params.payload.nomor_telepon;
            input.wilayah = props.route.params.payload.wilayah;
            input.kecamatan = props.route.params.payload.kecamatan;
            input.kelurahan = props.route.params.payload.kelurahan;
            props.navigation.navigate('infoCovidPendonor', {payload: input});
        }
    };
    console.log(input);
    console.log(props.route.params);
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
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 30,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    Pekerjaan (Pilih salah satu)
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {pekerjaan.map((checkbox, i) => {
                            if (i < pekerjaan.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => pekerjaanHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {pekerjaan.map((checkbox, i) => {
                            if (i >= pekerjaan.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => pekerjaanHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>

                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Golongan Darah
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {gologanDarah.map((checkbox, i) => {
                            if (i < gologanDarah.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => golonganDarahHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {gologanDarah.map((checkbox, i) => {
                            if (i >= gologanDarah.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => golonganDarahHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                        textShadowColor: '#fff',
                        textShadowOffset: {width: 1, height: 1},
                        textShadowRadius: 10,
                    }}>
                    Rhesus
                </Text>
                <View
                    style={{
                        marginTop: 10,
                        marginLeft: 30,
                        marginRight: 40,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        {rhesus.map((checkbox, i) => {
                            if (i < rhesus.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => rhesusHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                    <View>
                        {rhesus.map((checkbox, i) => {
                            if (i >= rhesus.length / 2) {
                                return (
                                    <CheckBox
                                        style={{width: '70%'}}
                                        title={checkbox.label}
                                        checked={checkbox.checked}
                                        onPress={() => rhesusHandler(i)}
                                        key={i}
                                    />
                                );
                            }
                        })}
                    </View>
                </View>

                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 30,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'daftarDonorkonv')}>
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
                            onPress={goNextPage.bind(
                                this,
                                'infoCovidPendonor',
                            )}>
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

export default infoPendonorKonv;
