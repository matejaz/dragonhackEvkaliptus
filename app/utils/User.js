const USER_INFO = 'userInfo';

const user = {

    setUserInfo(value = '', userInfo = USER_INFO) {
        return user.set(userInfo, value);
    },

    getUserInfo(userInfo = USER_INFO) {
        return user.get(userInfo);
    },

    set(key, value) {
        //Save here ?
    },

    get(key) {
        //Fetch here?
    },
}

export default user;