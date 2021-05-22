import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';

import styles from "../../../assets/style/theme.scss"
import buttonStyles from "../../../assets/style/buttons.scss"
import maleImage from "../../../assets/media/male.png"
import femaleImage from "../../../assets/media/female.png"
import line from "../../../assets/media/line.png"

export default SexPick = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <Text style={styles.text}>Select gender</Text>

            <View style={styles.selectionView}>

                <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate('HomeSolo')}>
                    <View >
                        <Image source={femaleImage} title="FEMALE" />
                    </View>
                </TouchableOpacity>


                <View style={styles.separatorLine}>
                    <Image source={line} title />
                </View>


                <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate('HomeSolo')}>
                    <View >
                        <Image source={maleImage} title="MALE" />
                    </View>
                </TouchableOpacity>

            </View>
        </View>
    )
}
