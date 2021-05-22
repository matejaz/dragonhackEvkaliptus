import React, { useState } from 'react'
import Achievement from "../components/Achievement"
import { Text, View } from 'react-native';

import styles from "../../assets/style/theme.scss"

export default function Achievements() {
    const [achievements, setAchievements] = useState(["Ena", "dva", "tri", "stiri"])
    return (
        <View style={styles.background}>
            <Text>Achievements</Text>
            {achievements.map(value => (
                <Achievement style={styles.text} name={value} />
            ))}
        </View>
    )
}
