import { useNavigation } from '@react-navigation/core'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CameraPreview from './camerapreview'

export default function Home(props) {
    const [capturedPhoto, setcapturedPhoto] = useState(null)
    const navigation = useNavigation();

    useEffect(() => {
        const { route } = props
        const { photo } = route.params
        if (photo) {
            setcapturedPhoto(photo)
        }
    }, []) // component mount

    useEffect(() => {
        const { route } = props
        const { photo } = route.params
        if (photo) {
            setcapturedPhoto(photo)
        }
    }) // component update

    const openCameraFunc = () => {
        navigation.navigate("MyCamera")
    }

    return (
        <View style={styles.container}>
            <CameraPreview source={{ uri: capturedPhoto }} style={styles.backgroundImage}>
            <View style={styles.ContentWrapper}>
                <Text style={{ color: capturedPhoto ? '#fff' : '#000' }}>My First Camera App !!!!</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={openCameraFunc}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Open Camera</Text>
                    </TouchableOpacity>

                </View>
                </View>
            </CameraPreview>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1
    },
    ContentWrapper: {
        marginTop: 100,
        marginLeft: 20
    }
});
