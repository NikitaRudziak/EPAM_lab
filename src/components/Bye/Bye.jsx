import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../common/Text/Text';

import ByeStyle from './Bye.module.scss';

export const Bye = ({ firstName, lastName }) => (
  <div className={ByeStyle.byeContainer}>
    <Text>{`Bye ${firstName} ${lastName}`}</Text>
  </div>
);

Bye.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string
};
