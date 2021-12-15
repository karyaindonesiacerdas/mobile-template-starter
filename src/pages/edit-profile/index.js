import React, {useState, useEffect} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, Item, Input, Content, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity, PermissionsAndroid} from 'react-native';
import styles from '../styles/styles';
import Bg from '../../image/baground3.jpeg';
import {Formik, Form} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PENDONOR, USER_MANAGEMENT} from '../../config/api';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios';
import * as Yup from 'yup';
import base64 from 'react-native-base64';

function EditProfil(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [ktp, setKtp] = useState(null);
    const [nama, setNama] = useState(null);
    const [tempat_lahir, setTempatLahir] = useState(null);
    const [tanggal_lahir, setTanggalLahir] = useState(null);
    const [jeniskelamin, setJenisKelamin] = React.useState(null);
    const [status_menikah, setStatusMenikah] = React.useState(0);
    const [pekerjaan, setPekerjaan] = React.useState([]);
    const [pekerjaanInitial, setPekerjaanInitial] = React.useState(null);
    const [golonganDarah, setGolonganDarah] = React.useState([]);
    const [golonganDarahInitial, setGolonganDarahInitial] =
        React.useState(null);
    const [filebase64, setBase64] = React.useState(null);
    const [gambar, setGambar] = React.useState('');

    useEffect(() => {
        async function getUser() {
            const token = await AsyncStorage.getItem('token');
            const url = USER_MANAGEMENT;

            // TOKEN
            var _ktp = await AsyncStorage.getItem('ktp');
            var _nama = await AsyncStorage.getItem('nama');
            var _tempat_lahir = await AsyncStorage.getItem('tempat_lahir');
            var _tanggal_lahir = await AsyncStorage.getItem('tanggal_lahir');
            var _jenis_kelamin = await AsyncStorage.getItem('jenis_kelamin');
            var _status_menikah = await AsyncStorage.getItem('status_menikah');
            var _golongan_darah = await AsyncStorage.getItem('golongan_darah');
            var _pekerjaan = await AsyncStorage.getItem('pekerjaan');
            var _gambar = await AsyncStorage.getItem('gambar');

            console.info('_ktp', _ktp);
            console.info('_nama', _nama);
            console.info('_tempat_lahir', _tempat_lahir);
            console.info('_tanggal_lahir', _tanggal_lahir);
            console.info('_jenis_kelamin', _jenis_kelamin);
            console.info('_status_menikah', _status_menikah);
            console.info('_golongan_darah', _golongan_darah);
            console.info('_pekerjaan', _pekerjaan);

            Axios.post(
                `${url}/api/simaba/user`,
                {},
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                },
            )
                .then(r => {
                    if (r.data.code == 200) {
                        setKtp(_ktp || r.data?.data?.[0].ktp);
                        setNama(_nama, r.data?.data?.[0].nama);
                        setTempatLahir(
                            _tempat_lahir || r.data?.data?.[0].tempat_lahir,
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
                        setBase64(_gambar || null);
                    } else {
                        console.error('Error', r.data);
                    }
                })
                .catch(err => {
                    console.error('error : ', err);
                });
        }

        getUser();
    }, []);

    const [input] = useState({
        pekerjaan: '',
        gologan_darah: '',
        jenis_kelamin: '',
        status_menikah: '',
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
        console.info('setPekerjaan', newValue);
        setPekerjaan(newValue);
    };

    const golonganDarahHandler = index => {
        const newValue = golonganDarah.map((checkbox, i) => {
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
                input.gologan_darah = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setGolonganDarah(newValue);
    };
    const jeniskelaminHandler = val => {
        const newValue = jeniskelamin.map((checkbox, i) => {
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
                input.jenis_kelamin = checkbox.value;
                return item;
            }
            return checkbox;
        });
        setJenisKelamin(newValue);
    };
    const statusmenikahHandler = val => {
        setStatusMenikah(val);
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const submitData = value => {
        console.info('value-form', value.golongan_darah.toString());

        async function submit() {
            // setIsLoading(true)
            const token = await AsyncStorage.getItem('token');
            const url = USER_MANAGEMENT;
            const body = {
                ktp: value.ktp,
                nama: value.nama,
                tempat_lahir: value.tempat_lahir,
                tanggal_lahir: value.tanggal_lahir,
                jenis_kelamin: value.jeniskelamin,
                status_menikah: value.statusmenikah.toString(),
                golongan_darah: value.gologan_darah,
                pekerjaan: value.pekerjaan,
                gambar: filebase64,
            };
            // return;

            if (
                !jeniskelamin ||
                !status_menikah ||
                !golonganDarah ||
                !pekerjaan
            ) {
                alert('Lengkapi Data Profile');
            } else {
                Axios.put(`${url}/api/simaba/user/update`, body, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(r => {
                        if (r.data.code == 200) {
                            console.log(
                                '11BODY---',
                                value.golongan_darah.toString(),
                            );

                            AsyncStorage.setItem('ktp', body.ktp.toString());
                            AsyncStorage.setItem('nama', body.nama.toString());
                            AsyncStorage.setItem(
                                'tempat_lahir',
                                body.tempat_lahir.toString(),
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
                                value.golongan_darah.toString(),
                            );
                            AsyncStorage.setItem(
                                'pekerjaan',
                                body.pekerjaan.toString(),
                            );
                            AsyncStorage.setItem(
                                'gambar',
                                body.gambar.toString(),
                            );

                            alert('sukses melengkapi profil');
                            props.navigation.navigate('Dashboard');
                        } else {
                            console.log('Error', r.data);
                        }
                    })
                    .catch(err => {
                        console.log('error : ', err.message);
                    });
            }

            setIsLoading(false);
        }
        submit();
    };

    useEffect(() => {
        get_profile_image();
        setBase64(
            '/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/bAEMBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIASwBLAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQr/xAAZEAEAAgMAAAAAAAAAAAAAAAAAAcECMXH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAv/EABoRAQEBAAMBAAAAAAAAAAAAAAARAQISITH/2gAMAwEAAhEDEQA/AMP4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFBN35lAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEjeXahQVx3rtl8gAJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/9k=',
        );
    }, []);

    async function get_profile_image() {
        const token = await AsyncStorage.getItem('token');
        const gambar_str = await AsyncStorage.getItem('gambar');
        if (gambar_str) {
            setGambar(gambar_str.substring(15));
            console.log(gambar_str);
        }
        const url = USER_MANAGEMENT;
        const get_url = `${url}/api/simaba/image-profile/${gambar}`;
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

    const formSchema = Yup.object().shape({
        ktp: Yup.string()
            .min(10, 'Invalid KTP Number !')
            .max(16, 'Invalid KTP Number !')
            .required('Required !'),
        nama: Yup.string().required('Required !'),
        tempat_lahir: Yup.string().required('Required !'),
        tanggal_lahir: Yup.string().required('Required !'),
        // jeniskelamin : Yup.string()
        // .required('Required !'),
        // statusmenikah : Yup.string()
        // .required('Required !')
    });
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
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            videoQuality: 'low',
            durationLimit: 30, //Video max duration in seconds
            saveToPhotos: true,
            includeBase64: true,
        };
        let isCameraPermitted = await requestCameraPermission();
        let isStoragePermitted = await requestExternalWritePermission();
        if (isCameraPermitted && isStoragePermitted) {
            launchCamera(options, response => {
                if (response.didCancel) {
                    alert('User cancelled camera picker');
                    return;
                } else if (response.errorCode == 'camera_unavailable') {
                    alert('Camera not available on device');
                    return;
                } else if (response.errorCode == 'permission') {
                    alert('Permission not satisfied');
                    return;
                } else if (response.errorCode == 'others') {
                    alert(response.errorMessage);
                    return;
                }

                const img = {
                    uri: response.assets[0].uri,
                    type: response.assets[0].type,
                    name: response.assets[0].fileName,
                };
                setFilePath(img);
                setBase64(response.assets[0].base64);
            });
        }
    };

    const chooseFile = type => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
            includeBase64: true,
        };
        launchImageLibrary(options, response => {
            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }
            console.log(response);
            const img = {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
            };
            setFilePath(img);
            setBase64(response.assets[0].base64);
        });
    };
    const savePhoto = () => {
        async function submit_photo() {
            const token = await AsyncStorage.getItem('token');
            const email = await AsyncStorage.getItem('email');
            const url = USER_MANAGEMENT;
            const body = new FormData();
            body.append('email', email);
            body.append('gambar', filePath);
            console.log(body);
            Axios.put(`${url}/api/simaba/user/image-profile`, body, {
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
                        alert('sukses melengkapi profil');
                        props.navigation.navigate('Dashboard');
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
                        source={require('../image/logo.png')}
                        style={{
                            width: 54,
                            height: 60,
                            top: 10,
                            margin: 20,

                            left: 10,
                        }}></Image>
                    <Image
                        source={require('../image/Logo2.png')}
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
                                    source={{
                                        uri:
                                            'data:image/jpeg;base64,' +
                                            filebase64,
                                    }}
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
                                jeniskelamin: jeniskelamin,
                                statusmenikah: status_menikah,
                                pekerjaan: pekerjaanInitial,
                                golongan_darah: golonganDarahInitial,
                            }}
                            enableReinitialize
                            validationSchema={formSchema}
                            onSubmit={value => {
                                submitData(value);
                            }}>
                            {({
                                handleChange,
                                handleBlur,
                                setFieldValue,
                                handleSubmit,
                                values,
                                errors,
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
                                        No.KTP
                                    </Text>
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange('ktp')}
                                            onBlur={handleBlur('ktp')}
                                            value={values.ktp}
                                        />
                                    </Item>
                                    {errors.ktp && touched.ktp ? (
                                        <Text
                                            style={{
                                                marginLeft: 30,
                                                fontSize: 15,
                                                fontWeight: 'normal',
                                                color: 'red',
                                                textShadowColor: '#fff',
                                                textShadowOffset: {
                                                    width: 1,
                                                    height: 1,
                                                },
                                                textShadowRadius: 10,
                                            }}>
                                            {errors.ktp}
                                        </Text>
                                    ) : null}
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
                                    {errors.nama && touched.nama ? (
                                        <Text
                                            style={{
                                                marginLeft: 30,
                                                fontSize: 15,
                                                fontWeight: 'normal',
                                                color: 'red',
                                                textShadowColor: '#fff',
                                                textShadowOffset: {
                                                    width: 1,
                                                    height: 1,
                                                },
                                                textShadowRadius: 10,
                                            }}>
                                            {errors.nama}
                                        </Text>
                                    ) : null}
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
                                    {errors.tempat_lahir &&
                                    touched.tempat_lahir ? (
                                        <Text
                                            style={{
                                                marginLeft: 30,
                                                fontSize: 15,
                                                fontWeight: 'normal',
                                                color: 'red',
                                                textShadowColor: '#fff',
                                                textShadowOffset: {
                                                    width: 1,
                                                    height: 1,
                                                },
                                                textShadowRadius: 10,
                                            }}>
                                            {errors.tempat_lahir}
                                        </Text>
                                    ) : null}
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
                                    <Item style={styles.item}>
                                        <Input
                                            style={styles.input}
                                            onChangeText={handleChange(
                                                'tanggal_lahir',
                                            )}
                                            onBlur={handleBlur('tanggal_lahir')}
                                            value={values.tanggal_lahir}
                                            placeholder={'Contoh: 1982-12-28'}
                                        />
                                    </Item>
                                    {errors.tanggal_lahir &&
                                    touched.tanggal_lahir ? (
                                        <Text
                                            style={{
                                                marginLeft: 30,
                                                fontSize: 15,
                                                fontWeight: 'normal',
                                                color: 'red',
                                                textShadowColor: '#fff',
                                                textShadowOffset: {
                                                    width: 1,
                                                    height: 1,
                                                },
                                                textShadowRadius: 10,
                                            }}>
                                            {errors.tanggal_lahir}
                                        </Text>
                                    ) : null}
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
                                                values.statusmenikah == 1
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                setFieldValue(
                                                    'statusmenikah',
                                                    1,
                                                )
                                            }
                                        />
                                        <CheckBox
                                            style={{width: '70%'}}
                                            title={'Belum Menikah'}
                                            checked={
                                                values.statusmenikah == 0
                                                    ? true
                                                    : false
                                            }
                                            onPress={() =>
                                                setFieldValue(
                                                    'statusmenikah',
                                                    0,
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
                                            {golonganDarah.map(
                                                (checkbox, i) => {
                                                    // console.info("__DATA__",golonganDarah)
                                                    if (
                                                        i <
                                                        golonganDarah.length / 2
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
                                            {golonganDarah.map(
                                                (checkbox, i) => {
                                                    if (
                                                        i >=
                                                        golonganDarah.length / 2
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
