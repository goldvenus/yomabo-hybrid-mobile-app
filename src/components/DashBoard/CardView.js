import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeSize, borderRadius, paddingSize } from '@constants/Layout';

export const CardView = () => (
  <View style={styles.container} />
);

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(186),
    height: normalizeSize(253),
    backgroundColor: 'white',
    borderRadius: borderRadius.large,
    marginRight: paddingSize.dashCard,
    shadowOffset: {
      height: 3
    },
    shadowOpacity: 0.06,
    shadowRadius: 30,
  }
});
