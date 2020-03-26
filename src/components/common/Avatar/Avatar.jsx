import React from 'react';
import PropTypes from 'prop-types';

import AvatarStyle from './Avatar.module.scss';

export const Avatar = ({ image, alt }) => (
    <img className={AvatarStyle.imgBorder} src={image} alt={alt} />
);

Avatar.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};
