import axios from 'axios';
import { API_URL } from '../../services/constants';
import { LOGIN_SUCCESS, UPDATE_ONBOARDING_FORM } from '../constants/auth';

export const updateOnboardingForm = (data) => async (dispatch, getState) => {
    try {
        const keys = Object.keys(data);
        keys.forEach((item) => {
            console.log('keys', keys, { key: item, value: data[item] });
            dispatch({
                type: UPDATE_ONBOARDING_FORM,
                data: { key: item, value: data[item] },
            });
        });
    } catch (error) {
        throw error;
    }
};

export const facebookLogin = (data) => async (dispatch, getState) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(
            `${API_URL}/accounts/register/facebook/`,
            data,
            { headers },
        );
        console.log('response', response);

        if (response.status == 200) {
            console.log(response);
            return dispatch({ type: LOGIN_SUCCESS, data: response.data });
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const googleLogin = (data) => async (dispatch, getState) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };
        const response = await axios.post(
            `${API_URL}/accounts/register/google/`,
            data,
            { headers },
        );
        console.log('response', response);

        if (response.status == 200) {
            console.log(response);
            return dispatch({ type: LOGIN_SUCCESS, data: response.data });
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
};
