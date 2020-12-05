import {
    LOGIN_SUCCESS,
} from '../constants/auth'
import deviceStorage from '../../services/deviceStorage'

const initialState = {
    token: null,
    isAuthenticated: false,
}

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('red',action.data)
            deviceStorage.saveItem('token', action.data.access_token)
            return { ...state, token: action.data.access_token }

        default:
            return state
    }
}