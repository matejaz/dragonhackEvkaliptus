import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_ID = 'userId';
const userInfo = null;

const user = {

    setUserInfo(userInfo) {
        console.log("User info saved")
        return user.userInfo = userInfo;
    },

    getUserInfo(userInfo = USER_INFO) {
        return user.get(userInfo);
    },

    async storeId(value) {
        try {
            await AsyncStorage.setItem(USER_ID, value)
            console.log("User ID saved!")
        } catch (e) {
            // saving error
        }
    },

    async getId() {
        try {
            const value = await AsyncStorage.getItem(USER_ID)
            if (value !== null) {
                console.log("User ID returned!", value)
                return value;
            }
            return "";
        } catch (e) {
            // error reading value
        }
    },

    async clearData() {
        try {
            await AsyncStorage.clear();
        }
        catch (e) {
            // error reading value
        }
    }

}

export default user;