import AsyncStorage from "@react-native-async-storage/async-storage"

const deviceStorage = {
    async saveItem(key, value){
        try{
            await AsyncStorage.setItem(key, value)
        }
        catch(error){
            console.log('Async storage error', error.message)
        }
    }
}

export default deviceStorage