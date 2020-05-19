import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { normalizeSize } from '@constants/Layout';
import { Icon } from '../../components/Icon';
import AppMocData from '@share/MocData';

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
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Icon imageUrl={AppMocData.Icons.scanviewBackButton} width={96} height={68} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.takePhoto}
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Icon imageUrl={AppMocData.Icons.scanviewCameraButton} width={85} height={85} />
            </TouchableOpacity>
          </View>

        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
    paddingRight: normalizeSize(27),
    paddingBottom: normalizeSize(15)
  },
  container: {
    flex: 1,
    backgroundColor: '#222222',
  },
  backButton: {
    alignSelf: 'flex-start',
    alignItems: 'center',
  },
  takePhoto: {
    alignSelf: 'flex-end',
    alignItems: 'center'
  }
});
