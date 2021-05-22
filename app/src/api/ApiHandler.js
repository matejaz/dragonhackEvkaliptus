import Axios from './Axios';
import Endpoints from './Endpoints.js';

function getUsers() {
    console.log("Fetching all users . . .")
    try {
        const response = Axios.get(Endpoints.getUsers, {});
        return response;
    } catch (err) {
        console.log('An error occurred:', err);
        return this.createError(err);
    }
}

function createUser(sex) {
    console.log("Creating user . . .")
    try {
        const response = Axios.post(Endpoints.createUser, {
            sex: sex,
        });
        return response;
    } catch (err) {
        console.log('An error occurred:', err);
        return this.createError(err);
    }
}

function getUserById(id) {
    console.log("Fetching user by id . . .")
    try {
        const response = Axios.get(Endpoints.getUserById + id, {
            id: id,
        });
        return response;
    } catch (err) {
        console.log('An error occurred:', err);
        return this.createError(err);
    }
}

function updateUserById(id, name) {
    console.log("Updating user by id . . .")
    try {
        const response = Axios.put(Endpoints.updateUserById + id, {
            name: name,
        });
        return response;
    } catch (err) {
        console.log('An error occurred:', err);
        return this.createError(err);
    }
}

function getRandomPose() {
    try {
        const response = Axios.get(Endpoints.getRandomPose);
        return response;
    } catch (err) {
        console.log('An error occurred:', err);
        return this.createError(err);
    }
}

export {
    getUsers,
    createUser,
    getUserById,
    updateUserById,
    getRandomPose
}
