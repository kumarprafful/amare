import { LOGIN_SUCCESS, UPDATE_ONBOARDING_FORM } from '../constants/auth';
import deviceStorage from '../../services/deviceStorage';

const initialState = {
    token: null,
    isAuthenticated: false,
    onboardingForm: {
        name: '',
        phone: '',
        email: '',
        dob: '',
    },
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            deviceStorage.saveItem('token', action.data.access_token);
            return {
                ...state,
                token: action.data.access_token,
                isAuthenticated: true,
            };

        case UPDATE_ONBOARDING_FORM:
            const { onboardingForm } = state;

            return {
                ...state,
                onboardingForm: {
                    ...onboardingForm,
                    [action.data.key]: action.data.value,
                },
            };

        default:
            return state;
    }
}
