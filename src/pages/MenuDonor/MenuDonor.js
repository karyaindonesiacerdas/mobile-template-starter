import React, {Component, useEffect, useState} from 'react';
import {Alert, ImageBackground, Image, Text, View} from 'react-native';
import {Container, Card} from 'native-base';
import {TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import Bg from '../../image/baground3.jpeg';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MenuDonor(props) {
    useEffect(() => {
        async function checkData() {
            const ktp_ls = await AsyncStorage.getItem('ktp');
            const alamat = await AsyncStorage.getItem('alamat');
            
            if (!ktp_ls || !alamat) {
                Alert.alert("Warning","Lengkapi Data Profile !",
                [{ text: "OK", onPress: () => props.navigation.navigate('EditProfil') }]
                )    
            }
        }
        checkData();
    }, []);
    const goNextPage = page => {
        if (page) {
            props.navigation.navigate(page);
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
                    marginLeft: 20,
                    marginTop: 50,
                    fontSize: 35,
                    fontWeight: 'bold',
                    color: 'black',
                }}>
                Persyaratan & Pendaftaran
            </Text>

            <View
                style={{
                    marginTop: 80,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <Card style={styles.cardStyle}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goNextPage.bind(this, 'persyaratanBiasa')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            Donor Darah{'\n'} Biasa
                        </Text>
                    </TouchableOpacity>
                </Card>
                <Card style={styles.cardStyle}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goNextPage.bind(this, 'persyaratanKonvalesen')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white',
                            }}>
                            Donor Plasma{'\n'} Konvalesen
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>
            <View
                style={{
                    marginTop: 30,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <Card style={styles.cardStyle}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={goNextPage.bind(this, 'PermintaanDarah')}>
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 15,
                                textAlign: 'center',
                                color: 'white',
                                fontWeight: 'bold',
                            }}>
                            Permintaan {'\n'} Darah
                        </Text>
                    </TouchableOpacity>
                </Card>
            </View>

            <Card
                style={{
                    backgroundColor: '#000',

                    marginTop: 40,
                    width: '86%',
                    marginLeft: '7%',
                }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={goNextPage.bind(this, 'Kegiatan')}>
                    <Text
                        style={{
                            margin: 10,
                            fontSize: 15,
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                        Mengadakan Kegiatan Donor Darah
                    </Text>
                </TouchableOpacity>
            </Card>
            <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignContent: 'center',
                                    }}>
                                    <Card style={styles.cardStyle}>
                                        <TouchableOpacity
                                            style={styles.button}
                                            onPress={goNextPage.bind(
                                                this,
                                                'Dashboard',
                                            )}>
                                            <Text
                                                style={{
                                                    margin: 10,
                                                    fontSize: 15,
                                                    textAlign: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'white',
                                                }}>
                                                Kembali
                                            </Text>
                                        </TouchableOpacity>
                                    </Card>
                                </View>
        </Container>
    );
}

export default MenuDonor;
