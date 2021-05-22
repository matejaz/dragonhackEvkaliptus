import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getRandomPose } from "../../api/ApiHandler"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';


export default function EndAction() {

    return (

        <View >
            <Text>Ended</Text>
        </View>
    )
}
