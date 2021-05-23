import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getRandomPose } from "../../api/ApiHandler"
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import { useNavigation, useRoute, useFocusEffect, useNavigationState } from '@react-navigation/native';


export default function Action() {
    const navigation = useNavigation();
    var timer = 0;
    var [duration, setDuration] = useState(0)
    const [position, setPosition] = useState([{ title: "" }])
    const [swipe, setSwipe] = useState("No swipe")

    useEffect(() => {
        // fetch first random position
        receiveRandomPose();

        setInterval(() => {
            setDuration(duration++)
        }, 1000);

    }, [])

    const receiveRandomPose = () => {
        const randomPose = getRandomPose();
        randomPose.then((resp) => {
            if (resp.status === 200) {
                console.log(resp.data[0].title);
                setPosition(resp.data[0]);
            }
            else {
                console.log("Can't get random pose.", resp.status, resp.data)
            }
        });
    }

    const onSwipeLeft = (state) => {
        setSwipe("U swiped left");
        navigation.navigate("EndAction", { enduranceScore: duration });
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    return (
        <GestureRecognizer onSwipeLeft={(state) => onSwipeLeft()} config={config} style={styles.background} onTouchEnd={(state) => { receiveRandomPose(state) }}>

            <View>
                <View style={styles.titleSection}>

                    <Text style={styles.title}>{position.title}</Text>
                    <Text style={styles.description}>{position.description}</Text>
                </View>
                <View style={styles.image}>
                    {position.picture !== "smth" &&
                        <Image style={ImageStyle.image} source={{ uri: `https://dhevkaliptus.herokuapp.com${position.picture}`, }} />
                    }
                </View>
                <Text style={styles.timer}>{duration}</Text>
                <Text style={styles.instructions}>Endurance Score</Text>
                <Text style={styles.instructions}>Tap to change position, slide left to finish.</Text>
            </View>
        </GestureRecognizer>
    )
}

const ImageStyle = StyleSheet.create({
    image: {
        width: 250,
        height: 350,
        resizeMode: "contain"
    }
})
