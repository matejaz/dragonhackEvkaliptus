import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUser } from "../../api/ApiHandler.js";
import User from "../../../utils/User.js";

import styles from "../../../assets/style/theme.scss"
import buttonStyles from "../../../assets/style/buttons.scss"
import maleImage from "../../../assets/media/male.png"
import femaleImage from "../../../assets/media/female.png"
import line from "../../../assets/media/line.png"

export default SexPick = () => {
    const navigation = useNavigation();

    function genderButtonPressed(gender) {
        const newUser = createUser(gender);
        newUser.then((resp) => {
            if (resp.status === 201) {
                console.log(resp.data)
                User.setUserInfo(resp.data);
                User.storeId(resp.data._id)
            }
            else {
                console.log("Creating new user failed", resp.status, resp.data)
            }
        })
        navigation.navigate('HomeSolo')
    }

    return (
        <View style={styles.background}>
            <Text style={styles.fadedTitle}>Select gender</Text>

            <View style={styles.selectionView}>

                <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => genderButtonPressed("female")}>
                    <View >
                        <Image source={femaleImage} title="FEMALE" />
                    </View>
                </TouchableOpacity>


                <View style={styles.separatorLine}>
                    <Image source={line} title />
                </View>


                <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => genderButtonPressed("male")}>
                    <View >
                        <Image source={maleImage} title="MALE" />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}
