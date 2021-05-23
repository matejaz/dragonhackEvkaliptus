import React, { useState, useEffect } from 'react'
import Achievement from "../components/Achievement"
import { Text, View, FlatList, Image } from 'react-native';
import { getAchievements } from "../api/ApiHandler.js";
import User from "../../utils/User.js";

import styles from "../../assets/style/theme.scss"
import oneHandedImage from "../../assets/media/SkillOnehanded.png"

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
        <View style={styles.achievementsBackground}>
            {/* <Button title="Back"></Button> */}
            <View style={styles.statsView} >
                <Text style={styles.achievementsTitle}>Achievements</Text>
                <Text style={styles.achievementsText}>High Score: {User.getUserInfo().score}</Text>
                <Text style={styles.achievementsText}>Endurance score: {User.getUserInfo().endurance}</Text>
                {/* <Text style={styles.achievementsText}>Streak: {User.getUserInfo().score}</Text> */}
            </View>
            <Text style={styles.achievementsTitle}>Challenges</Text>
            <View style={styles.challengesView}>
                <FlatList keyExtractor={(item, index) => { return item.id; }} data={achievements} renderItem={({ item }) => (

                    <View style={styles.challengeItem} key={item.key}>
                        <View style={styles.challengeContent}>
                            <Image style={styles.challengeIcon}
                                source={oneHandedImage}
                            />
                            <Text style={styles.achievementsText}>
                                {item.title}
                            </Text>
                        </View>

                    </View>
                )} />
            </View>
        </View>
    )
}
