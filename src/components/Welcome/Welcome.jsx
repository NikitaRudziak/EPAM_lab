import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Text } from '../common/Text/Text';

import WelcomeStyle from './Welcome.module.scss';

export const Welcome = ({ firstName, lastName }) => (
  <div className={WelcomeStyle.welcomeContainer}>
    <Text> {`Hello ${firstName} ${lastName}`}</Text>
    <Link className={WelcomeStyle.link} to='/profile'>
      <div className={WelcomeStyle.linkContainer}>
        Profile
      </div>
    </Link>
  </div>
);

Welcome.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
