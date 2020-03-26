import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '../common/Avatar/Avatar';

import MainContentStyle from './MainContent.module.scss';

export const MainContent = ({ image, alt }) => (
  <div className={MainContentStyle.mainContentContainer}>
    <Avatar image={image} alt={alt} />
  </div>
);

MainContent.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string
};
