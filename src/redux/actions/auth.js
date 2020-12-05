import axios from 'axios'
import { API_URL } from '../../services/constants'
import { LOGIN_SUCCESS } from '../constants/auth'


export const facebookLogin = (data) => async (dispatch, getState) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        }
        console.log('headers', headers, `${API_URL}/accounts/register/facebook/`)
        const response = await axios.post(
            `${API_URL}/accounts/register/facebook/`,
            data,
            { headers }
        )
        console.log('response', response)

        if (response.status == 200) {
            console.log(response)
            return dispatch({ type: LOGIN_SUCCESS, data: response.data })
        }
    }
    catch (error) {
        console.log(error)
        throw error
    }

}