import {Keyboard} from 'react-native';
import {BASE_URL} from './api';

// ========== auth section ==========
export const authRegister = async dataPost => {
    try {
        const res = await fetch(`${BASE_URL}/auth/register`, {
            body: JSON.stringify(dataPost),
            method: 'POST',
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return {
            code: 500,
            type: 'danger',
            message: error.message,
        };
    }
};

export const authLogin = async dataPost => {
    Keyboard.dismiss();
    try {
        const res = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataPost),
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return {
            code: 500,
            type: 'danger',
            message: error.message,
        };
    }
};
// ========== end auth section ==========
