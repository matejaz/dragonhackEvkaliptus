import React, {useState, useEffect} from 'react'
import { View, Text, Button, Alert, Pressable } from 'react-native'
import { getsoloActivityById } from '../../api/ApiHandler';
import { useNavigation, route } from '@react-navigation/native';
import styles from "../../../assets/style/theme.scss"

export default function Guide({ route }) {

    const navigation = useNavigation();

    const [guide, setGuide] = useState([])
    const { itemId } = route.params; 

    useEffect(() => {
        // fetch first random position
        console.log("itemId: " + itemId)
        receiveSoloActivityById();
    }, [])

    const receiveSoloActivityById = () => {
        //const { itemId } = route.params;
        
        const soloGuide = getsoloActivityById(itemId);
        soloGuide.then((resp) => {
            if (resp.status === 200) {
                console.log(resp.data.title);
                setGuide(resp.data);
            }
            else {
                console.log("Can't get solo guide.", resp.status, resp.data)
            }
        });
    }

    return (
        <View style={[styles.background, {alignItems: 'flex-start',  justifyContent: 'flex-start'}]}>
            <Text style={styles.guideTitle}> { guide.title} </Text>
            <Text style={styles.guideContent}> { guide.content } </Text>
            <Pressable style={styles.guideButton} onPress={ () => navigation.navigate('HomeSolo')}>
                <Text style={styles.guideButtonText}>FINITO!</Text>
            </Pressable>
        </View>
    )
}
