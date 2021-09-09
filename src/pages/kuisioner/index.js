import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    StyleSheet,
    TextInput
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {Container, Card, Input} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
} from 'react-native-table-component';

function Kuisioner(props) {
  const [pekerjaan, setPekerjaan] = React.useState([
    { label: 'Whole Blood (WB) Biasa', value: 'Whole Blood (WB) Biasa', checked: false, num: 0 },
    { label: 'Whole Blood (WB) Segar', value: 'Whole Blood (WB) Segar', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Biasa', value: 'Packed Red Cell (PRC) Biasa', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Leukodepleted', value: 'Packed Red Cell (PRC) Leukodepleted', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Pediatric Leukodepleted', value: 'Packed Red Cell (PRC) Pediatric Leukodepleted', checked: false, num: 0 },
    { label: 'Packed Red Cell (PRC) Pediatric Biasa', value: 'Packed Red Cell (PRC) Pediatric Biasa', checked: false },
    { label: 'Washed Erytrocyte (WE)', value: 'Washed Erytrocyte (WE)', checked: false },
    { label: 'Trombosite Concentrate (TC) Biasa', value: 'Trombosite Concentrate (TC) Biasa', checked: false },
    { label: 'Trombosite Concentrate (TC) Apheresis Leukodepleted', value: 'Trombosite Concentrate (TC) Leukodepleted', checked: false },
    { label: 'Fresh Frozen Plasma (FFP)', value: 'Fresh Frozen Plasma (FFP)', checked: false },
    { label: 'Cryoprecipitate', value: 'Cryoprecipitate', checked: false },
    { label: 'Plasma Konvalesen', value: 'Plasma Konvalesen', checked: false },
  ])
  const [input] = useState({
    pekerjaan : '',
  })
  const pekerjaanHandler = (index) => {
    const newValue = pekerjaan.map((Data, i) => {
     if (i !== index)
       return {
         ...checkbox,
         checked: false,
       }
     if (i === index) {
       const item = {
         ...checkbox,
         checked: !checkbox.checked,
       }
       input.pekerjaan = checkbox.value
       return item
     }
    return checkbox
  })
  setPekerjaan(newValue)
  }
  
  const goNextPage = page => {
    if (page) {
      props.navigation.replace(page)
    }
  }
  const submitData = (value) => {
  }
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
    return (
        <Container>
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
                        marginLeft: 10,
                        marginTop: 10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'red',
                    }}>
                    Kuisioner
                </Text>
                <Text
                    style={{
                        marginLeft: 10,
                        marginTop: -10,
                        marginBottom: 10,
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    Donor Darah Biasa
                </Text>
                <View
                    style={{
                        width: '90%',
                        justifyContent: 'center',
                        alignSelf: 'center',
                    }}>
                    <Table
                        borderStyle={{
                            borderWidth: 2,
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}>
                        <TableWrapper style={styles.wrapper}>
                            <Row
                                data={['Produk', '        Jumlah']}
                                flexArr={[6, 2.40,]}
                                style={styles.row}
                                textStyle={styles.text}
                            />
                            {
                                pekerjaan.map((dat, i) =>(
                                    <Row
                                    data={[dat.number,dat.label,<CheckBox
                                    style={{width:"0%"}}
                                    checked={dat.yes}
                                  onPress={() => 
                                    pekerjaanHandler('yes',i)
                                }
                                />,
                                <CheckBox
                                style={{width:"10%"}}
                                checked={dat.no}
                                  onPress={() => kuesionerHandler('persyaratan',i)}
                                />]}
                                    flexArr={[-1, 5]}
                                    style={styles.head}
                                    textStyle={styles.text}
                                    key={i}
                                />
                                ))   
                            }  
                        </TableWrapper>
                    </Table>
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
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Data')} >
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
                        <TouchableOpacity style={styles.button} onPress={goNextPage.bind(this, 'Berhasil')} >
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

export default Kuisioner;

function RefactorInput(val) {
    var count = 0
    var t = new Date().toISOString().slice(0, 10);
    for (let i=0;i< val.length; i++){
        if (val[i].value !== undefined && val[i].value !== '') {
            count++
        }
    }
    var input = {
        kode_calon_pendonor: '',
        tanggal: t,
        ktp: '',
        nama: '',
        1:val[0].value,
        2:val[1].value,
        3:val[2].value,
        4:val[3].value,
        5:val[4].value,
        6:val[5].value,
        7:val[6].value,
        8:val[7].value,
        9:val[8].value,
        10:val[9].value,
        11:val[10].value,
        12:val[11].value,
        13:val[12].value,
        14:val[13].value,
        15:val[14].value,
        16:val[15].value,
        17:val[16].value,
        18:val[17].value,
        19:val[18].value,
        20:val[19].value,
        21:val[20].value,
        22:val[21].value,
        23:val[22].value,
        24:val[23].value,
        25:val[24].value,
        26:val[25].value,
        27:val[26].value,
        28:val[27].value,
        29:val[28].value,
        30:val[29].value,
        31:val[30].value,
        32:val[31].value,
        33:val[32].value,
        34:val[33].value,
        35:val[34].value,
        36:val[35].value,
        37:val[36].value,
        38:val[37].value,
        39:val[38].value,
        40:val[39].value,
        41:val[40].value,
        42:val[41].value,
        43:val[42].value,
        count: count,
    }
    return input
}