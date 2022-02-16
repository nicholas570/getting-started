import { Camera, CameraCapturedPicture } from 'expo-camera';
import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCamera } from '../hooks/useCamera';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row'
  },
  flipButton: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export function CameraScreen() {
  const { hasPermission } = useCamera();
  const [type, setType] = useState(Camera.Constants.Type.front);

  const cameraRef = useRef<Camera | null>(null);

  const takePicture = async (): Promise<CameraCapturedPicture | undefined> => {
    const pictureMetadata = await cameraRef?.current?.takePictureAsync();
    return pictureMetadata;
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <>
      <Camera ref={cameraRef} style={styles.container} type={type} />
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.flipButton}
          onPress={() => {
            setType(type === Camera.Constants.Type.back ? Camera.Constants.Type.front : Camera.Constants.Type.back);
          }}
        >
          <Text> Flip </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.flipButton} onPress={takePicture}>
          <Text> Take picture </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
