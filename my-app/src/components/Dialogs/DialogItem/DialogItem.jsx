import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Avatar from "./Avatar";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <Avatar srcAvatar={props.srcAvatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;