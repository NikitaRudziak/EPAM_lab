import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from '../../../common/Avatar';

import CardStyle from './Card.module.scss';

export const Card = ({ id, price, title, imageUrl, res, onClick }) => (
  <div className={CardStyle.card}>
    <div className={CardStyle.deleteCard} onClick={onClick}>
      <i class="la la-close" />
    </div>
    <div>
      <Avatar image={imageUrl} />
    </div>
    <div className={CardStyle.title}>{title}</div>
    <div className={CardStyle.infoContainer}>
      <span>
        <div>
          <i class="la la-key" />
          ID:
        </div>
        <div>
          <i class="la la-image" />
          Res:
        </div>
        <div>
          <i class="la la-money" />
          Price:
        </div>
      </span>
      <span>
        <div>{id}</div>
        <div>{res}</div>
        <div>{price}</div>
      </span>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  res: PropTypes.string
};
