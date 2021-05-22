import React, { useState } from 'react';
import { Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import styles from "../../../assets/style/theme.scss"

export default function HomeSolo() {

    const [soloItems, setsoloItem] = useState([
        {
            id: "1",
            title: "Tantra Mastrubation",
            description: "Solo tantra is the first step in having a partnered, tantric experience."
        },
        {
            id: "2",
            title: "Master Your Orgasm",
            description: "Because, who needs anyone else when you can give yourself the best orgasms."

        },
        {
            id: "3",
            title: "Better Sleep",
            description: "Let go of the stress and the thoughts that keep you awake throughday."
        },{
            id: "4",
            title: "Better Sleep",
            description: "Let go of the stress and the thoughts that keep you awake throughday."
        },
    ]);

    const pressHandler = (id) => {
        console.log(id);
        setsoloItem((prevSoloItem) => {
            return prevSoloItem.filter(soloItem => soloItem.id != id);
        });
    };

    return (

        <View style={styles.flatlistContainer}>

            <FlatList
                keyExtractor={(item) => item.id}
                data={soloItems}
                renderItem={({ item }) => (
                    
                    <View style={styles.flatlistItem}>
                        <Text style={styles.flatListTitle}>
                            {item.title}
                        </Text>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={styles.flatListDescription}>
                                {item.description}
                            </Text>
                            <TouchableOpacity onPress={()=> Alert.alert('Right button pressed')}>
                                <Image style={styles.doubleRightImage} source={require('../../../assets/media/double-right.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            
        </View>
    );

}
