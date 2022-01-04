import React, {useState} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

function Alur02(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    const B = props => (
        <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
    );
    return (
        <Container>
            <Image
                source={require('../../asset/logoUDD.png')}
                style={styles.logoUDD}
            />
            <Image
                source={require('../../asset/logoSehat.png')}
                style={styles.logoSehat}
            />

            <ScrollView>
                <Text style={styles.headerText1}>Alur Donor</Text>
                <Text style={styles.headerText2}>Darah Biasa</Text>

                <View style={styles.viewContainer}>
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pendaftaran Donor
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{marginTop: 0, alignSelf: 'center'}}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Verifikasi Data Donor
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pemeriksaan Hb dan golongan darah
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCards2}>
                                <B>Pemeriksaan Kesehatan</B>
                                {'\n'}a. Pengukuran tekanan darah{'\n'}b.
                                Pengukuran berat badan
                                {'\n'}c. Pemeriksaan nadi{'\n'}d. pemeriksaan
                                suhu tubuh{'\n'}e. Wawancara riwayat kesehatan
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardRed}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Pengambilan darah donor
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Icon
                        name="arrow-down"
                        type="font-awesome"
                        color="#007dc3"
                        size={30}
                        style={{
                            marginTop: 0,
                            alignSelf: 'center',
                        }}
                    />
                    <Card style={styles.flowCardMarroon}>
                        <TouchableOpacity>
                            <Text style={styles.textInCard}>
                                Refreshment area
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    <Card style={styles.flowCardPeach}>
                        <TouchableOpacity>
                            <Text
                                style={{
                                    marginTop: 20,
                                    marginLeft: 20,
                                    marginRight: 20,
                                    fontSize: 15,
                                    color: 'black',
                                }}>
                                Pendonor setelah mendonorkan darah dapat
                                beristirahat sebentar sambil minum air putih
                                atau makan makanan kecil{'\n'}
                                {'\n'}
                                <B>Tips setelah donor :</B>
                            </Text>

                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>a.</Text>

                                <Text style={styles.textInCards4}>
                                    Membatasi aktivitas fisik Anda selama
                                    setidaknya 5 jam setelah donor
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>b.</Text>

                                <Text style={styles.textInCards4}>
                                    Melepaskan plester setidaknya 4-5 jam
                                    setelah Anda selesai donor Darah
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>c.</Text>

                                <Text style={styles.textInCards4}>
                                    Menghindari panas
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>d.</Text>

                                <Text style={styles.textInCards4}>
                                    Menghindari untuk berdiri dalam waktu yang
                                    lama
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>e.</Text>

                                <Text style={styles.textInCards4}>
                                    Jika Anda merokok, sebaiknya Anda tidak
                                    merokok selama 2 jam setelah Donor
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>f.</Text>

                                <Text style={styles.textInCards4}>
                                    Jika Anda minum alkohol, sebaiknya Anda
                                    tidak minum alkohol sampai 24 jam setelah
                                    donor
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                }}>
                                <Text style={styles.textInCards5}>g.</Text>

                                <Text style={styles.textInCards4}>
                                    Minum banyak cairan untuk menggantikan
                                    cairan tubuh Anda yang hilang
                                </Text>
                            </View>
                            <View
                                style={{
                                    marginRight: 20,
                                    marginLeft: 20,
                                    flexDirection: 'row',
                                    marginBottom: 20,
                                }}>
                                <Text style={styles.textInCards5}>h.</Text>

                                <Text style={styles.textInCards4}>
                                    Makan makanan yang mengandung: zat besi
                                    tinggi, vitamin C, asamfolat, riboflavin
                                    (vitamin B2) dan vitamin B6
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Card>

                    <View style={styles.viewBackForward2}>
                        <Card
                            style={{
                                backgroundColor: '#000',
                                width: '40%',
                                marginRight: '2%',
                            }}>
                            <TouchableOpacity
                                onPress={goNextPage.bind(this, 'Alur01')}>
                                <Text style={styles.textInCard}>Kembali</Text>
                            </TouchableOpacity>
                        </Card>
                        <View
                            style={{
                                width: '50%',
                                marginLeft: '5%',
                            }}
                        />
                    </View>
                </View>
            </ScrollView>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../asset/footer.png')}
                style={styles.imageBackgroundStyle}
                imageStyle={{resizeMode: 'cover', alignSelf: 'flex-end'}}
            />
        </Container>
    );
}

export default Alur02;
