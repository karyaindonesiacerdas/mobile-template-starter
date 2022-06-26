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
import AwesomeLoading from 'react-native-awesome-loading';
function KebutuhanDarah(props) {
    const [loading, setLoading] = useState(false);
    const [res, setRes] = useState([]);
    const [rs, setValueRs] = useState(null);
    const [golda, setValueGolda] = useState(null);
    const [product, setValueProduct] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [nopage, setNoPage] = useState();
    const [textFilter, setTextFilter] = useState('Search Use No Form');
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        setNoFormValue('');
        if (!isEnabled) {
            setTextFilter('Search Use No Form');
        } else {
            setTextFilter('Filter By');
        }
        // setValueRs(null);
        // setValueGolda(null);
        // setValueProduct(null);
    };

    var today = new Date();
    var date =
        today.getDate() +
        '-' +
        (today.getMonth() + 1) +
        '-' +
        today.getFullYear() +
        '  Pukul ' +
        today.getHours() +
        ':' +
        today.getMinutes() +
        ':' +
        today.getSeconds();

    const CONTENT = {
        tableHead: [`INFORMASI KEBUTUHAN DARAH\nTanggal ${date} `],

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
    const [button, setButton] = useState();

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

    const resetInput = () => {
        setValueRs(null);
        setValueGolda(null);
        setValueProduct(null);
    };

    async function get_kebutuhan_darah() {
        const token = await AsyncStorage.getItem('token');
        const body = {
            rumah_sakit: rs,
            produk: product,
            golda: golda,
        };
        setLoading(true);
        Axios.post(`${API}/kebutuhandarah/list/kebutuhandarah`, body, {
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json',
            },
        })
            .then(r => {
                var KebutuhanDarahList = r.data.data.KebutuhanDarahList;
                var list_darah = [];
                if (!r.data.data.KebutuhanDarahList) {
                    Alert.alert('Gagal', 'Data Tidak Ditemukan', [
                        {
                            text: 'Coba Lagi',
                            onPress: () => resetInput(),
                        },
                    ]);
                } else {
                    var check_len = r.data.data.KebutuhanDarahList.length;
                    if (check_len > 100) {
                        check_len = 100;
                    }

                    var nopage = Math.ceil(check_len / 10);
                    setNoPage(nopage);
                    for (var i = 0; i < check_len; i++) {
                        var kebutuhan = {};
                        kebutuhan['No Form'] = KebutuhanDarahList[i]['noform'];
                        kebutuhan['Rumah Sakit'] =
                            KebutuhanDarahList[i]['rumah_sakit'];
                        var golda = KebutuhanDarahList[i]['golda'];
                        var rhesus = KebutuhanDarahList[i]['rhesus'];
                        var product = KebutuhanDarahList[i]['produk'];
                        kebutuhan['Gol. Darah'] = golda + rhesus;
                        kebutuhan['Product'] = product;
                        kebutuhan['doHighlight'] = 'rgba(243,255,255, 0.65)';
                        list_darah.push(kebutuhan);
                    }
                    setRes(list_darah);
                    setLoading(false);
                }
            })
            .catch(err => {
                setLoading(false);
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
        get_info();
    }, []);

    const [no_form, setNoFormValue] = useState('');

    const searchbyNoForm = () => {
        async function get_kebutuhan_darah_by_form() {
            const token = await AsyncStorage.getItem('token');
            const body = {
                noform: no_form,
            };
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
                    if (!r.data.data.KebutuhanDarahList) {
                        Alert.alert('Gagal', 'Data Tidak Ditemukan', [
                            {
                                text: 'Coba Lagi',
                                onPress: () => resetInput(),
                            },
                        ]);
                    } else {
                        var check_len = r.data.data.KebutuhanDarahList.length;
                        if (check_len > 100) {
                            check_len = 100;
                        }

                        var nopage = Math.ceil(check_len / 10);
                        setNoPage(nopage);
                        for (var i = 0; i < check_len; i++) {
                            var kebutuhan = {};
                            kebutuhan['No Form'] =
                                KebutuhanDarahList[i]['noform'];
                            kebutuhan['Rumah Sakit'] =
                                KebutuhanDarahList[i]['rumah_sakit'];
                            var golda = KebutuhanDarahList[i]['golda'];
                            var rhesus = KebutuhanDarahList[i]['rhesus'];
                            var product = KebutuhanDarahList[i]['produk'];
                            kebutuhan['Gol. Darah'] = golda + rhesus;
                            kebutuhan['Product'] = product;
                            kebutuhan['doHighlight'] =
                                'rgba(243,255,255, 0.65)';
                            list_darah.push(kebutuhan);
                        }
                        setRes(list_darah);
                        setLoading(false);
                    }
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }
        if (no_form.length < 7) {
            Alert.alert('Gagal', 'Input Minimal 7 Karakter', [
                {
                    text: 'Coba Lagi',
                    onPress: () => console.log('Ok'),
                },
            ]);
        } else {
            get_kebutuhan_darah_by_form();
        }
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };

    const goToDetail = row => {
        props.navigation.navigate('KebutuhanDarahDetail', {
            noform: row['No Form'],
        });
    };

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
            <AwesomeLoading
                indicatorId={18}
                size={50}
                isActive={loading}
                text="loading.."
            />
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
                    <Text>{textFilter}</Text>
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
                            onChangeText={text =>
                                setNoFormValue(text)
                            }></TextInput>
                        <Card
                            style={{
                                backgroundColor: '#32a875',
                            }}>
                            <TouchableOpacity onPress={searchbyNoForm.bind()}>
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
                        width: '95%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginBottom: 100,
                        fontSize: 10,
                    }}>
                    <DataTable
                        onRowSelect={row => {
                            goToDetail(row);
                        }}
                        data={res} // list of objects
                        colNames={[
                            'No Form',
                            'Rumah Sakit',
                            'Gol. Darah',
                            'Product',
                            'Detail',
                        ]} //List of Strings
                        colSettings={[
                            {
                                name: 'No Form',
                                type: COL_TYPES.STRING,
                                width: '25%',
                            },
                            {
                                name: 'Rumah Sakit',
                                type: COL_TYPES.STRING,
                                width: '30%',
                            },
                            {
                                name: 'Gol. Darah',
                                width: '15%',
                                type: COL_TYPES.STRING,
                            },
                            {
                                name: 'Product',
                                width: '15%',
                                type: COL_TYPES.STRING,
                            },
                            {
                                name: 'Detail',
                                type: COL_TYPES.CHECK_BOX,
                                width: '15%',
                            },
                        ]} //List of Objects
                        noOfPages={nopage} //number
                        backgroundColor={'rgba(112,40,43,0.3)'} //Table Background Color
                        headerLabelStyle={{color: 'black', fontSize: 12}} //Text Style Works
                        footerLabelStyle={{color: 'black', fontSize: 12}} //Text Style Works
                    />
                </View>
            </ScrollView>
            <View
                style={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    margin: 30,
                    bottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#6e6562',
                        borderRadius: 10,
                        zIndex: 1,
                        marginTop: 10,
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'MenuStock')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 14,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
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

