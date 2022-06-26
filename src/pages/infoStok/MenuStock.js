import React, {useState} from 'react';
import {
    Alert,
    ImageBackground,
    Image,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {Container, Card} from 'native-base';
import {
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import styles from './styles';

function MenuStock(props) {
    const goNextPage = page => {
        if (page) {
            if (page == 'KebutuhanDarah') {
                props.navigation.navigate(page);
            } else {
                props.navigation.navigate(page);
            }
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

                <View
                    style={{
                        alignContent: 'center',

                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        marginTop: '15%',
                    }}>
                    <Card
                        style={{
                            backgroundColor: '#fff',
                            width: 130,
                            height: 150,

                            marginRight: '5%',
                        }}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'KebutuhanDarah')}>
                            <Icon
                                name="plus"
                                type="font-awesome"
                                color="red"
                                size={50}
                                style={{
                                    marginTop: 25,

                                    width: 55,
                                    height: 50,
                                    alignSelf: 'center',
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 10,
                                    marginBottom: 10,
                                    fontSize: 20,
                                    textAlign: 'center',

                                    color: 'black',
                                    fontWeight: 'bold',
                                }}>
                                Kebutuhan Darah
                            </Text>
                        </TouchableOpacity>
                    </Card>
                    <Card
                        style={{
                            backgroundColor: '#fff',
                            width: 130,
                            height: 150,
                            marginLeft: '5%',
                        }}>
                        <TouchableOpacity
                            onPress={goNextPage.bind(this, 'StockDarah')}>
                            <Icon
                                name="tint"
                                type="font-awesome"
                                color="red"
                                size={50}
                                style={{
                                    marginTop: 25,

                                    width: 50,
                                    height: 50,
                                    alignSelf: 'center',
                                }}
                            />
                            <Text
                                style={{
                                    marginTop: 10,
                                    fontSize: 20,
                                    textAlign: 'center',

                                    color: 'black',
                                    fontWeight: 'bold',
                                }}>
                                Stok {'\n'}Darah
                            </Text>
                        </TouchableOpacity>
                    </Card>
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
                        onPress={goNextPage.bind(this, 'Dashboard')}>
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

export default MenuStock;

