import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const CameraPreview = (props) => {
    return (
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
          width: '100%',
          height: '100%'
        }}
      >
        <ImageBackground
          source={{uri: props.source.uri}}
          style={{
            flex: 1
          }}>
              {props.children}
        </ImageBackground>
      </View>
    )
  }

  export default CameraPreview