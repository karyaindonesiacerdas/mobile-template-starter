import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';

const loading = true;

function LoadingStart(props) {
    useEffect(() => {
        async function checkToken() {
            const token = await AsyncStorage.getItem('token');
            if (token) {
                props.navigation.replace('HomeApp');
            } else {
                props.navigation.replace('Login');
            }
        }
        checkToken();
    }, []);

    return (
        loading && (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    padding: 10,
                    position: 'relative',
                }}>
                <ActivityIndicator size="small" color="red" />
            </View>
        )
    );
}

export default LoadingStart;
