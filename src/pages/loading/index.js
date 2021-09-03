import {View} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const loading = true;

function LoadingStart(props) {
    useEffect(() => {
        function checkToken() {
            async const token = await AsyncStorage.getItem('token');
            if (token) {
                props.navigation.replace('Dashboard');
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
