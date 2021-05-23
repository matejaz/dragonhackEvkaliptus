import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, Button } from 'react-native';

import styles from "../../../assets/style/theme.scss"
import BigButton from '../../components/BigButton';

export default function HomeCouple() {
    const navigation = useNavigation();

    return (
        <View style={styles.background}>
            <BigButton navigate="Action" title="Start session" navigation={navigation} />
            <BigButton navigate="GameIdeas" title="Game ideas" navigation={navigation} />
            <BigButton navigate="Achievements" title="Achievements" navigation={navigation} />
        </View>
    )
}
