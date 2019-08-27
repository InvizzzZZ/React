import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/3'>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/4'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/5'>Andrey</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/6'>Vasya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Egor</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.messages}>Hi</div>
                <div className={s.messages}>Something</div>
                <div className={s.messages}>YO</div>
            </div>
        </div>
    )
};

export default Dialogs;