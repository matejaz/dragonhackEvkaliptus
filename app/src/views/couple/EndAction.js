import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getRandomPose } from "../../api/ApiHandler"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';


export default function EndAction() {

    const navigation = useNavigation();
    return (

        <View style={styles.background}>
            <Text>Ended</Text>
            <Button title="Back to home" onPress={() => { navigation.navigate("HomeCouple") }}></Button>
        </View>
    )
}
