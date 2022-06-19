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

function StockDarah(props) {
    const [CONTENT, setCONTENT] = useState({
        tableHead: ['Informasi kebutuhan Darah\nTanggal ..... Pukul ... '],
        product: ['WB', 'PRC', 'TC', 'FFP', 'AHF', 'LD', 'LR', 'PK'],
        tableTitle2: ['Produk'],
        tableData2: [['Golongan Darah'], ['A', 'B', 'O', 'AB', 'TOTAL']],
    });
    const [product, setProduct] = useState([
        'WB',
        'PRC',
        'TC',
        'FFP',
        'AHF',
        'LD',
        'LR',
        'PK',
    ]);
    const [tableData, setTableData] = useState([
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
        ['0', '0', '0', '0', '0'],
    ]);
    useEffect(() => {
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            waktu: '',
        };
        Axios.post(`${API}/stok-darah`, JSON.stringify(body), headers)
            .then(res => {
                if (res.data.code == 200) {
                    CONTENT.tableHead = [
                        `Informasi kebutuhan Darah\nTanggal ${res.data.data[0].waktu.slice(
                            0,
                            10,
                        )} Pukul ${res.data.data[0].waktu.slice(11, 16)} `,
                    ];
                    setTableData([
                        [
                            res.data.data[0].wb_a,
                            res.data.data[0].wb_b,
                            res.data.data[0].wb_ab,
                            res.data.data[0].wb_o,
                            res.data.data[0].subtotal_wb,
                        ],
                        [
                            res.data.data[0].prc_a,
                            res.data.data[0].prc_b,
                            res.data.data[0].prc_ab,
                            res.data.data[0].prc_o,
                            res.data.data[0].subtotal_prc,
                        ],
                        [
                            res.data.data[0].tc_a,
                            res.data.data[0].tc_b,
                            res.data.data[0].tc_ab,
                            res.data.data[0].tc_o,
                            res.data.data[0].subtotal_tc,
                        ],
                        [
                            res.data.data[0].ffp_a,
                            res.data.data[0].ffp_b,
                            res.data.data[0].ffp_ab,
                            res.data.data[0].ffp_o,
                            res.data.data[0].subtotal_ffp,
                        ],
                        [
                            res.data.data[0].ahf_a,
                            res.data.data[0].ahf_b,
                            res.data.data[0].ahf_ab,
                            res.data.data[0].ahf_o,
                            res.data.data[0].subtotal_ahf,
                        ],
                        [
                            res.data.data[0].ld_a,
                            res.data.data[0].ld_b,
                            res.data.data[0].ld_ab,
                            res.data.data[0].ld_o,
                            res.data.data[0].subtotal_ld,
                        ],
                        [
                            res.data.data[0].lr_a,
                            res.data.data[0].lr_b,
                            res.data.data[0].lr_ab,
                            res.data.data[0].lr_o,
                            res.data.data[0].subtotal_lr,
                        ],
                        [
                            res.data.data[0].pk_a,
                            res.data.data[0].pk_b,
                            res.data.data[0].pk_ab,
                            res.data.data[0].pk_o,
                            res.data.data[0].subtotal_pk,
                        ],
                    ]);
                } else {
                    console.log('Error', res.data.message);
                }
            })
            .catch(err => {
                console.log('err : ', err);
            });
    }, []);
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
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
            <ScrollView>
                <Card
                    style={{
                        backgroundColor: '#70282b',
                        width: '90%',
                        alignSelf: 'center',
                        marginTop: 30,
                        marginBottom: 30,
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
                        alignSelf: 'center',
                        marginBottom: 100,
                    }}>
                    <Table
                        borderStyle={{
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignContent: 'center',
                            marginBottom: 30,
                        }}>
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.tableTitle2}
                                style={styles.title}
                                textStyle={styles.textTitle}
                            />
                            <Rows
                                data={CONTENT.tableData2}
                                flexArr={[1, 1, 1, 1]}
                                style={styles.title}
                                textStyle={styles.textTitle}
                            />
                        </TableWrapper>

                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.product}
                                style={styles.title}
                                flexArr={[2, 1, 1, 1, 1]}
                                textStyle={styles.textTitle}
                            />
                            <Rows
                                data={tableData}
                                flexArr={[1, 1, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                        </TableWrapper>
                    </Table>
                    <Text style={{marginLeft: 20}}></Text>
                    <Text style={{marginLeft: 10}}>Keterangan :</Text>
                    <Text style={{marginLeft: 10}}>*WB = Whole Blood</Text>
                    <Text style={{marginLeft: 10}}>*PRC = Packed Red Cell</Text>
                    <Text style={{marginLeft: 10}}>
                        *TC = Thrombocyte Concentrate
                    </Text>
                    <Text style={{marginLeft: 10}}>
                        *FFP = Fresh Frozen Plasma
                    </Text>
                    <Text style={{marginLeft: 10}}>*AHF = AHF</Text>
                    <Text style={{marginLeft: 10}}>*LD = Leucodepleted</Text>
                    <Text style={{marginLeft: 10}}>*LR = Leucoreduce</Text>
                    <Text style={{marginLeft: 10}}>
                        *PK = Plasma Konvalesen
                    </Text>
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

export default StockDarah;

