import React, {useEffect, useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Switch,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from './styles';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';
import Axios from 'axios';
import {API} from '../../config/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';

function KebutuhanDarah(props) {
    const [res, setRes] = useState({
        data: [
            {
                uid: '1',
                waktu: '2021-08-18T07:10:09Z',
                no_form: 'UTD-180821-0018',
                rumah_sakit: 'RSUP Dr Kariadi Semarang',
                produk_darah: 'PRC',
                golongan_darah: 'B',
                rhesus: '+',
                jumlah_permintaan: '1',
                jumlah_terpenuhi: 0,
                keterangan: 'DATA DUMMY',
                ditambahkan: '2021-08-18T13:21:34Z',
                diupdate: '',
            },
        ],
    });
    const [rs, setValueRs] = useState(null);
    const [golda, setValueGolda] = useState(null);
    const [product, setValueProduct] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const CONTENT = {
        tableHead: [
            `INFORMASI KEBUTUHAN DARAH\nTanggal ${res.data[0].waktu.slice(
                0,
                10,
            )} Pukul ${res.data[0].waktu.slice(11, 16)} `,
        ],

        tableData: [
            [
                'NO',
                'RUMAH SAKIT',
                'PRODUK DARAH',
                'GOLONGAN DARAH',
                'RHESUS',
                'JUMLAH',
                'STATUS',
            ],
        ],
    };
    const [list_darah, setListDarah] = useState([]);
    const [list_rs, setRs] = useState([]);
    const [list_product, setProduct] = useState([]);

    useEffect(() => {
        get_kebutuhan_darah();
    }, [rs, product, golda]); // <-- dependency array
    const labelDarah = () => {
        if (list_darah || isFocus2) {
            return (
                <Text style={[styles.label, isFocus2 && {color: 'blue'}]}>
                    Golongan Darah
                </Text>
            );
        }
        return null;
    };

    const labelRs = () => {
        if (list_rs || isFocus1) {
            return (
                <Text style={[styles.label, isFocus1 && {color: 'blue'}]}>
                    Rumah Sakit
                </Text>
            );
        }
        return null;
    };

    const labelProduct = () => {
        if (list_product || isFocus3) {
            return (
                <Text style={[styles.label, isFocus3 && {color: 'blue'}]}>
                    Product
                </Text>
            );
        }
        return null;
    };

    const labelForm = () => {
        if (list_product || isFocus3) {
            return (
                <Text style={[styles.label, isFocus3 && {color: 'blue'}]}>
                    No Form
                </Text>
            );
        }
        return null;
    };

    async function get_kebutuhan_darah() {
        const token = await AsyncStorage.getItem('token');
        const body = {
            rumah_sakit: rs,
            produk: product,
            golda: golda,
        };
        console.log(body);
        // Axios.get(`${API}/kebutuhandarah/list/produk`, {
        Axios.post(`${API}/kebutuhandarah/list/kebutuhandarah`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var KebutuhanDarahList = r.data.data.KebutuhanDarahList;
                var list_darah = [];
                console.log(KebutuhanDarahList[0]);
                console.log(KebutuhanDarahList[1]);
                // console.log(KebutuhanDarahList);
            })
            .catch(err => {
                console.log(err);
            });
    }
    async function get_info() {
        const token = await AsyncStorage.getItem('token');
        Axios.get(`${API}/kebutuhandarah/list/produk`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var products = r.data.data.products;
                var product_list = [{label: 'All', value: ''}];
                for (var i in products) {
                    var d = {};
                    d['label'] = products[i];
                    d['value'] = products[i];
                    product_list.push(d);
                }
                setProduct(product_list);
            })
            .catch(err => {
                console.log(err);
            });

        Axios.get(`${API}/kebutuhandarah/list/golda`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var golda = r.data.data.bloodtypes;
                var golda_list = [{label: 'All', value: ''}];
                for (var i in golda) {
                    var d = {};
                    d['label'] = golda[i];
                    d['value'] = golda[i];
                    golda_list.push(d);
                }
                setListDarah(golda_list);
            })
            .catch(err => {
                console.log(err);
            });

        Axios.get(`${API}/kebutuhandarah/list/rumahsakit`, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var rs = r.data.data.hospitals;
                var rs_list = [{label: 'All', value: ''}];
                for (var i in rs) {
                    var d = {};
                    d['label'] = rs[i];
                    d['value'] = rs[i];
                    rs_list.push(d);
                }
                setRs(rs_list);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        get_kebutuhan_darah();
        get_info();
    }, []);

    const [no_form, setNoFormValue] = useState('');

    const searchbyNoForm = () => {
        console.log('asda');
        async function get_kebutuhan_darah_by_form() {
            const token = await AsyncStorage.getItem('token');
            const body = {
                noform: no_form,
            };
            console.log(body);
            // Axios.get(`${API}/kebutuhandarah/list/produk`, {
            Axios.post(`${API}/kebutuhandarah/list/kebutuhandarah`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
                .then(r => {
                    var KebutuhanDarahList = r.data.data.KebutuhanDarahList;
                    var list_darah = [];
                    console.log(KebutuhanDarahList[0]);
                    console.log(KebutuhanDarahList[1]);
                    // console.log(KebutuhanDarahList);
                })
                .catch(err => {
                    console.log(err);
                });
        }
        get_kebutuhan_darah_by_form();
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    res.data.map((dat, i) =>
        CONTENT.tableData.push([
            i + 1,
            dat.rumah_sakit,
            dat.produk_darah,
            dat.golongan_darah,
            dat.rhesus,
            dat.jumlah_permintaan,
            dat.keterangan,
        ]),
    );

    return (
        <Container>
            <Image
                source={require('../../asset/logoUDD.png')}
                style={{
                    width: 54,
                    height: 60,
                    top: 10,
                    margin: 20,

                    left: 10,
                }}></Image>
            <Image
                source={require('../../asset/logoSehat.png')}
                style={{
                    position: 'absolute',
                    width: 54,
                    height: 60,
                    margin: 20,

                    right: 10,
                    top: 10,
                }}></Image>
            <ScrollView>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 30,
                        marginBottom: 20,
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
                            {CONTENT.tableHead}
                        </Text>
                    </TouchableOpacity>
                </Card>
                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 10,
                        flex: 2,
                    }}>
                    <Text>Show Filter</Text>
                    <Switch
                        trackColor={{false: '#767577', true: '#81b0ff'}}
                        thumbColor={isEnabled ? '#0c77ab' : '#669ab3'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {!isEnabled ? (
                    <View
                        style={{
                            width: '90%',
                            justifyContent: 'center',
                            alignSelf: 'center',
                            marginBottom: 10,
                        }}>
                        {labelForm()}
                        <TextInput
                            style={styles.input}
                            placeholder="UTD-000000-000"
                            placeholderTextColor="#808080"
                            autoCapitalize="characters"
                            selectionColor="#000000"
                            color="black"
                            // onChangeText={setNoFormValue()}
                        ></TextInput>
                        <Card
                            style={{
                                backgroundColor: '#32a875',
                            }}>
                            <TouchableOpacity onPress={searchbyNoForm()}>
                                <Text
                                    style={{
                                        margin: 10,
                                        fontSize: 15,

                                        color: 'white',
                                        textAlign: 'center',
                                    }}>
                                    <AntDesign
                                        style={styles2.icon}
                                        color={'black'}
                                        name="search1"
                                        size={15}
                                    />
                                    {'  Cari'}
                                </Text>
                            </TouchableOpacity>
                        </Card>
                    </View>
                ) : null}
                {isEnabled ? (
                    <View>
                        <View
                            style={{
                                width: '90%',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginBottom: 10,
                            }}>
                            {labelRs()}
                            <Dropdown
                                style={[
                                    styles.dropdown,
                                    isFocus1 && {borderColor: 'blue'},
                                ]}
                                placeholderStyle={styles2.placeholderStyle}
                                selectedTextStyle={styles2.selectedTextStyle}
                                inputSearchStyle={styles2.inputSearchStyle}
                                iconStyle={styles2.iconStyle}
                                data={list_rs}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={
                                    !isFocus1 ? 'Pilih Rumah Sakit' : '...'
                                }
                                searchPlaceholder="Search..."
                                value={rs}
                                onFocus={() => setIsFocus1(true)}
                                onBlur={() => setIsFocus1(false)}
                                onChange={item => {
                                    setValueRs(item.value);
                                    setIsFocus1(false);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles2.icon}
                                        color={isFocus1 ? 'blue' : 'black'}
                                        name="downcircleo"
                                        size={20}
                                    />
                                )}
                            />
                        </View>

                        <View
                            style={{
                                width: '90%',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginBottom: 10,
                            }}>
                            {labelDarah()}
                            <Dropdown
                                style={[
                                    styles.dropdown,
                                    isFocus2 && {borderColor: 'blue'},
                                ]}
                                placeholderStyle={styles2.placeholderStyle}
                                selectedTextStyle={styles2.selectedTextStyle}
                                inputSearchStyle={styles2.inputSearchStyle}
                                iconStyle={styles2.iconStyle}
                                data={list_darah}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={
                                    !isFocus2 ? 'Pilih Golongan Darah' : '...'
                                }
                                searchPlaceholder="Search..."
                                value={golda}
                                onFocus={() => setIsFocus2(true)}
                                onBlur={() => setIsFocus2(false)}
                                onChange={item => {
                                    setValueGolda(item.value);
                                    setIsFocus2(false);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles2.icon}
                                        color={isFocus2 ? 'blue' : 'black'}
                                        name="downcircleo"
                                        size={20}
                                    />
                                )}
                            />
                        </View>

                        <View
                            style={{
                                width: '90%',
                                justifyContent: 'center',
                                alignSelf: 'center',
                                marginBottom: 20,
                            }}>
                            {labelProduct()}
                            <Dropdown
                                style={[
                                    styles.dropdown,
                                    isFocus3 && {borderColor: 'blue'},
                                ]}
                                placeholderStyle={styles2.placeholderStyle}
                                selectedTextStyle={styles2.selectedTextStyle}
                                inputSearchStyle={styles2.inputSearchStyle}
                                iconStyle={styles2.iconStyle}
                                data={list_product}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={
                                    !isFocus3 ? 'Pilih Product' : '...'
                                }
                                searchPlaceholder="Search..."
                                value={product}
                                onFocus={() => setIsFocus3(true)}
                                onBlur={() => setIsFocus3(false)}
                                onChange={item => {
                                    setValueProduct(item.value);
                                    setIsFocus3(false);
                                }}
                                renderLeftIcon={() => (
                                    <AntDesign
                                        style={styles2.icon}
                                        color={isFocus3 ? 'blue' : 'black'}
                                        name="downcircleo"
                                        size={20}
                                    />
                                )}
                            />
                        </View>
                    </View>
                ) : null}
                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 100,
                    }}>
                    {/* <DataTable
                        data={[ 
                            { name: 'Muhammad Rafeh', age: 21, gender: 'male', name1: 'Muhammad Rafeh', age1: 21, gender1: 'male' },
                            { name: 'Muhammad Akif', age: 22, gender: 'male',name1: 'Muhammad Rafeh', age1: 21, gender1: 'male' },
                            { name: 'Muhammad Umar', age: 21, gender: 'male' ,name1: 'Muhammad Rafeh', age1: 21, gender1: 'male'},
                            { name: 'Amna Shakeel', age: 22, gender: 'female' ,name1: 'Muhammad Rafeh', age1: 21, gender1: 'male'},
                            { name: 'Muhammad Ammar', age: 20, gender: 'male' ,name1: 'Muhammad Rafeh', age1: 21, gender1: 'male'},
                            { name: 'Muhammad Moiz', age: 13, gender: 'male',name1: 'Muhammad Rafeh', age1: 21, gender1: 'male' }
                        ]} // list of objects
                        colNames={['name', 'age', 'gender', 'name1' , 'age1', 'gender1']} //List of Strings
                        colSettings={[
                        { name: 'name', type: COL_TYPES.STRING, width: 'auto' }, 
                        { name: 'age', type: COL_TYPES.INT, width: 'auto' }, 
                        {name: 'gender', type: COL_TYPES.STRING, width: 'auto'},
                        { name: 'name1', type: COL_TYPES.STRING, width: 'auto' }, 
                        { name: 'age1', type: COL_TYPES.INT, width: 'auto' }, 
                        {name: 'gender1', type: COL_TYPES.STRING, width: 'auto'}
                    
                    ]}//List of Objects
                        noOfPages={1} //number
                        backgroundColor={'rgba(23,2,4,0.2)'} //Table Background Color
                        headerLabelStyle={{ color: 'grey', fontSize: 12 }} //Text Style Works
                    /> */}
                </View>
            </ScrollView>
            <View
                style={{
                    alignContent: 'center',

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    marginTop: 30,
                    bottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'MenuStock')}>
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
                <View
                    style={{
                        width: '40%',
                        marginLeft: '5%',
                    }}></View>
            </View>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../asset/footer.png')}
                style={{
                    width: '100%',

                    backgroundColor: '#fff',
                    padding: 0,
                    paddingVertical: 90,
                    position: 'absolute',
                    zIndex: -1,
                    bottom: 0,
                }}
                imageStyle={{
                    resizeMode: 'cover',
                    alignSelf: 'flex-end',
                }}></ImageBackground>
        </Container>
    );
}

export default KebutuhanDarah;

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

