import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Text, View, Button, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import BigButton from '../../components/BigButton';

export default function GameIdeas() {
    const navigation = useNavigation();
    const ideas = ([{ id: 1, title: "The 30 day position challenge", description: "Make an agreement with your partner to have sex for 30 days in a row." },
    { id: 2, title: "Oral dice", description: "All you need is a dice and your partner to have fun. All you have to do is roll the dice to see how long your partner should give you oral for." },
    { id: 3, title: "Dirty pictionary", description: "Sketch your sex fantasy or a sex position you want to try." },
    { id: 4, title: "Naked cooking", description: "Get naked and prepare some food with your partner. Set a timer and have sex until the timer is up." },
    { id: 5, title: "Temperature play", description: "Experiment with both cold and hot temperature. You can use ice cubes, wax..." },
    { id: 6, title: "Start a sex fantasy jar", description: "Write different fun sex acts you'd like to try with each other and put it in a jar. In the next days try those things out." },
    { id: 7, title: "Read sexy stories to each other", description: "Find some hot erotica and read to each other." },
    { id: 8, title: "Stop and start", description: "Set a timer for a time under four minutes. Do your sexual activity (anything) until the timer goes off. Then you can swap places and do it again." },
    { id: 9, title: "Everything but", description: "Try getting busy without any kind of penetration. Concentrate on how kissing feels on different parts of your body, think about all the ways you can touch each other and get out of 'penis+vagina=sex' headspace that prevents people from exploring other sexy alternatives." },
    { id: 10, title: "House party", description: "Simple rules: no one orgasms until you've boned in every room of the house." }]);
    return (
        <View style={styles.flatlistContainer}>

            <FlatList
                keyExtractor={(item) => item.id}
                data={ideas}
                renderItem={({ item }) => (

                    <View style={styles.flatlistItem}>
                        <TouchableOpacity onPress={() => Alert.alert('Right button pressed')}>
                            <Text style={styles.flatListTitle}>
                                {item.title}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={styles.flatListDescription}>
                                    {item.description}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    )
}
