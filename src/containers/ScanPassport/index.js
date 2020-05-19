import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import GlobalColors from '@constants/Colors';
import { normalizeSize } from '@constants/Layout';

export default function ScanPassport(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const { navigation } = props;

  useEffect(() => {
    (async () => {
      const permission = await Permissions.getAsync(Permissions.CAMERA_ROLL);
      if (permission.status !== 'granted') {
        const newPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (newPermission.status === 'granted') {
          setHasPermission(true);
        }
      }
    })();
  }, []);

  // if (hasPermission === null) {
  //   return <View />;
  // }
  // if (hasPermission === false) {
  //   return <Text>No access to camera</Text>;
  // }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignSelf: 'flex-end'
          }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate('Home');
              }} />
            <TouchableOpacity
              style={styles.takePhoto}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }} />
          </View>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  backButton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: GlobalColors.secondaryColor,
    width: normalizeSize(96),
    height: normalizeSize(68),
    borderBottomRightRadius: normalizeSize(34),
    borderTopRightRadius: normalizeSize(34)
  },
  takePhoto: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    width: normalizeSize(80),
    height: normalizeSize(80),
    borderRadius: normalizeSize(40),
    borderColor: GlobalColors.inactiveTextColor,
    borderWidth: 6
  }
});
