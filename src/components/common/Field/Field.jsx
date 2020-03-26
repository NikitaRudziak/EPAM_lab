import React from 'react';

import FieldStyle from './Field.module.scss';

export const Field = ({ name, onChange, placeholder, error }) => (
  <>
    <input type="text" name={name} onChange={onChange} placeholder={placeholder} />
    <div className={FieldStyle.valid}>{error}</div>
  </>
);
