import React from 'react';

import TextStyle from './Text.module.scss';

export const Text = (props) => (
  <div className={TextStyle.fullName}>
    {props.children}
  </div>
);
