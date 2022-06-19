import React, {useState, useEffect} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    FlatList,
    SafeAreaView,
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
import {API} from '../../../config/api';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment'

function RiwayatPermintaan(props) {
    const B = props => (
        <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    );
    const EmptyListMessage = ({}) => {
        return (
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
                            textAlign : 'center'
                        }}
                    >
                        <B>Anda Belum Pernah Melakukan Permintaan Darah Silahkan Ajukan Permintaan</B>
                    </Text>  
                </TouchableOpacity>
            </Card>
            
        </View>
        );
    }
    const ItemView = ({item}) => {
        return (
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
                            color: 'black'
                        }}
                    >
                        <B>Transaksi ID : {item.kuesioner_id}</B>
                    </Text>
                    <Text
                        style={{
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            fontSize: 15,
                            color: 'black'
                        }}
                    >
                        <B>Jenis Donor : {item.jenis_donor.toUpperCase()}</B>
                    </Text>
                    <Text
                        style={{
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            fontSize: 15,
                            color: 'black'
                        }}
                    >
                        <B>Status : Selesai</B>
                    </Text>
                    <Text
                        style={{
                            marginBottom: 10,
                            marginLeft: 20,
                            marginRight: 20,
                            fontSize: 15,
                            color: 'black'
                        }}
                    >
                        <B>Jadwal Donor :{item.jadwal_donor.substring(0,10)}</B>
                    </Text>
                </TouchableOpacity>
            </Card>
        </View>
        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            />
        );
    };

    const ListHeader = () => {
        //View to set in Header
        return (
            <View style={styles.headerFooterStyle}>
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
                        marginTop: 10,
                        fontSize: 35,
                        fontWeight: 'bold',
                    }}>
                    Riwayat
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Permintaan Darah
                </Text>
                <Card
                    style={{
                        backgroundColor: 'red',
                        width: '60%',
                        alignSelf : 'center',
                        marginRight: '2%',
                        marginTop: 20,
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'PermintaanDarah')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,

                                color: 'white',
                                fontWeight: 'bold',
                                textAlign: 'center',
                            }}>
                            Ajukan Permintaan
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>
            
        );
    };

    const ListFooter = () => {
        //View to set in Footer
        return (
            <View
                style={{
                    alignContent: 'center',

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',

                    bottom: 10,
                }}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                        marginTop: 20,
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Dashboard')}>
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
        );
    };
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const [dataSource, setDataSource] = useState([]);
    const [res, setRes] = useState({
        data: [],
    });
    useEffect(() => {
        async function getRiwayat() {
            const token = await AsyncStorage.getItem('token');
            const date_today = moment().utcOffset('+07:00').format('YYYY-MM-DD');
            const ktp = await AsyncStorage.getItem('ktp');
            
            const body = {
                ktp: ktp,
            };
            console.log(body);
            const headers = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            };

            Axios.post(`${API}/riwayat/complete-donor`, body, {
                headers: {
                    Authorization: 'Bearer ' + token,
                    'Content-Type': 'application/json',
                },
            })
                .then(r => {
                    if (r.data.code == 200) {
                        
                        const data = r.data.data
                        const filtered = []
                        if (data != null) {
                            const filtered = data.filter(function(value, index, arr){ 
                                return data[index].jadwal_donor.substring(0,10) == date_today
                            });
                            setDataSource(filtered);
                        }else{
                            setDataSource(data);
                        }
                        setRes(r.data);
                        console.log(r.data);
                    } else {
                        console.log('Error', r.data.message);
                    }
                })
                .catch(err => {
                    console.log(err);
                    Alert.alert("Error","Session Berakhir Silahkan Login Kembali",
                    [{ text: "OK", onPress: () => console.log('ok') }]
                    )
                });
        }
        getRiwayat();
    }, []);

    return (
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={dataSource}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    ListHeaderComponent={ListHeader}
                    ListFooterComponent={ListFooter}
                    renderItem={ItemView}
                    ListEmptyComponent={EmptyListMessage}
                />
            </SafeAreaView>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../asset/footer.png')}
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

const style = StyleSheet.create({
    emptyListStyle: {
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
    },
    itemStyle: {
        padding: 10,
    },
    headerFooterStyle: {
        width: '100%',
        height: 45,
        backgroundColor: '#606070',
    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },
});

export default RiwayatPermintaan;
