import React, { useState } from 'react';
import { useEffect } from 'react';
import { Text, View, FlatList, Button, Alert, TouchableOpacity, Image } from 'react-native';
import styles from "../../../assets/style/theme.scss"
import { getSoloActivities } from "../../api/ApiHandler"
import { useNavigation } from '@react-navigation/native';
import User from "../../../utils/User.js"


export default function HomeSolo() {
    const navigation = useNavigation();
    
    const [soloItems, setSoloItem] = useState([]);

    useEffect(() => {
        //User.clearData();
        //fetch all solo activities
        receiveSoloActivities();
    }, [])

    const receiveSoloActivities = () => {
        const soloActivities = getSoloActivities();
        soloActivities.then((resp) => {
            if (resp.status === 200) {
                console.log("Solo activities:\n" + resp.data[0].title);
                setSoloItem(resp.data);
            }
            else {
                console.log("Can't get solo activities.", resp.status, resp.data)
            }
        });
    }

    return (

        <View style={styles.flatlistContainer}>

            <FlatList
                keyExtractor={(item) => item._id}
                data={soloItems}
                renderItem={({ item }) => (
                    
                    <View style={styles.flatlistItem}>
                        <Text style={styles.flatListTitle}>
                            {item.title}
                        </Text>
                        <View style={{flexDirection: 'row',  justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <Text style={styles.flatListDescription}>
                                {item.description}
                            </Text>
                            <TouchableOpacity onPress={()=> navigation.navigate('Guide', {itemId: item._id})}>
                                <Image style={styles.doubleRightImage} source={require('../../../assets/media/double-right.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            
        </View>
    );

}
