import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, Button } from 'react-native';

import styles from "../../../assets/style/theme.scss"

export default function HomeCouple() {
    const navigation = useNavigation();
    return (
        <View style={styles.background}>
            <Text style={styles.text}>Seeeerbus 2</Text>
            <Button onPress={() => navigation.navigate("Action")} title="Start session" />
            <Button title="Game ideas" />
            <Button title="Useful guidelines" />
        </View>
    )
}
