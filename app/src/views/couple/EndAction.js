import React, { useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getRandomPose, updateUserById } from "../../api/ApiHandler"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';
import { updateUserScoresById } from "../../api/ApiHandler.js"
import User from "../../../utils/User.js";


export default function EndAction({ route }) {
    var userId

    useEffect(() => {
        userId = User.getId();
    }, []);

    const navigation = useNavigation();
    const { enduranceScore } = route.params;
    var score = enduranceScore * 4;

    var totalEndurance = User.getUserInfo().endurance + enduranceScore;
    var totalScore = User.getUserInfo().score + score;

    const updatedUserResponse = updateUserScoresById(User.getUserInfo()._id, totalEndurance, totalScore);
    updatedUserResponse.then((resp) => {
        if (resp.status === 200) {
            console.log("User updated", resp.data);
            User.setUserInfo(resp.data);
        }
        else {
            console.log("Fetching user failed", resp.status, resp.data)
        }
    })

    return (

        <View style={styles.background}>
            <Text style={styles.endActionText}> Endurance score:</Text>
            <Text style={styles.endActionScore}>{enduranceScore}</Text>

            <Text style={styles.endActionText}> Total score:</Text>
            <Text style={styles.endActionScore}>{score}</Text>
            <Button title="Back" onPress={() => { navigation.navigate("HomeCouple") }}></Button>
        </View>
    )
}
