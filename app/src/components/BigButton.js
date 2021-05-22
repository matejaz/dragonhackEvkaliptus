import React from 'react'

export default function BigButton({ title, navigate }) {
    return (
        <TouchableOpacity style={buttonStyles.imageButton} activeOpacity={0.5} onPress={() => navigation.navigate(navigate)}>
            <View >
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}
