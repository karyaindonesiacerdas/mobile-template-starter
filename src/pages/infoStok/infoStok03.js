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
import {STOK_DARAH} from '../../config/api';

function InfoStok03(props) {
    const [CONTENT, setCONTENT] = useState({
        tableHead: ['Informasi kebutuhan Darah\nTanggal ..... Pukul ... '],
        tableTitle2: ['Produk'],
        tableData2: [['Golongan Darah'], ['A', 'B', 'O', 'AB']],
    });
    const [tableData, setTableData] = useState([
        ['WB', '0', '0', '0', '0', '0'],
        ['PRC', '0', '0', '0', '0', '0'],
        ['TC', '0', '0', '0', '0', '0'],
        ['FFP', '0', '0', '0', '0', '0'],
        ['AHF', '0', '0', '0', '0', '0'],
        ['LD', '0', '0', '0', '0', '0'],
        ['LR', '0', '0', '0', '0', '0'],
        ['PK', '0', '0', '0', '0', '0'],
    ]);
    useEffect(() => {
        const url = STOK_DARAH;
        const headers = {
            'Content-Type': 'application/json',
        };
        const body = {
            waktu: '',
        };
        Axios.post(
            `${STOK_DARAH}/simaba`,
            JSON.stringify(body),
            headers,
        )
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
                            'WB',
                            res.data.data[0].wb_a,
                            res.data.data[0].wb_b,
                            res.data.data[0].wb_ab,
                            res.data.data[0].wb_o,
                            res.data.data[0].subtotal_wb,
                        ],
                        [
                            'PRC',
                            res.data.data[0].prc_a,
                            res.data.data[0].prc_b,
                            res.data.data[0].prc_ab,
                            res.data.data[0].prc_o,
                            res.data.data[0].subtotal_prc,
                        ],
                        [
                            'TC',
                            res.data.data[0].tc_a,
                            res.data.data[0].tc_b,
                            res.data.data[0].tc_ab,
                            res.data.data[0].tc_o,
                            res.data.data[0].subtotal_tc,
                        ],
                        [
                            'FFP',
                            res.data.data[0].ffp_a,
                            res.data.data[0].ffp_b,
                            res.data.data[0].ffp_ab,
                            res.data.data[0].ffp_o,
                            res.data.data[0].subtotal_ffp,
                        ],
                        [
                            'AHF',
                            res.data.data[0].ahf_a,
                            res.data.data[0].ahf_b,
                            res.data.data[0].ahf_ab,
                            res.data.data[0].ahf_o,
                            res.data.data[0].subtotal_ahf,
                        ],
                        [
                            'LD',
                            res.data.data[0].ld_a,
                            res.data.data[0].ld_b,
                            res.data.data[0].ld_ab,
                            res.data.data[0].ld_o,
                            res.data.data[0].subtotal_ld,
                        ],
                        [
                            'LR',
                            res.data.data[0].lr_a,
                            res.data.data[0].lr_b,
                            res.data.data[0].lr_ab,
                            res.data.data[0].lr_o,
                            res.data.data[0].subtotal_lr,
                        ],
                        [
                            'PK',
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
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 25,
                        fontSize: 35,
                        fontWeight: 'bold',
                    }}>
                    Informasi Stok &
                </Text>
                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: -10,
                        fontSize: 35,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Kebutuhan Darah
                </Text>

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
                            STOK DARAH
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
                        }}>
                        <Row
                            data={CONTENT.tableHead}
                            flexArr={[1, 2, 1, 1]}
                            style={styles.head}
                            textStyle={styles.textHead}
                        />
                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.tableTitle2}
                                style={styles.title}
                                textStyle={styles.text}
                            />
                            <Rows
                                data={CONTENT.tableData2}
                                flexArr={[1, 1, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                        </TableWrapper>

                        <TableWrapper style={styles.wrapper}>
                            <Col
                                data={CONTENT.tableTitle}
                                style={styles.title}
                                flexArr={[2, 1, 1, 1, 1]}
                                textStyle={styles.text}
                            />
                            <Rows
                                data={tableData}
                                flexArr={[1, 1, 1, 1]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                        </TableWrapper>
                    </Table>
                    <Text>Keterangan :</Text>
                    <Text>*WB = Whole Blood</Text>
                    <Text>*PRC = Packed Red Cell</Text>
                    <Text>*TC = Thrombocyte Concentrate</Text>
                    <Text>*FFP = Fresh Frozen Plasma</Text>
                    <Text>*AHF = AHF</Text>
                    <Text>*LD = Leucodepleted</Text>
                    <Text>*LR = Leucoreduce</Text>
                    <Text>*PK = Plasma Konvalesen</Text>
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
                        onPress={goNextPage.bind(this, 'InfoStok01')}>
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

export default InfoStok03;
