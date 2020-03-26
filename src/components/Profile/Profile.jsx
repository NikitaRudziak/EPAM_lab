import React from 'react';

import ProfileStyle from './Profile.module.scss';

export const Profile = () => (
  <div className={ProfileStyle.profileContainer}>
    <div className={ProfileStyle.profileInfo}>
      <h1>Smth about Andrew Hopkins</h1>
      <hr/>
      <p>
        Professor Andrew Hopkins is considered one of the world’s foremost constructive critics on
        Occupational Health and Safety. He has written extensively on OHS issues, including two books Lessons
        from Longford and Safety, Culture and Risk and has conducted lectures for organisations such as BHP,
        Shell, Concord Phillips, the Offshore Petroleum Safety Conference, Origin Energy, Queensland Alumina,
        and the Australian Defence Forces Academy. He was an expert witness at the Royal Commission into the causes
        of the fire at Esso’s gas plant at Longford in 1998 and in 2001 was an expert member of a Board of Inquiry into
        the poisoning of F111 maintenance workers at Amberley Air Force Base.
      </p>
    </div>
  </div>
);
