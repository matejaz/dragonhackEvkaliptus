import React, { useState, useEffect } from 'react'
import { Text, View } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getRandomPose } from "../../api/ApiHandler"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';


export default function Action() {
    const navigation = useNavigation();

    const [position, setPosition] = useState([{ title: "" }])
    const [swipe, setSwipe] = useState("No swipe")
    useEffect(() => {
        // fetch first random position
        receiveRandomPose();
    }, [])

    const receiveRandomPose = () => {
        const randomPose = getRandomPose();
        randomPose.then((resp) => {
            if (resp.status === 200) {
                console.log(resp.data[0].title);
                setPosition(resp.data);
            }
            else {
                console.log("Can't get random pose.", resp.status, resp.data)
            }
        });
    }

    const onSwipeLeft = (state) => {
        setSwipe("U swiped left");
        navigation.navigate("EndAction");
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };
    return (
        <GestureRecognizer onSwipeLeft={(state) => onSwipeLeft()} config={config} style={styles.background} onTouchEnd={(state) => { receiveRandomPose(state) }}>

            <View>
                <Text>{position[0].title}</Text>
                <Text>{swipe}</Text>
                <Text>Tap to change position, swipe left to finish.</Text>
                <Text>Ne vem</Text>
            </View>
        </GestureRecognizer>
    )
}
