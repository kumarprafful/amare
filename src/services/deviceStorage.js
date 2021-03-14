import AsyncStorage from '@react-native-async-storage/async-storage';

const deviceStorage = {
    async saveItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('Async storage error', error.message);
        }
    },

    async getItem(key) {
        try {
            return await AsyncStorage.getItem(key);
        } catch (error) {
            console.log('Not Found');
        }
    },
};

export default deviceStorage;
