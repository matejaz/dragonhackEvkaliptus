import React, { useState, useEffect } from 'react'
import Achievement from "../components/Achievement"
import { Button, Text, View, FlatList } from 'react-native';
import { getAchievements } from "../api/ApiHandler.js";
import User from "../../utils/User.js";

import styles from "../../assets/style/theme.scss"

export default function Achievements() {
    const [achievements, setAchievements] = useState([])
    const [userAchievements, setUserAchievements] = useState([])

    useEffect(() => {
        console.log("Fetching User Achievements");
        setUserAchievements(User.getUserInfo().achievements);
        console.log(userAchievements)

        console.log("Fetching All Achievements");
        const achievementsResponse = getAchievements();
        achievementsResponse.then((resp) => {
            if (resp.status === 200) {

                console.log("Achievements received", resp.data);
                setAchievements(resp.data);
            }
            else {
                console.log("Fetching achievements failed", resp.status, resp.data)
            }
        })
    }, []);

    // getScore(){
    //     if (User.getUserInfo().score !== null) {
    //         return User.getUserInfo().score;
    //     }
    //     else {
    //         return 0
    //     }
    // }

    return (
        <View style={styles.achievementsBackground}>
            {/* <Button title="Back"></Button> */}
            <View style={styles.statsView} >
                <Text style={styles.achievementsTitle}>Achievements</Text>
                <Text style={styles.achievementsText}>High Score: {User.getUserInfo().score}</Text>
                <Text style={styles.achievementsText}>Longest time: {User.getUserInfo().score}</Text>
                <Text style={styles.achievementsText}>Streak: {User.getUserInfo().score}</Text>
            </View>
            <Text style={styles.achievementsTitle}>Challenges</Text>
            <View style={styles.challengesView}>
                {/* <FlatList keyExtractor={(item) => item.id} data={achievements} renderItem={({ item }) => (

                    <View key= {item.id} >
                        <Text style={styles.flatListTitle}>
                            {item.title}
                        </Text>
                    </View>
                )} /> */}
            </View>
        </View>
    )
}
