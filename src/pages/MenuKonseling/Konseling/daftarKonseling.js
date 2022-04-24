import React, {Component} from 'react';
import {
    ImageBackground,
    Image,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';
import {Container, Card} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './../styles';


function DaftarKonseling(props) {
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
        }
    };
    return (
        <Container>
            <Image
                source={require('../../../asset/logoUDD.png')}
                style={styles.logoUDD}></Image>
            <Image
                source={require('../../../asset/logoSehat.png')}
                style={styles.logoSehat}></Image>
            <ScrollView>
                <Text style={styles.headerText1}>Alur</Text>
                <Text style={styles.headerText2}>Donor Darah</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: 20,
                    }}>
                    <Card style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'alurDonorBiasa')}>
                            <Text style={styles.textInCard}>Biasa</Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'alurDonorKonvalesen')}>
                            <Text style={styles.textInCard}>
                                Plasma{'\n'} Konvalesen
                            </Text>
                        </TouchableOpacity>
                    </Card>
                </View>

                <Text
                    style={{
                        marginLeft: 30,
                        marginTop: 20,
                        fontSize: 15,
                        fontWeight: 'bold',
                        color: 'black',
                    }}>
                    PERMINTAAN DARAH
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}>
                    <Card style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'permintaanDarah')}>
                            <Text style={styles.textInCard}>
                                Rumah{'\n'} Sakit
                            </Text>
                        </TouchableOpacity>
                    </Card>

                    <Card style={styles.cardStyle}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'permintaanDarah')}>
                            <Text style={styles.textInCard}>Mandiri</Text>
                        </TouchableOpacity>
                    </Card>
                </View>

                <Card
                    style={{
                        backgroundColor: '#000',
                        marginTop: 20,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    <TouchableOpacity onPress={goNextPage.bind(this, 'pengadaanDonor')}>
                        <Text style={styles.textInCard}>
                            Mengadakan Kegiatan Donor Darah
                        </Text>
                    </TouchableOpacity>
                </Card>

                <Card
                    style={{
                        backgroundColor: '#000',
                        marginTop: 5,
                        width: '86%',
                        marginLeft: '7%',
                    }}>
                    <TouchableOpacity onPress={goNextPage.bind(this, 'konselingDonor')}>
                        <Text style={styles.textInCard}>
                            Konseling Donor Darah
                        </Text>
                    </TouchableOpacity>
                </Card>
            </ScrollView>

            <View style={styles.viewBackForward}>
                <Card
                    style={{
                        backgroundColor: '#000',
                        width: '40%',
                        marginRight: '2%',
                    }}>
                    <TouchableOpacity
                        onPress={goNextPage.bind(this, 'Dashboard')}>
                        <Text style={styles.textInCard}>Kembali</Text>
                    </TouchableOpacity>
                </Card>
                <View style={{width: '40%', marginLeft: '5%'}}></View>
            </View>

            <ImageBackground
                // resizeMethod={'auto'}
                source={require('../../../asset/footer.png')}
                style={styles.imageBackgroundStyle}
                imageStyle={{
                    resizeMode: 'cover',
                    alignSelf: 'flex-end',
                }}></ImageBackground>
        </Container>
    );
}

export default DaftarKonseling;
