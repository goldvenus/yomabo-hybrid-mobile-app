import React from 'react';
import { View, StyleSheet } from 'react-native';
import { normalizeSize, borderRadius, paddingSize } from '@constants/Layout';
import PropTypes from 'prop-types';

export const CardView = ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: normalizeSize(186),
    height: normalizeSize(253),
    backgroundColor: 'white',
    padding: paddingSize.screen,
    paddingBottom: 0,
    flexDirection: 'column',
    borderRadius: borderRadius.large,
    marginRight: paddingSize.dashCard,
    shadowOffset: {
      height: 3
    },
    shadowOpacity: 0.06,
    shadowRadius: 30,
  }
});

CardView.propTypes = {
  children: PropTypes.object,
  style: PropTypes.object
};

CardView.defaultProps = {
  children: null,
  style: {}
};
