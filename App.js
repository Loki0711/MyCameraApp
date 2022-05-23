import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCamera from './mycamera'
import Home from './home'
import CameraPreview from './camerapreview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (<>
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: { backgroundColor: 'orangered' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
    }}>
        <Stack.Screen component={Home} initialParams={{ photo: null }} name="Home"></Stack.Screen>
        <Stack.Screen component={MyCamera} name="MyCamera"></Stack.Screen>
        <Stack.Screen component={CameraPreview} name="CameraPreview"></Stack.Screen>
    </Stack.Navigator>
</NavigationContainer>

</>);
}
