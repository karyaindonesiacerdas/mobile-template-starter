import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Item, Input, Card, Content, Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import {Formik} from 'formik';
import Bg from '../../image/baground3.jpeg';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {API} from '../../../config/api';

function DetailPermintaan(props) {
    const [product, setProduct] = React.useState([
        {
            label: 'Whole Blood (WB) Biasa',
            produk: 'Whole Blood (WB) Biasa',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Whole Blood (WB) Biasa',
            produk: 'Whole Blood (WB) Biasa',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Whole Blood (WB) Segar',
            produk: 'Whole Blood (WB) Segar',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Packed Red Cell (PRC) Biasa',
            produk: 'Packed Red Cell (PRC) Biasa',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Packed Red Cell (PRC) Leukodepleted',
            produk: 'Packed Red Cell (PRC) Leukodepleted',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Packed Red Cell (PRC) Pediatric Leukodepleted',
            produk: 'Packed Red Cell (PRC) Pediatric Leukodepleted',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Packed Red Cell (PRC) Pediatric Biasa',
            produk: 'Packed Red Cell (PRC) Pediatric Biasa',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Washed Erytrocyte (WE)',
            produk: 'Washed Erytrocyte (WE)',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Trombosite Concentrate (TC) Biasa',
            produk: 'Trombosite Concentrate (TC) Biasa',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Trombosite Concentrate (TC) Apheresis Leukodepleted',
            produk: 'Trombosite Concentrate (TC) Leukodepleted',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Fresh Frozen Plasma (FFP)',
            produk: 'Fresh Frozen Plasma (FFP)',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Cryoprecipitate',
            produk: 'Cryoprecipitate',
            checked: false,
            jumlah_permintaan: 0,
        },
        {
            label: 'Plasma Konvalesen',
            produk: 'Plasma Konvalesen',
            checked: false,
            jumlah_permintaan: 0,
        },
    ]);
    const [input] = useState({
        product: '',
    });
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const [kode_permintaan, setKodePermintaan] = useState('');
    const submitData = () => {
        let list_permintaan = [];
        for (let i = 0; i < product.length; i++) {
            if (product[i]['jumlah_permintaan'] > 0) {
                let map_request = {};
                map_request['produk'] = product[i]['produk'];
                map_request['jumlah_permintaan'] =
                    product[i]['jumlah_permintaan'];
                list_permintaan.push(map_request);
            }
        }
        if (list_permintaan.length == 0) {
            alert('permintaan tidak boleh kosong');
        } else {
            var body = {
                kode_permintaan_darah: 'PMD2022-04-17-0001',
                produk_request_detail: list_permintaan,
            };
            setKodePermintaan('PMD2022-04-17-0001');
            async function submit() {
                const token = await AsyncStorage.getItem('token');
                console.log(body);
                Axios.post(`${API}/permintaan/darah/detail/create`, body, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                        'Content-Type': 'application/json',
                    },
                })
                    .then(r => {
                        console.log(r.data);
                        if (r.data.code == 200) {
                            setKodePermintaan('PMD2022-04-17-0001');
                            props.navigation.navigate('ResultPermintaan', {
                                kode_permintaan: kode_permintaan,
                            });
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
            submit();
        }
        console.log('list_permintaan' + JSON.stringify(list_permintaan));
    };
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState(null);

    const plusNum = (item, key) => {
        let newArr = [...product]; // copying the old datas array
        if (item.jumlah_permintaan < 4) {
            newArr[key] = {
                checked: item.checked,
                label: item.label,
                produk: item.produk,
                jumlah_permintaan: item.jumlah_permintaan + 1,
            }; // replace e.target.value with whatever you want to change it to
            setProduct(newArr); // ??
        } else {
            alert('sudah melebihi jumlah maksimal!');
        }
    };

    const minusNum = (item, key) => {
        let newArr = [...product]; // copying the old datas array
        console.info('jumlah_permintaan', item.jumlah_permintaan);
        if (item.jumlah_permintaan > 0) {
            newArr[key] = {
                checked: item.checked,
                label: item.label,
                produk: item.produk,
                jumlah_permintaan: item.jumlah_permintaan - 1,
            }; // replace e.target.value with whatever you want to change it to
            console.info('newArr', newArr);
            setProduct(newArr); // ??
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
                    marginBottom: 20,
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'red',
                }}>
                Darah Detail
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    borderWidth: 2,
                    padding: 5,
                    borderColor: 'grey',
                }}>
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>
                    Product
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 20,
                        borderColor: 'grey',
                    }}>
                    <Text
                        style={{
                            marginRight: 5,
                            marginLeft: 5,
                            marginTop: 0,
                            fontSize: 20,
                            fontWeight: 'bold',

                            textAlign: 'center',
                            color: 'black',
                        }}>
                        Jumlah
                    </Text>
                </View>
            </View>
            <ScrollView>
                <View
                    tyle={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 10,
                        marginTop: 30,
                    }}>
                    {/* ============================ */}

                    {product.map((item, key) => {
                        return (
                            <View
                                key={key}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    borderWidth: 2,
                                    padding: 5,
                                    borderColor: 'grey',
                                    backgroundColor: 'white',
                                }}>
                                <Text
                                    style={{
                                        marginLeft: 10,
                                        fontSize: 11,
                                        fontWeight: 'bold',
                                    }}>
                                    {item.produk}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginRight: 20,
                                    }}>
                                    <TouchableOpacity>
                                        <Icon
                                            style={{color: 'grey'}}
                                            type="FontAwesome5"
                                            name="minus-circle"
                                            onPress={() => minusNum(item, key)}
                                        />
                                    </TouchableOpacity>
                                    <Text
                                        style={{
                                            marginRight: 5,
                                            marginLeft: 5,
                                            marginTop: 0,
                                            fontSize: 12,
                                            fontWeight: 'bold',

                                            textAlign: 'center',
                                            color: 'black',
                                        }}>
                                        {item.jumlah_permintaan}
                                    </Text>
                                    <TouchableOpacity>
                                        <Icon
                                            style={{color: 'grey'}}
                                            type="FontAwesome5"
                                            name="plus-circle"
                                            onPress={() => plusNum(item, key)}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    })}

                    {/* ============================ */}

                    <Formik
                        initialValues={{
                            bb: 0,
                        }}
                        onSubmit={value => {
                            submitData();
                        }}>
                        {({handleChange, handleBlur, handleSubmit, values}) => (
                            <View>
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
                                            borderRadius: 10,
                                            zIndex: 1,
                                        }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={goNextPage.bind(
                                                this,
                                                'PermintaanDarah',
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
                                            borderRadius: 10,
                                            zIndex: 1,
                                        }}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={submitData.bind()}>
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
                </View>
            </ScrollView>
        </Container>
    );
}

export default DetailPermintaan;

