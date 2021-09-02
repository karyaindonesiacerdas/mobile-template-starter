import {View} from 'native-base';
import React from 'react';
import {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import SyncStorage from 'sync-storage';

const loading = true;

function LoadingStart(props) {
    useEffect(() => {
        function checkToken() {
            const token = SyncStorage.getItem('token');
            if (token) {
                props.navigation.replace('Home');
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
