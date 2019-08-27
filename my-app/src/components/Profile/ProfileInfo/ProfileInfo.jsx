import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props)=>{
  return(
        <div>
            <div className={s.picture}>
                <img src="https://www.tokkoro.com/picsup/5076526-black-amp-white-checkerboard-kaleidoscope.png" alt="123"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
  )
};

export default ProfileInfo;