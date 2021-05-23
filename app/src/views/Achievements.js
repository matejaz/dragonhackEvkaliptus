import React, { useState, useEffect } from 'react'
import Achievement from "../components/Achievement"
import { Text, View } from 'react-native';
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

    return (
        <View style={styles.background}>
            {/* <Text>Achievements</Text>
            {achievements.map((value, index) => (
                <Achievement key={index} style={styles.text} name={value} />
            ))} */}
        </View>
    )
}
