import React from 'react';
import s from './Avatar.module.css';

const Avatar = (props)=>{
  return(
      <div className={s.blockAvatar}>
          <img className={s.avatar} src={props.srcAvatar} alt=""/>
      </div>
  )
};

export default Avatar;