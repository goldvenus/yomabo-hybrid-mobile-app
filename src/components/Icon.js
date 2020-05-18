import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';

export const Icon = (props) => {
  const { imageUrl, width, height, ...otherStyle } = props;
  return (
    <Image
      source={imageUrl}
      style={{
        width,
        height,
        ...otherStyle
      }} />
  );
};

Icon.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  otherStyle: PropTypes.object
};

Icon.defaultProps = {
  width: 28,
  height: 28,
  otherStyle: {}
};
