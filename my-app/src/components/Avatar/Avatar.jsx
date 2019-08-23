import React from 'react';
import s from './Avatar.module.css';

const Avatar = ()=>{
    return(
        <div className={s.Avatar}>
            <div className={s.Avatarka}>
                <img src="https://i.pinimg.com/originals/17/61/74/176174d8b50a0de17ae5215480949f85.jpg" alt=""/>
            </div>
            <div className={s.description}>
                <h4>Dmitry A.</h4>
                <p>Date of Birth: 20 september <br/>
                City: Minsk <br/>
                Education: BSUIR'10</p>
            </div>
        </div>
    )
};

export default Avatar;