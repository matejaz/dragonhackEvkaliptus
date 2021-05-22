import React from 'react'
import { Text, View } from 'react-native';

import styles from "../../../assets/style/theme.scss"

export default function SexPick() {
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Pick now</Text>
        </View>
    )
}
