import React, {useState, useEffect} from 'react';
import {Image, Text, View, TextInput, StyleSheet, Alert} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, Picker, Item} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../../styles/styles';
import Bg from '../../image/baground3.jpeg';
import DocumentPicker from 'react-native-document-picker';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../config/api';
import DatePicker from 'react-native-date-picker';
import AwesomeLoading from 'react-native-awesome-loading';
import moment from 'moment';
import 'moment/locale/id';

function PermintaanDarah(props) {
    const [number, onChangeNumber] = React.useState(null);
    const [tanggal_permintaan, setTanggalPermintaan] = useState();
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [jeniskelamin, setJenisKelamin] = React.useState([
        {label: 'Laki-Laki', value: 'laki-laki', name: 'jenis_kelamin'},
        {label: 'Perempuan', value: 'perempuan', name: 'jenis_kelamin'},
    ]);
    const [gologanDarah, setGolonganDarah] = React.useState([
        {label: 'A', value: 'A', name: 'golongan_darah'},
        {label: 'B', value: 'B', name: 'golongan_darah'},
        {label: 'O', value: 'O', name: 'golongan_darah'},
        {label: 'AB', value: 'AB', name: 'golongan_darah'},
    ]);
    const [rhesus, setRhesus] = React.useState([
        {label: 'Positif', value: '+', name: 'rhesus'},
        {label: 'Negatif', value: '-', name: 'rhesus'},
    ]);
    const [jenis_permintaan, setJenisPermintaan] = useState([
        {label: 'Mandiri', value: '1', name: 'jenis_permintaan_darah'},
        {label: 'Rumah Sakit', value: '2', name: 'jenis_permintaan_darah'},
    ]);
    const [list_rs, setRs] = useState([]);
    const [rs, setValueRs] = useState(null);
    const [value, setValue] = useState({
        jenis_permintaan_darah: '',
        nama_pasien: '',
        tanggal_permintaan: '',
        rumah_sakit: '',
        jenis_kelamin: '',
        no_rekam_medis: '',
        golongan_darah: '',
        rhesus: '',
        surat_permintaan_darah: '',
    });
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const removeFile = () => {
        Alert.alert('Warning', 'Hapus Surat Permintaan Darah ?', [
            {
                text: 'Ya',
                onPress: () => {
                    setPermintaanFile('');
                    handleChange({name: 'surat_permintaan_darah', value: ''});
                },
            },
            {
                text: 'Tidak',
                onPress: () => console.log('Ok'),
            },
        ]);
    };

    const handleChange = e => {
        const {name, value} = e;
        setValue(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };
    async function get_info() {
        const token = await AsyncStorage.getItem('token');

        Axios.get(`${API}/kebutuhandarah/list/rumahsakit`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var rs = r.data.data.hospitals;
                var rs_list = [];
                for (var i in rs) {
                    var d = {};
                    d['label'] = rs[i];
                    d['value'] = rs[i];
                    d['name'] = 'rumah_sakit';
                    rs_list.push(d);
                }
                setRs(rs_list);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        get_info();
    }, []);

    const [file_permintaan, setPermintaanFile] = useState('');
    const selectPermintaanFile = async () => {
        try {
            const res = await DocumentPicker.pick({
                type: [DocumentPicker.types.images],
            });
            const img = {
                uri: res[0].uri,
                type: res[0].type,
                name: res[0].name,
            };
            setPermintaanFile(img);
            handleChange({name: 'surat_permintaan_darah', value: img});
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
    const submitData = () => {
        var flag_error = 0;
        // const body = value;
        var body = new FormData();
        for (var key in value) {
            // if (!value[key] && flag_error == 0) {
            //     flag_error += 1;
            //     var text = 'Kolom ' + key.toUpperCase() + ' Tidak Boleh Kosong';
            //     Alert.alert('Gagal', text, [
            //         {text: 'Coba Lagi', onPress: () => console.log('Ok')},
            //     ]);
            // }
            body.append(key, value[key]);
        }
        async function submit() {
            const token = await AsyncStorage.getItem('token');
            console.log(body);
            Axios.post(`${API}/permintaan/darah/master/create`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type':
                        'multipart/form-data; boundary=${body._boundary}',
                },
            })
                .then(r => {
                    console.log(r.data);
                    if (r.data.code == 200) {
                        alert('sukses');
                    } else {
                        Alert.alert('Gagal', r.data.message, [
                            {
                                text: 'Coba Lagi',
                                onPress: () => console.log('Ok'),
                            },
                        ]);
                    }
                })
                .catch(err => {
                    console.log('error : ', err);
                });
        }
        if (flag_error == 0) {
            submit();
        }
    };
    return (
        <Container>
            <Image
                source={Bg}
                style={{width: '100%', height: '100%', position: 'absolute'}}
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
            <Text
                style={{
                    marginLeft: 30,
                    marginTop: 0,
                    fontSize: 35,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                Permintaan
            </Text>
            <Text
                style={{
                    marginLeft: 30,
                    marginTop: -10,
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'red',
                }}>
                Darah
            </Text>
            <ScrollView>
                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 10,
                        marginTop: 30,
                    }}>
                    <Text style={[styles.label]}>Permintaan Darah</Text>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles2.placeholderStyle}
                        selectedTextStyle={styles2.selectedTextStyle}
                        inputSearchStyle={styles2.inputSearchStyle}
                        iconStyle={styles2.iconStyle}
                        data={jenis_permintaan}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Pilih Jenis Permintaan'}
                        value={rs}
                        onChange={e => {
                            handleChange(e);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles2.icon}
                                color={'black'}
                                name="downcircleo"
                                size={20}
                            />
                        )}
                    />
                    <Text style={[styles.label]}>Rumah Sakit</Text>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles2.placeholderStyle}
                        selectedTextStyle={styles2.selectedTextStyle}
                        inputSearchStyle={styles2.inputSearchStyle}
                        iconStyle={styles2.iconStyle}
                        data={list_rs}
                        search
                        searchPlaceholder="Cari Rumah Sakit"
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Pilih Rumah Sakit'}
                        value={rs}
                        onChange={e => {
                            handleChange(e);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles2.icon}
                                color={'black'}
                                name="downcircleo"
                                size={20}
                            />
                        )}
                    />
                    <Text style={[styles.label]}>Tanggal Permintaan</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            paddingHorizontal: 8,
                            marginBottom: 10,
                            backgroundColor: 'white',
                        }}
                        onPressIn={() => setOpen(true)}
                        placeholder={'Tanggal Permintaan'}
                        value={tanggal_permintaan}
                    />
                    <DatePicker
                        modal
                        mode="date"
                        open={open}
                        date={date}
                        onConfirm={date => {
                            setOpen(false);

                            setTanggalPermintaan(
                                moment(date).format('YYYY-MM-DD').toString(),
                            );
                            handleChange({
                                name: 'tanggal_permintaan',
                                value: moment(date)
                                    .format('YYYY-MM-DD')
                                    .toString(),
                            });
                        }}
                        onCancel={() => {
                            setOpen(false);
                        }}
                    />
                    <Text style={[styles.label]}>Nama Pasien</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            paddingHorizontal: 8,
                            marginBottom: 10,
                            backgroundColor: 'white',
                        }}
                        name="nama_pasien"
                        onChangeText={text =>
                            handleChange({name: 'nama_pasien', value: text})
                        }
                        placeholder={'Nama Pasien'}
                    />
                    <Text style={[styles.label]}>Jenis Kelamin</Text>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles2.placeholderStyle}
                        selectedTextStyle={styles2.selectedTextStyle}
                        inputSearchStyle={styles2.inputSearchStyle}
                        iconStyle={styles2.iconStyle}
                        data={jeniskelamin}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Pilih Jenis Kelamin'}
                        value={rs}
                        onChange={e => {
                            handleChange(e);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles2.icon}
                                color={'black'}
                                name="downcircleo"
                                size={20}
                            />
                        )}
                    />
                    <Text style={[styles.label]}>No Rekam Medis</Text>
                    <TextInput
                        style={{
                            height: 40,
                            borderColor: 'gray',
                            borderWidth: 0.5,
                            borderRadius: 8,
                            paddingHorizontal: 8,
                            marginBottom: 10,
                            backgroundColor: 'white',
                        }}
                        onChangeText={text =>
                            handleChange({name: 'no_rekam_medis', value: text})
                        }
                        placeholder={'No Rekam Medis'}
                    />
                    <Text style={[styles.label]}>Golongan Darah</Text>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles2.placeholderStyle}
                        selectedTextStyle={styles2.selectedTextStyle}
                        inputSearchStyle={styles2.inputSearchStyle}
                        iconStyle={styles2.iconStyle}
                        data={gologanDarah}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Pilih Jenis Permintaan'}
                        value={rs}
                        onChange={e => {
                            handleChange(e);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles2.icon}
                                color={'black'}
                                name="downcircleo"
                                size={20}
                            />
                        )}
                    />
                    <Text style={[styles.label]}>Rhesus</Text>
                    <Dropdown
                        style={[styles.dropdown]}
                        placeholderStyle={styles2.placeholderStyle}
                        selectedTextStyle={styles2.selectedTextStyle}
                        inputSearchStyle={styles2.inputSearchStyle}
                        iconStyle={styles2.iconStyle}
                        data={rhesus}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={'Pilih Rhesus'}
                        value={rs}
                        onChange={e => {
                            handleChange(e);
                        }}
                        renderLeftIcon={() => (
                            <AntDesign
                                style={styles2.icon}
                                color={'black'}
                                name="downcircleo"
                                size={20}
                            />
                        )}
                    />
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            borderColor: 'gray',
                            height: 40,
                            borderWidth: 0.5,
                            borderRadius: 8,
                            paddingHorizontal: 8,
                            marginTop: 15,
                            backgroundColor: 'rgba(112,40,43,0.6)',
                        }}
                        onPress={selectPermintaanFile}>
                        {/*Single file selection button*/}
                        <Text
                            style={{
                                marginRight: 10,
                                marginLeft: 30,
                                textAlign: 'center',
                                marginTop: 0,
                                fontSize: 15,
                                color: 'white',
                                fontWeight: 'bold',
                                textShadowRadius: 10,
                            }}>
                            Upload Surat Permintaan Darah
                        </Text>
                        <AntDesign
                            style={{marginLeft: 10}}
                            color={'blue'}
                            name="addfile"
                            size={25}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeFile.bind()}>
                        <Text
                            style={{
                                marginLeft: 10,
                                marginTop: 0,
                                marginBottom: 0,
                                fontSize: 15,
                                color: 'black',
                                fontWeight: 'bold',
                                textShadowColor: '#fff',
                                textShadowOffset: {width: 1, height: 1},
                                textShadowRadius: 10,
                            }}>
                            {file_permintaan.name ? file_permintaan.name : ''}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 50,
                        marginBottom: 20,
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#000',
                            width: '40%',
                            marginRight: '2%',
                            borderRadius: 10,
                            zIndex: 1,
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'MenuDonor')}>
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
                            borderRadius: 10,
                            zIndex: 1,
                        }}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={goNextPage.bind(this, 'DetailPermintaan')}>
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

export default PermintaanDarah;

const styles2 = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
    },
    dropdown: {
        height: 10,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 4,
        paddingHorizontal: 4,
    },
    icon: {
        marginRight: 15,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 12,
    },
    placeholderStyle: {
        fontSize: 12,
    },
    selectedTextStyle: {
        fontSize: 12,
    },
    iconStyle: {
        width: 10,
        height: 10,
        marginRight: 20,
    },
    inputSearchStyle: {
        height: 50,
        fontSize: 16,
        color: 'black',
    },
});

