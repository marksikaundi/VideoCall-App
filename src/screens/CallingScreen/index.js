import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CallingScreen = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cameraPreview}>
            <Text style={styles.name}>Mark</Text>
            <Text style={styles.phoneNumber}>Ringing +260 973 433 58</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Text>Icons</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        height: '100%',
    },
    cameraPreview: {
        backgroundColor: '#7b4e80',
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 50,
        marginBottom: 20,
    },
    phoneNumber: {
        fontSize: 20,
        color: 'white',
    },
    buttonContainer: {},
})
export default CallingScreen;
