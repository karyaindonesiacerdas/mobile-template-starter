import React, {useState, useEffect} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    Button,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, Item, Input, Content, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity, PermissionsAndroid} from 'react-native';
import styles from '../../styles/styles';
import Bg from '../../image/baground3.jpeg';
import {Formik, Form} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API} from '../../../config/api';
import Axios from 'axios';
import * as Yup from 'yup';
import base64 from 'react-native-base64';
import AwesomeLoading from 'react-native-awesome-loading';
import DatePicker from 'react-native-date-picker'
import moment from 'moment'
import 'moment/locale/id'
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function EditProfil(props) {
    const [loading, setLoading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [ktp, setKtp] = useState(null);
    const [nama, setNama] = useState(null);
    const [tempat_lahir, setTempatLahir] = useState();
    const [alamat, setAlamat] = useState();
    const [kecamatan, setKecamatan] = useState();
    const [kelurahan, setKelurahan] = useState();
    const [wilayah, setWilayah] = useState();
    const [tanggal_lahir, setTanggalLahir] = useState();
    const [jeniskelamin, setJenisKelamin] = React.useState();
    const [status_menikah, setStatusMenikah] = React.useState();
    const [pekerjaan, setPekerjaan] = React.useState([]);
    const [pekerjaanInitial, setPekerjaanInitial] = React.useState(null);
    const [golongan_darah, setGolonganDarah] = React.useState([]);
    const [golonganDarahInitial, setGolonganDarahInitial] =
        React.useState(null);
    const [filebase64, setBase64] = React.useState(null);
    const [gambar, setGambar] = React.useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    useEffect(() => {
        async function getUser() {
            setLoading(true)
            const token = await AsyncStorage.getItem('token');
            
            // TOKEN
            var _ktp = await AsyncStorage.getItem('ktp');
            var _nama = await AsyncStorage.getItem('nama');
            var _tempat_lahir = await AsyncStorage.getItem('tempat_lahir');
            var _alamat = await AsyncStorage.getItem('alamat');
            var _kecamatan = await AsyncStorage.getItem('kecamatan');
            var _kelurahan = await AsyncStorage.getItem('kelurahan');
            var _wilayah = await AsyncStorage.getItem('wilayah');
            var _tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir');
            var _jenis_kelamin = await AsyncStorage.getItem('jenis_kelamin');
            var _status_menikah = await AsyncStorage.getItem('status_menikah');
            var _golongan_darah = await AsyncStorage.getItem('golongan_darah');
            var _pekerjaan = await AsyncStorage.getItem('pekerjaan');
            var _gambar = await AsyncStorage.getItem('gambar');

            console.info('_ktp', _ktp);
            console.info('_nama', _nama);
            console.info('_alamat',_alamat);
            console.info('_kecamatan',_kecamatan);
            console.info('_kelurahan',_kelurahan);
            console.info('_wilayah',_wilayah);
            console.info('_tempat_lahir', _tempat_lahir);
            console.info('_tanggal_lahir', _tanggal_lahir);
            console.info('_jenis_kelamin', _jenis_kelamin);
            console.info('_status_menikah', _status_menikah);
            console.info('_golongan_darah', _golongan_darah);
            console.info('_pekerjaan', _pekerjaan);
            Axios.post(
                `${API}/user`,
                {},
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then(r => {
                    setLoading(false)
                    if (r.data.code == 200) {
                        setKtp(_ktp || r.data?.data?.[0].ktp);
                        setNama(_nama, r.data?.data?.[0].nama);
                        setTempatLahir(
                            _tempat_lahir || r.data?.data?.[0].tempat_lahir,
                        );
                        setAlamat(
                            _alamat || r.data?.data?.[0].alamat,
                        );
                        setKecamatan(
                            _kecamatan || r.data?.data?.[0].kecamatan,
                        );
                        setKelurahan(
                            _kelurahan || r.data?.data?.[0].kelurahan,
                        );
                        setWilayah(
                            _wilayah || r.data?.data?.[0].wilayah,
                        );
                        setTanggalLahir(
                            _tanggal_lahir || r.data?.data?.[0].tanggal_lahir,
                        );
                        setJenisKelamin(
                            _jenis_kelamin || r.data?.data?.[0].jenis_kelamin,
                        );
                        setStatusMenikah(
                            _status_menikah || r.data?.data?.[0].status_menikah,
                        );
                        setPekerjaanInitial(
                            _pekerjaan || r.data?.data?.[0].pekerjaan,
                        );
                        setGolonganDarahInitial(
                            _golongan_darah || r.data?.data?.[0].golongan_darah,
                        );

                        console.info(
                            _pekerjaan || r.data?.data?.[0].pekerjaan,
                            _pekerjaan ||
                                r.data?.data?.[0].pekerjaan === 'swasta'
                                ? true
                                : false,
                        );

                        setPekerjaan([
                            {
                                label: 'PNS',
                                value: 'pns',
                                checked:
                                    _pekerjaan == 'pns'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan == 'pns'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Swasta',
                                value: 'swasta',
                                checked:
                                    _pekerjaan == 'swasta'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan ==
                                              'swasta'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Polri',
                                value: 'polri',
                                checked:
                                    _pekerjaan == 'polri'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan == 'polri'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Petani',
                                value: 'petani',
                                checked:
                                    _pekerjaan == 'petani'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan ==
                                              'petani'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'BUMN',
                                value: 'bumn',
                                checked:
                                    _pekerjaan == 'bumn'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan == 'bumn'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Pelajar',
                                value: 'pelajar',
                                checked:
                                    _pekerjaan == 'pelajar'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan ==
                                              'pelajar'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Wirausaha',
                                value: 'wirausaha',
                                checked:
                                    _pekerjaan == 'wirausaha'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan ==
                                              'wirausaha'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'Lain-lain',
                                value: 'lain-lain',
                                checked:
                                    _pekerjaan == 'lain-lain'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].pekerjaan ==
                                              'lain-lain'
                                        ? true
                                        : false,
                            },
                        ]);
                        console.info(
                            _golongan_darah || r.data?.data?.[0].golongan_darah,
                        );
                        setGolonganDarah([
                            {
                                label: 'A',
                                value: 'A',
                                checked:
                                    _golongan_darah == 'A'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].golongan_darah ==
                                              'A'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'B',
                                value: 'B',
                                checked:
                                    _golongan_darah == 'B'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].golongan_darah ==
                                              'B'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'O',
                                value: 'O',
                                checked:
                                    _golongan_darah == 'O'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].golongan_darah ==
                                              'O'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'AB',
                                value: 'AB',
                                checked:
                                    _golongan_darah == 'AB'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].golongan_darah ==
                                              'AB'
                                        ? true
                                        : false,
                            },
                            {
                                label: 'X (Tidak tahu)',
                                value: 'X',
                                checked:
                                    _golongan_darah == 'X'
                                        ? true
                                        : false ||
                                          r.data?.data?.[0].golongan_darah ==
                                              'X'
                                        ? true
                                        : false,
                            },
                        ]);
                        setGambar(_gambar || r.data?.data?.[0].gambar);
                    } else {
                        setLoading(false)
                        console.error('Error', r.data);
                    }
                })
                .catch(err => {
                    setLoading(false)
                    console.error('error : ', err);
                });
        }
        async function get_profile_image() {
            const token = await AsyncStorage.getItem('token');
            const gambar_str = await AsyncStorage.getItem('gambar');
            if (gambar_str) {
                setGambar(gambar_str);
                console.log(gambar_str);
            }
            const get_url = `${API}/user/image-profile/${gambar.toString()}`;
            console.log(get_url);
            Axios.get(get_url, {
                headers: {
                    Authorization: 'Bearer ' + token,
                },
            })
                .then(r => {
                    console.log(r);
                })
                .catch(err => {
                    console.log(err);
                });
        }

        getUser();
        setIsLoading(false);
        // get_profile_image();
    }, []);

    const [input] = useState({
        pekerjaan: '',
        gologan_darah: '',
        jenis_kelamin: '',
        status_menikah: '',
    });

    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const submitData = value => {
        var flag_error = 0
        for (const key in value){
            console.log(`${key}: ${value[key]}`);
            if (!value[key] && flag_error == 0){
                flag_error +=1
                var text = "Kolom " + key.toUpperCase() + " Tidak Boleh Kosong"
                Alert.alert("Gagal",text,
                [{ text: "Coba Lagi", onPress: () => console.log('Ok')}]
                )
            }
        }
        async function submit() {
            // setIsLoading(true)
            setLoading(true)
            const token = await AsyncStorage.getItem('token');
            
            const body = {
                ktp: value.ktp,
                nama: value.nama,
                tempat_lahir: value.tempat_lahir,
                alamat: value.alamat,
                kecamatan: value.kecamatan,
                kelurahan: value.kelurahan,
                wilayah: value.wilayah,
                tanggal_lahir: value.tanggal_lahir,
                jenis_kelamin: value.jeniskelamin,
                status_menikah: value.status_menikah,
                golongan_darah: value.golongan_darah.toString(),
                pekerjaan: value.pekerjaan,
                gambar: filebase64,
            };
            console.log(
                '11BODY---',
                body.golongan_darah.toString(),
            );
                Axios.put(`${API}/user/update`, body, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(r => {
                        setLoading(false)
                        if (r.data.code == 200) {

                            AsyncStorage.setItem('ktp', body.ktp.toString());
                            AsyncStorage.setItem('nama', body.nama.toString());
                            AsyncStorage.setItem(
                                'tempat_lahir',
                                body.tempat_lahir.toString(),
                            );
                            AsyncStorage.setItem(
                                'alamat',
                                body.alamat.toString(),
                            );
                            AsyncStorage.setItem(
                                'kecamatan',
                                body.kecamatan.toString(),
                            );
                            AsyncStorage.setItem(
                                'kelurahan',
                                body.kelurahan.toString(),
                            );
                            AsyncStorage.setItem(
                                'wilayah',
                                body.wilayah.toString(),
                            );
                            AsyncStorage.setItem(
                                'tanggal_lahir',
                                body.tanggal_lahir.toString(),
                            );
                            AsyncStorage.setItem(
                                'jenis_kelamin',
                                body.jenis_kelamin.toString(),
                            );
                            AsyncStorage.setItem(
                                'status_menikah',
                                body.status_menikah.toString(),
                            );
                            AsyncStorage.setItem(
                                'golongan_darah',
                                body.golongan_darah.toString(),
                            );
                            AsyncStorage.setItem(
                                'pekerjaan',
                                body.pekerjaan.toString(),
                            );
                            if (body.gambar){
                            AsyncStorage.setItem(
                                'gambar',
                                body.gambar.toString(),
                            );}

                            Alert.alert("Berhasil","Profile Berhasil Di Perbarui, Silahkan Login Kembali",
                                [{ text: "OK", onPress: () => props.navigation.navigate('Login') }]
                                )
                        } else {
                            Alert.alert("Gagal",r.data.message,
                                [{ text: "Coba Lagi", onPress: () => console.log('Ok')}]
                                )
                        }
                    })
                    .catch(err => {

                        console.log('error : ', err.message);
                    });
            setLoading(false)
            setIsLoading(false);
        }
        if (flag_error == 0){
            submit();
        }      
    };

    const [filePath, setFilePath] = useState({});
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const captureImage = async type => {
        // let options = {
        //     mediaType: type,
        //     maxWidth: 300,
        //     maxHeight: 550,
        //     quality: 1,
        //     videoQuality: 'low',
        //     durationLimit: 30, //Video max duration in seconds
        //     saveToPhotos: true,
        //     includeBase64: true,
        // };
        // let isCameraPermitted = await requestCameraPermission();
        // let isStoragePermitted = await requestExternalWritePermission();
        // if (isCameraPermitted && isStoragePermitted) {
        //     launchCamera(options, response => {
        //         if (response.didCancel) {
        //             alert('User cancelled camera picker');
        //             return;
        //         } else if (response.errorCode == 'camera_unavailable') {
        //             alert('Camera not available on device');
        //             return;
        //         } else if (response.errorCode == 'permission') {
        //             alert('Permission not satisfied');
        //             return;
        //         } else if (response.errorCode == 'others') {
        //             alert(response.errorMessage);
        //             return;
        //         }

        //         const img = {
        //             uri: response.assets[0].uri,
        //             type: response.assets[0].type,
        //             name: response.assets[0].fileName,
        //         };
        //         setFilePath(img);
        //         setBase64(response.assets[0].base64);
        //     });
        // }
        Alert.alert("Warning","Feature Sedang Dalam Pengembangan",
        [{ text: "OK", onPress: () => console.log('Ok') }]
        )
    };

    const chooseFile = type => {
        Alert.alert("Warning","Feature Sedang Dalam Pengembangan",
        [{ text: "OK", onPress: () => console.log('Ok') }]
        )
        // let options = {
        //     mediaType: type,
        //     maxWidth: 300,
        //     maxHeight: 550,
        //     quality: 1,
        //     includeBase64: true,
        // };
        // launchImageLibrary(options, response => {
        //     if (response.didCancel) {
        //         alert('User cancelled camera picker');
        //         return;
        //     } else if (response.errorCode == 'camera_unavailable') {
        //         alert('Camera not available on device');
        //         return;
        //     } else if (response.errorCode == 'permission') {
        //         alert('Permission not satisfied');
        //         return;
        //     } else if (response.errorCode == 'others') {
        //         alert(response.errorMessage);
        //         return;
        //     }
        //     console.log(response);
        //     const img = {
        //         uri: response.assets[0].uri,
        //         type: response.assets[0].type,
        //         name: response.assets[0].fileName,
        //     };
        //     setFilePath(img);
        //     setBase64(response.assets[0].base64);
        // });
    };

    const savePhoto = () => {
        async function submit_photo() {
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            const body = new FormData();
            body.append('email', email);
            body.append('gambar', filePath);
            console.log(body);
            Axios.put(`${API}/user/image-profile`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(r => {
                    if (r.data.code == 200) {
                        console.log(r.data);
                        // AsyncStorage.setItem('exp', r.data.data.exp);
                        // AsyncStorage.setItem('ktp', r.data.data.ktp);
                        // AsyncStorage.setItem('tempat_lahir',r.data.data.tempat_lahir);
                        // AsyncStorage.setItem('tanggal_lahir',r.data.data.tanggal_lahir);
                        // AsyncStorage.setItem('status_menikah',r.data.data.status_menikah);
                        // AsyncStorage.setItem('jenis_kelamin',r.data.data.jenis_kelamin);
                        Alert.alert("Berhasil","Photo Profile Berhasil Di Perbarui",
                                [{ text: "OK", onPress: () => console.log('Ok') }]
                                )
                    } else {
                        console.log('Error', r.data);
                    }
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
        submit_photo();
    };

    return (
        <Container>
            
            <AwesomeLoading indicatorId={18} size={50} isActive={loading} text="loading.." />

            {isLoading ? (
                <Text>Loading....</Text>
            ) : (
                <React.Fragment>
                    <Image
                        source={Bg}
                        style={{
                            width: '100%',
                            height: '100%',
                            position: 'absolute',
                        }}
                    />
                    <Image
                        source={require('../../image/logo.png')}
                        style={{
                            width: 54,
                            height: 60,
                            top: 10,
                            margin: 20,

                            left: 10,
                        }}></Image>
                    <Image
                        source={require('../../image/Logo2.png')}
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
                                color: 'black',
                            }}>
                            Edit
                        </Text>
                        <Text
                            style={{
                                marginLeft: 30,
                                marginTop: -10,
                                fontSize: 30,
                                fontWeight: 'bold',
                                color: 'red',
                            }}>
                            Profil
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                padding: 10,
                            }}>
                            <Card
                                style={{
                                    width: '60%',
                                    marginRight: '5%',
                                }}>
                                <Image
                                    source={require('../../image/logo_profile.png')}
                                    style={{
                                        marginTop: 15,
                                        width: 150,
                                        height: 150,
                                        marginBottom: 10,
                                        alignSelf: 'center',
                                        marginTop: 15,
                                    }}
                                />
                            </Card>
                            <View style={{}}>
                                <Card
                                    style={{
                                        backgroundColor: 'grey',
                                        width: '60%',
                                        marginRight: '30%',
                                    }}>
                                        
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => captureImage('photo')}>
                                        <Text
                                            style={{
                                                margin: 10,
                                                fontSize: 20,

                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}>
                                            Camera
                                        </Text>
                                    </TouchableOpacity>
                                </Card>
                                <Card
                                    style={{
                                        backgroundColor: 'grey',
                                        width: '60%',
                                        marginRight: '30%',
                                    }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => chooseFile('photo')}>
                                        <Text
                                            style={{
                                                margin: 10,
                                                fontSize: 20,

                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}>
                                            Galery
                                        </Text>
                                    </TouchableOpacity>
                                </Card>
                                <Card
                                    style={{
                                        backgroundColor: 'grey',
                                        width: '60%',
                                        marginRight: '30%',
                                    }}>
                                    <TouchableOpacity
                                        style={styles.button}
                                        onPress={() => savePhoto()}>
                                        <Text
                                            style={{
                                                margin: 10,
                                                fontSize: 20,

                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                            }}>
                                            Save
                                        </Text>
                                    </TouchableOpacity>
                                </Card>
                            </View>
                        </View>
                        <Formik
                            initialValues={{
                                ktp: ktp,
                                nama: nama,
                                tempat_lahir: tempat_lahir,
                                tanggal_lahir: tanggal_lahir,
                                alamat: alamat,
                                kecamatan: kecamatan,
                                kelurahan: kelurahan,
                                wilayah: wilayah,
                                jeniskelamin: jeniskelamin,
                                status_menikah: status_menikah,
                                pekerjaan: pekerjaanInitial,
                                golongan_darah: golonganDarahInitial,
                            }}
                            enableReinitialize
                            onSubmit={value => {
                                submitData(value);
                            }}>
                            {({
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                handleSubmit,
                                values,
                                touched,
                            }) => (
                                <View>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Nama
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange('nama')}
                                            onBlur={handleBlur('nama')}
                                            value={values.nama}
                                        />
                                    </Item>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Tanggal Lahir
                                    </Text>
                                    
                                    <DatePicker
                                            modal
                                            mode='date'
                                            open={open}
                                            date={date}
                                            onConfirm={(date) => {
                                            setOpen(false)
                                            
                                        setTanggalLahir(moment(date).format('YYYY-MM-DD').toString())
                                            }}
                                            onCancel={() => {
                                            setOpen(false)
                                            }}
                                        />
                                    <Item style={styles.item}>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'tanggal_lahir',
                                            )}
                                            onPressIn = {() => setOpen(true)}
                                            onBlur={handleBlur('tanggal_lahir')}
                                            value={values.tanggal_lahir}
                                            placeholder={'Contoh: 1982-12-28'}
                                            // editable= {false}
                                        />
                                    </Item>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Tempat Lahir
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'tempat_lahir',
                                            )}
                                            onBlur={handleBlur('tempat_lahir')}
                                            value={values.tempat_lahir}
                                        />
                                    </Item>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        No.KTP
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange('ktp')}
                                            onBlur={handleBlur('ktp')}
                                            value={values.ktp}
                                            keyboardType='numeric'
                                        />
                                    </Item>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Alamat Lengkap
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'alamat',
                                            )}
                                            onBlur={handleBlur('alamat')}
                                            value={values.alamat}
                                        />
                                    </Item>
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Kelurahan
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'kelurahan',
                                            )}
                                            onBlur={handleBlur('kelurahan')}
                                            value={values.kelurahan}
                                        />
                                    </Item>
                                    
                                     <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Kecamatan
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'kecamatan',
                                            )}
                                            onBlur={handleBlur('kecamatan')}
                                            value={values.kecamatan}
                                        />
                                    </Item>
                                   
                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'normal',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Kabupaten / Kota
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'wilayah',
                                            )}
                                            onBlur={handleBlur('wilayah')}
                                            value={values.wilayah}
                                        />
                                    </Item>
                                   

                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        jenis kelamin
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: 10,
                                            marginLeft: 30,
                                            marginRight: 40,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                        <CheckBox
                                            style={{width: '70%'}}
                                            title={'laki-laki'}
                                            checked={
                                                values.jeniskelamin ==
                                                'laki-laki'
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                setFieldValue(
                                                    'jeniskelamin',
                                                    'laki-laki',
                                                )
                                            }
                                        />
                                        <CheckBox
                                            style={{width: '70%'}}
                                            title={'perempuan'}
                                            checked={
                                                values.jeniskelamin ==
                                                'perempuan'
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                setFieldValue(
                                                    'jeniskelamin',
                                                    'perempuan',
                                                )
                                            }
                                        />
                                        <View></View>
                                    </View>

                                    <Text
                                        style={{
                                            marginLeft: 30,
                                            marginTop: 20,
                                            fontSize: 15,
                                            fontWeight: 'bold',
                                            color: 'black',
                                            textShadowColor: '#fff',
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
                                            textShadowRadius: 10,
                                        }}>
                                        Status Menikah
                                    </Text>
                                    <View
                                        style={{
                                            marginTop: 10,
                                            marginLeft: 30,
                                            marginRight: 40,
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                        <CheckBox
                                            style={{width: '70%'}}
                                            title={'Sudah Menikah'}
                                            checked={
                                                values.status_menikah == '1'
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                setFieldValue(
                                                    'status_menikah',
                                                    '1',
                                                )
                                            }
                                        />
                                        <CheckBox
                                            style={{width: '70%'}}
                                            title={'Belum Menikah'}
                                            checked={
                                                values.status_menikah == "0"
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                
                                                setFieldValue(
                                                    'status_menikah',
                                                    '0',
                                                )
                                            }
                                        />
                                    </View>
                                    {/* <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Alamat
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kelurahan
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kecamatan
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Kabupaten/Kota
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 20,
            fontSize: 15,
            fontWeight: "normal",
            color: "black",
            textShadowColor: "#fff",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Provinsi
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
   
        /> */}
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
                                                // console.info(checkbox.value, checkbox.checked ? 'ada' : 'tidak');
                                                if (i < pekerjaan.length / 2) {
                                                    return (
                                                        <CheckBox
                                                            style={{
                                                                width: '70%',
                                                            }}
                                                            title={
                                                                checkbox.label
                                                            }
                                                            checked={
                                                                checkbox.value ==
                                                                values.pekerjaan
                                                                    ? true
                                                                    : false
                                                            }
                                                            onPress={() => {
                                                                setFieldValue(
                                                                    'pekerjaan',
                                                                    checkbox.value,
                                                                );
                                                                
                                                            }}
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
                                                            style={{
                                                                width: '70%',
                                                            }}
                                                            title={
                                                                checkbox.label
                                                            }
                                                            checked={
                                                                checkbox.value ==
                                                                values.pekerjaan
                                                                    ? true
                                                                    : false
                                                            }
                                                            onPress={() => {
                                                                setFieldValue(
                                                                    'pekerjaan',
                                                                    checkbox.value,
                                                                );
                                                                console.log(checkbox.value)
                                                            }}
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
                                            textShadowOffset: {
                                                width: 1,
                                                height: 1,
                                            },
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
                                            {golongan_darah.map(
                                                (checkbox, i) => {
                                                    // console.info("__DATA__",golonganDarah)
                                                    if (
                                                        i <
                                                        golongan_darah.length / 2
                                                    ) {
                                                        return (
                                                            <CheckBox
                                                                style={{
                                                                    width: '70%',
                                                                }}
                                                                title={
                                                                    checkbox.label
                                                                }
                                                                checked={
                                                                    checkbox.value ==
                                                                    values.golongan_darah
                                                                        ? true
                                                                        : false
                                                                }
                                                                onPress={() => {
                                                                    setFieldValue(
                                                                        'golongan_darah',
                                                                        checkbox.value,
                                                                    );
                                                                }}
                                                                key={i}
                                                            />
                                                        );
                                                    }
                                                },
                                            )}
                                        </View>
                                        <View>
                                            {golongan_darah.map(
                                                (checkbox, i) => {
                                                    if (
                                                        i >=
                                                        golongan_darah.length / 2
                                                    ) {
                                                        return (
                                                            <CheckBox
                                                                style={{
                                                                    width: '70%',
                                                                }}
                                                                title={
                                                                    checkbox.label
                                                                }
                                                                checked={
                                                                    checkbox.value ==
                                                                    values.golongan_darah
                                                                        ? true
                                                                        : false
                                                                }
                                                                onPress={() => {
                                                                    setFieldValue(
                                                                        'golongan_darah',
                                                                        checkbox.value,
                                                                    );
                                                                }}
                                                                key={i}
                                                            />
                                                        );
                                                    }
                                                },
                                            )}
                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            alignContent: 'center',

                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignContent: 'center',
                                            marginTop: 20,
                                        }}>
                                        <Card
                                            style={{
                                                backgroundColor: 'grey',
                                                width: '40%',
                                                marginRight: '2%',
                                            }}>
                                            <TouchableOpacity
                                                style={styles.button}
                                                onPress={goNextPage.bind(
                                                    this,
                                                    'GantiPasword',
                                                )}>
                                                <Text
                                                    style={{
                                                        margin: 10,
                                                        fontSize: 20,

                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        textAlign: 'center',
                                                    }}>
                                                    Ganti Password
                                                </Text>
                                            </TouchableOpacity>
                                        </Card>
                                    </View>
                                    <View
                                        style={{
                                            alignContent: 'center',

                                            flexDirection: 'row',
                                            justifyContent: 'center',
                                            alignContent: 'center',
                                            marginTop: 20,
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
                                                    'Dashboard',
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
                                                onPress={handleSubmit}>
                                                
                                                <Text
                                                    style={{
                                                        margin: 10,
                                                        fontSize: 20,
                                                        textAlign: 'center',

                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                    }}>
                                                    Simpan
                                                </Text>
                                            </TouchableOpacity>
                                        </Card>
                                    </View>
                                </View>
                            )}
                        </Formik>
                    </ScrollView>
                </React.Fragment>
            )}
        </Container>
    );
}

export default EditProfil;
