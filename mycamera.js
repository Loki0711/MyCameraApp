import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { useNavigation } from '@react-navigation/core'

export default function MyCamera(props) {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const navigation = useNavigation();
    let cameraRef

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    takePicture = () => {
        if (cameraRef) {
            cameraRef.takePictureAsync({ onPictureSaved: onPictureSaved });
        }
    };

    onPictureSaved = capturedPhoto => {
        navigation.navigate("Home", { photo: capturedPhoto.uri });
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={(ref) => { cameraRef = ref }}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={takePicture}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Capture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    buttonContainer: {
        width: '60%',
        position: 'absolute',
        bottom: 80,
        right: 80
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
    }
});