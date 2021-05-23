import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import buttonStyles from "../../assets/style/buttons.scss"
import styles from "../../assets/style/theme.scss"

export default function BigButton({ title, navigate, navigation }) {
    return (
        <TouchableOpacity style={buttonStyles.bigButton} activeOpacity={0.5} onPress={() => navigation.navigate(navigate)}>
            <View >
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
